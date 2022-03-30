import styled from 'styled-components';
 
const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  border-top: 10px solid red;
  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid var(--offWhite);
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .images{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(0,1fr));
    grid-gap: 10px;
    margin-top: 1rem;
    img{
      width: 100%;
      height: 350px;
      object-fit: cover; 
    }

  }
  .items{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 4rem;
    img{
      width: 100%;
      height: 350px;
      object-fit: cover; 
    }
  }
  .order-item {
    border-bottom: 1px solid var(--offWhite);
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
 
  }
`;
export default OrderStyles;
