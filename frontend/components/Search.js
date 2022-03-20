import {useLazyQuery} from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
      query SEARCH_PRODUCTS_QUERY($searchTerm: String!){
          searchTerms: allProducts(where:{
              OR: [
                  { name_contains_i: $searchTerm}
                  { description_contains_i: $searchTerm}
              ]
          }){
              id
              name
              photo{
                  image{
                      publicUrlTransformed
                  }
              }
          }
      }
`;

export default function Search(){
 const [findItems, {loading, data, error}] = useLazyQuery(SEARCH_PRODUCTS_QUERY, {
     fetchPolicy: 'no-cache',
 });
 const items = data?.searchTerms || [];
 const findItemsButChill = debounce(findItems, 350)
    resetIdCounter();
    const { inputValue, getMenuProps, getInputProps, getComboboxProps }= useCombobox({
      items: [],
      onInputValueChange(){
        findItemsButChill({
            variables:{
                searchTerm: inputValue
            }
        });
      },
      onSelectedItemChange(){

      }
  });
    return(
        <SearchStyles>
         <div {...getComboboxProps()}>
             <input {...getInputProps({
                 type: 'search',
                 placeholder: 'Search for an item',
                 id: 'search',
                 className: 'loading'
             })}/>
         </div>
         <DropDown {...getMenuProps()} >
             {items.map((item) =>(
                 <DropDownItem>{item.name}</DropDownItem>
             ))}
         </DropDown>
        </SearchStyles>
    )
}