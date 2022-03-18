import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
      query SEARCH_PRODUCTS_QUERY($searchTerm: String!){
          searchTerms: allProducts(where:{
              
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
 resetIdCounter();
    const { getMenuProps, getInputProps, getComboboxProps }= useCombobox({
      items: [],
      onInputValueChange(){

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
             <DropDownItem>Hey</DropDownItem>
             <DropDownItem>Welcome</DropDownItem>
             <DropDownItem>Back</DropDownItem>
         </DropDown>
        </SearchStyles>
    )
}