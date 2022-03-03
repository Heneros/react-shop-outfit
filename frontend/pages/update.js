import UpdateProduct from "../components/UpdateProduct";

export default function UpdatePage({query}) {
  return <p>
    <UpdateProduct id={query.id} />
  </p>;
}
