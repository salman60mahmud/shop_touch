import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { useParams } from "react-router";
import Breadcrumbs from "../Components/Breadcrumbs";
import ProductDisplay from "../Components/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts";

const Products = () => {
  const { allProduct, loading } = useContext(OurContext);
  const { productsId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productsId));

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      {product ? (
        <Breadcrumbs products={product} />
      ) : (
        <h1>BreadCrumbs</h1>
      )}
      {product ? (
        <ProductDisplay products={product} />
      ) : (
        <h1>Products Details</h1>
      )}
      {product ? (
        <DescriptionBox products={product} />
      ) : (
        <h1>Products Descriptions</h1>
      )}
      {product ? (
        <RelatedProducts category={product.category} />
      ) : (
        <h1> Related Products</h1>
      )}
    </div>
  );
};

export default Products;