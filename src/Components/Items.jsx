import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import './Items.css';

const Items = () => {
  const { data, loading } = useContext(OurContext);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="xl:text-5xl sm:text-3xl text-2xl font-medium mt-28">POPULAR IN WOMEN</h1>
      <hr className="horizontal" />

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:mt-20 sm:mt-8 mt-5 xl:gap-10 sm:gap-6 gap-4 xl:mx-30 sm:mx-20 mx-10">

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