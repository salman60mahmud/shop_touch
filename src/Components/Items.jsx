import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import './Items.css';

const Items = () => {
  const { data, loading } = useContext(OurContext);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-medium mt-28">POPULAR IN WOMEN</h1>
      <hr className="horizontal" />

      <div className="flex justify-center mt-20 gap-10">

        {data?.length > 0 ? (
          data.map(data => (
            <div className="items" key={data.id}>
              <Link to={`/products/${data.id}`}><img onClick={() => window.scrollTo(0, 0)} src={data.image} alt="data.name" /></Link>
              <p>{data.name}</p>
              <div className="flex gap-20">
                <div className="items-prices-new">
                  Price: ${data.new_price}
                </div>
                <div className="items-prices-old">
                  ${data.old_price}
                </div>
              </div>
            </div>)
          )) : (
          <p>No popular products found</p>
        )}
      </div>
    </div>
  );
};
export default Items;