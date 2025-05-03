import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";


const ProductDisplay = (props) => {
    const { products } = props;

    return (
        <div className="flex mx-30 my-8 gap-10">
            <div className="flex gap-4">
                <div className="flex flex-col gap-3">
                    <img className="h-[166px] w-48" src={products.image} alt="allProduct_image" />
                    <img className="h-[166px] w-48" src={products.image} alt="allProduct_image" />
                    <img className="h-[166px] w-48" src={products.image} alt="allProduct_image" />
                    <img className="h-[166px] w-48" src={products.image} alt="allProduct_image" />
                </div>
                <div>
                    <img className="h-[700px] w-[836px]" src={products.image} alt="allProduct_image" />
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-medium mt-4 mb-3">{products.name}</h1>
                <div>
                    <div className="flex text-orange-600">
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStarHalfStroke /></span>
                        <p className="ml-2 text-black">(122)</p>
                    </div>
                    <div className="flex gap-12">
                        <div>${products.old_price}</div>
                        <div>Price: ${products.new_price}</div>
                    </div>
                    <div><h3 className="my-5 font-medium">{products.description}</h3></div>
                    <div>
                        <h1 className="font-semibold">Select Size</h1>
                        <div>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button className="btn">ADD TO CART</button>
                    <p><span>Category: </span>Women, T-Shirt, Crop Top</p>
                    <p><span>Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;