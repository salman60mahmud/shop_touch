import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import './Items.css'

const Items = () => {
  const { data, loading } = useContext(OurContext);

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h1 className="text-5xl font-medium text-center mt-20 mb-8">POPULAR IN WOMEN</h1>
      <hr />

      <div className="flex justify-center gap-28">

        {data?.map (data => (
          <div className="items">
            <img src={data.image} alt="data_image" />
            <p>{data.name}</p>
            <div className="flex gap-20">
              <div className="items-prices-new">
                {data.new_price}
              </div>
              <div className="items-prices-old">
                {data.old_price}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Items;