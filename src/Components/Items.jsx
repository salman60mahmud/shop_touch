import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import './Items.css'

const Items = () => {
  const { data, loading } = useContext(OurContext);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-medium mt-28">POPULAR IN WOMEN</h1>
      <hr className="horizontal" />

      <div className="flex justify-center mt-20 gap-10">

        {data?.map(data => (
          <div className="items">
            <img src={data.image} alt="data_image" />
            <p>{data.name}</p>
            <div className="flex gap-20">
              <div className="items-prices-new">
                Price: ${data.new_price}
              </div>
              <div className="items-prices-old">
                ${data.old_price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Items;