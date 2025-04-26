import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { FaAngleDown } from "react-icons/fa6";


const ShopCategory = ({ banner, category }) => {
  const { allProduct, loading } = useContext(OurContext);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="shop-category">
      <img className="block w-3/4 mx-auto my-10" src={banner} alt={`${category} banner`} />
      <div className="flex justify-between mx-60">
        <p className="text-xl">
          <span className="font-semibold">Showing 1-12</span> Out Of 36 Products
        </p>
        <button className="btn rounded-3xl text-xl font-normal">Sort By <FaAngleDown />
          </button>
      </div>

      <div className="grid grid-cols-4 gap-10 mb-30 mt-8 mx-60">
        {allProduct?.map(allProduct => {
          if (category === allProduct.category) {
            return (
              <div>
                <img src={allProduct.image} alt="data_image" />
                <p>{allProduct.name}</p>
                <div className="flex gap-20">
                  <div className="collections-prices-new">
                    Price: ${allProduct.new_price}
                  </div>
                  <div className="collections-prices-old">
                    ${allProduct.old_price}
                  </div>
                </div>
              </div>)
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
;

export default ShopCategory;