import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { FaAngleDown } from "react-icons/fa6";


const ShopCategory = ({ banner, category }) => {
  const { allProduct, loading } = useContext(OurContext);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="shop-category">
      <img src={banner} alt={`${category} banner`} />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out Of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort By <FaAngleDown />
        </div>
      </div>

      <div className="shopCategory-products">
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