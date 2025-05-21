import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ShopCategory = ({ banner, category }) => {
  const { allProduct, loading } = useContext(OurContext);

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <img className="block xl:w-3/4 w-4/5 mx-auto xl:my-10 my-5" src={banner} alt={`${category} banner`} />
      <div className="flex xl:justify-between sm:justify-around gap-24 xl:mx-60 sm:mx-4 mx-10">
        <p className="md:text-xl">
          <span className="font-semibold">Showing 1-12</span> Out Of 36 Products
        </p>
        <button className="btn rounded-3xl md:text-xl font-normal">Sort By <FaAngleDown />
        </button>
      </div>

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 xl:gap-10 sm:gap-6 gap-4 xl:mb-30 sm:mb-18 mb-8 xl:mt-8 mt-4 xl:mx-60 sm:mx-20 mx-10">

        {allProduct?.length > 0 ? (
          allProduct.map(allProduct => {
            if (category === allProduct.category) {
              return (
                <div className="hover:lg:scale-110 transition-transform duration-600" key={allProduct.name}>
                  <Link to={`/products/${allProduct.id}`}><img onClick={() => window.scrollTo(0, 0)} src={allProduct.image} alt="allProduct_image" /></Link>
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
          }
          )) : (
          <p>No product found</p>
        )}
      </div>

      <div className="flex justify-center xl:my-30 sm:my-14 my-10">
        <button className="btn rounded-3xl xl:text-[18px] sm:text-[16px] xl:font-semibold sm:font-medium font-normal px-8 py-6 cursor-pointer">Explore More</button>
      </div>
    </div>
  );
};
;

export default ShopCategory;