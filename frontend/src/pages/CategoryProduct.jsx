import { useParams } from "react-router";

const CategoryProduct = () => {
  const params = useParams();

  return <div>{params?.categoryName}</div>;
};
export default CategoryProduct;
