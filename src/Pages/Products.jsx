
import { useParams } from 'react-router-dom';

const Products = () => {
  const { productId } = useParams();

  return (
    <div>
      {productId ? (
        <h1>Product ID: {productId}</h1>
      ) : (
        <h1>All Products</h1>
      )}
    </div>
  );
};

export default Products;