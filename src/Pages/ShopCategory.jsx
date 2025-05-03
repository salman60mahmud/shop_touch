import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";


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
              <div className="hover:scale-125 transition-transform duration-600" key={allProduct.name}>
                 <Link to={`/products/${allProduct.id}`}><img src={allProduct.image} alt="allProduct_image" /></Link>
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
      <div className="flex justify-center my-30">
        <button className="btn rounded-3xl text-[18px] font-normal px-8 py-6 hover:translate-1 hover:scale-100 cursor-pointer">Explore More</button>
      </div>
    </div>
  );
};
;

export default ShopCategory;