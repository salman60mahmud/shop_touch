import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";


const ProductDisplay = (props) => {
    const { products } = props;

    return (
        <div className="flex mx-30 my-8">
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

            <div className="mx-10 flex flex-col">
                <h1 className="text-3xl font-medium mt-4 mb-3">{products.name}</h1>
                <div>
                    <div className="flex gap-1 text-orange-600">
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStarHalfStroke /></span>
                        <p className="ml-2 text-black">(122)</p>
                    </div>
                    <div className="flex gap-12 mt-4 text-xl">
                        <div className="font-medium line-through text-slate-700">${products.old_price}</div>
                        <div className="font-medium text-orange-600"><span className="font-semibold">Price:</span> ${products.new_price}</div>
                    </div>
                    <div>
                        <h3 className="mt-6 mb-10 font-medium">{products.description}</h3></div>
                    <div>
                        <h1 className="font-medium text-xl">Select Size</h1>
                        <div className="flex my-6 gap-5">
                            <div className="py-1 px-6 border-1 rounded-lg cursor-pointer bg-slate-100">S</div>
                            <div className="py-1 px-6 border-1 rounded-lg cursor-pointer bg-slate-100">M</div>
                            <div className="py-1 px-6 border-1 rounded-lg cursor-pointer bg-slate-100">L</div>
                            <div className="py-1 px-6 border-1 rounded-lg cursor-pointer bg-slate-100">XL</div>
                            <div className="py-1 px-6 border-1 rounded-lg cursor-pointer bg-slate-100">XXL</div>
                        </div>
                    </div>
                    <button className="btn text-white bg-orange-600 h-12 w-48 text-[16px] mb-6">ADD TO CART</button>
                    <p><span>Category: </span>Women, T-Shirt, Crop Top</p>
                    <p><span>Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;