import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { OurContext } from "../Context/ContextProvider";

const ProductDisplay = (props) => {
    const { products } = props;
    const { addToCart } = useContext(OurContext);

    return (
        <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-6 sm:my-9 gap-6">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:flex flex-row md:flex-col gap-3 order-2 md:order-1 hidden">
                    <img className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[166px] w-[80px] sm:w-[100px] md:w-[120px] lg:w-48" src={products.image} alt="allProduct_image" />
                    <img className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[166px] w-[80px] sm:w-[100px] md:w-[120px] lg:w-48" src={products.image} alt="allProduct_image" />
                    <img className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[166px] w-[80px] sm:w-[100px] md:w-[120px] lg:w-48" src={products.image} alt="allProduct_image" />
                    <img className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[166px] w-[80px] sm:w-[100px] md:w-[120px] lg:w-48 hidden xl:block" src={products.image} alt="allProduct_image" />
                </div>
                <div className="order-1 md:order-2">
                    <img className="h-[300px] sm:h-[400px] md:h-[445px] lg:h-[525px] xl:h-[700px] w-full md:w-[500px] lg:w-[836px]" src={products.image} alt="allProduct_image" />
                </div>
            </div>

            <div className="mx-0 sm:mx-4 lg:mx-10 flex flex-col">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium mt-2 sm:mt-4 mb-2 sm:mb-3">{products.name}</h1>
                <div>
                    <div className="flex gap-1 text-orange-600">
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStarHalfStroke /></span>
                        <p className="ml-2 text-black">(122)</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-3 sm:mt-4 text-lg sm:text-xl">
                        <div className="font-medium line-through text-slate-700">${products.old_price}</div>
                        <div className="font-medium text-orange-600"><span className="font-semibold">Price:</span> ${products.new_price}</div>
                    </div>
                    <div>
                        <h3 className="mt-4 sm:mt-6 mb-6 sm:mb-10 font-medium text-sm sm:text-base">{products.description}</h3></div>
                    <div>
                        <h1 className="font-medium text-lg sm:text-xl">Select Size</h1>
                        <div className="flex my-4 sm:my-6 gap-3 sm:gap-5 flex-wrap">
                            <div className="py-1 px-4 sm:px-6 border-1 rounded-lg cursor-pointer bg-slate-100 text-sm sm:text-base">S</div>
                            <div className="py-1 px-4 sm:px-6 border-1 rounded-lg cursor-pointer bg-slate-100 text-sm sm:text-base">M</div>
                            <div className="py-1 px-4 sm:px-6 border-1 rounded-lg cursor-pointer bg-slate-100 text-sm sm:text-base">L</div>
                            <div className="py-1 px-4 sm:px-6 border-1 rounded-lg cursor-pointer bg-slate-100 text-sm sm:text-base">XL</div>
                            <div className="py-1 px-4 sm:px-6 border-1 rounded-lg cursor-pointer bg-slate-100 text-sm sm:text-base">XXL</div>
                        </div>
                    </div>
                    <button onClick={() => { addToCart(products.id) }} className="btn text-white bg-orange-600 h-10 sm:h-12 w-full sm:w-48 text-sm sm:text-[16px] mb-6 sm:mb-8">ADD TO CART</button>
                    <p className="text-sm sm:text-base"><span className="font-semibold">Category: </span>{products.category.charAt(0).toUpperCase() +
                        products.category.slice(1).toLowerCase()}, T-Shirt, Crop Top</p>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base"><span className="font-semibold">Tags: </span> Modern, Latest</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;