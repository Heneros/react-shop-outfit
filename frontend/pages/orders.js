import gql from "graphql-tag"
import { useQuery } from "@apollo/client";
import ErrorMessage from '../components/ErrorMessage';
import OrderStyles from '../components/styles/OrderStyles';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import OrderItemStyles from '../components/styles/OrderStyles';
import Link from 'next/link';


const USER_ORDERS_QUERY = gql`
  query {
      allOrders{
          id
          charge
          total
          user{
              id
          }
          items{
              id
              name
              description
              price
              quantity
              photo{
                  image{
                      publicUrlTransformed
                  }
              }
          }
      }
  }
`;

const OrderUI = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   grid-gap: 4rem;
`;

function countItemsInAnOrder(order){
  return order.items.reduce((tally, item) => tally  + item.quantity, 0);
}

export default function OrdersPage(){ 
    const { data, error, loading } = useQuery(USER_ORDERS_QUERY);
    if(loading) return <p> Loading... </p>
    if(error) return <ErrorMessage error={error}/>
    const { allOrders } = data;
    return( <div> 
      <Head>
        <title>You have {allOrders.length} </title>
      </Head>
      <h2> You have {allOrders.length}</h2>
      <OrderUI>
          {allOrders.map((order) =>(
            <OrderItemStyles>
             <Link href={`/order/${order.id}`}>
               <a>
               <div className="order-meta">
               <p> {countItemsInAnOrder(order)} items </p>
               <p>   {order.items.length} Product{order.items.length === 1 ? '' : 's'}</p>
                 <p> {formatMoney(order.total)} </p>
               </div>
               <div className="images">
                 {order.items.map((item) =>(
                   <img 
                   key={`images-${item.id}`}
                   src={item.photo?.image?.publicUrlTransformed}
                   alt={item.name}
                    />
                 ))}
               </div>
               </a>
             </Link>
            </OrderItemStyles>
          ))}
      </OrderUI>
       </div>
       );
}