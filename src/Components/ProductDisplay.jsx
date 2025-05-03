import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";


const ProductDisplay = (props) => {
    const { products } = props;

    return (
        <div className="flex mx-32 my-8">
            <div className="flex gap-4">
                <div>
                    <img src={products.image} alt="allProduct_image" />
                    <img src={products.image} alt="allProduct_image" />
                    <img src={products.image} alt="allProduct_image" />
                    <img src={products.image} alt="allProduct_image" />
                </div>
                <div>
                    <img src={products.image} alt="allProduct_image" />
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-medium mt-4">{products.name}</h1>
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
                    <div><h3 className="my-5">{products.description}</h3></div>
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