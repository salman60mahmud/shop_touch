import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { CiSquareRemove } from "react-icons/ci";

const CartItems = () => {
    const { allProduct, cartItems, removeFromCart, getTotalCartAmount, loading } = useContext(OurContext);

    if (loading) return <div className="text-center py-10">Loading products...</div>;

    return (
        <div className="my-4 mx-4 md:my-8 md:mx-8 lg:my-12 lg:mx-12 xl:my-16 xl:mx-16">

            {/* cart header - hidden on mobile */}
            <div className="hidden md:grid grid-cols-[2fr_3fr_1fr_1fr_1fr_1fr] items-center gap-4 lg:gap-8 text-sm lg:text-base xl:text-lg font-medium px-2 py-2">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-1 bg-[#e2e2e2] border-0 hidden md:block" />

            {allProduct?.length > 0 ? (
                allProduct.map(product => (
                    cartItems[product.id] > 0 ? (
                        <div key={product.id}>
                            {/* Mobile view */}
                            <div className="md:hidden border rounded-lg p-4 mb-4">
                                <div className="flex justify-between items-start mb-3">
                                    <img className="h-20 w-20 object-contain" src={product.image} alt={product.name} />
                                    <CiSquareRemove className="text-3xl cursor-pointer text-red-500" onClick={() => removeFromCart(product.id)} />
                                </div>
                                <div className="space-y-2">
                                    <p className="font-medium">{product.name}</p>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Price:</span>
                                        <span>${product.new_price}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Qty:</span>
                                        <span className="px-3 py-1 bg-gray-100 rounded">{cartItems[product.id]}</span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span>Total:</span>
                                        <span>${product.new_price * cartItems[product.id]}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop view */}
                            <div className="hidden md:grid grid-cols-[2fr_3fr_1fr_1fr_1fr_1fr] items-center gap-4 lg:gap-8 text-sm lg:text-base px-2 py-3">
                                <img className="h-16 lg:h-20 w-auto object-contain" src={product.image} alt={product.name} />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className="btn rounded-lg w-12 lg:w-16 mx-auto">{cartItems[product.id]}</button>
                                <p>${product.new_price * cartItems[product.id]}</p>
                                <CiSquareRemove className="text-3xl lg:text-4xl cursor-pointer text-red-500 mx-auto" onClick={() => removeFromCart(product.id)} />
                            </div>
                            <hr className="hidden md:block h-px bg-gray-200 border-0 my-2" />
                        </div>
                    ) : null
                ))
            ) : (
                <p className="text-center py-10">No products found in your cart</p>
            )}

            {/* Cart Totals & promo */}
            <section className="flex flex-col lg:flex-row gap-8 my-8 lg:my-12">
                <div className="flex-1">
                    <h1 className="text-xl mx-36 md:mx-0 lg:text-2xl font-semibold my-4">Cart Totals</h1>
                    <div className="space-y-4 border rounded-lg p-4">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="btn btn-secondary w-full mt-4 py-3 rounded-lg">
                        PROCEED TO CHECKOUT
                    </button>
                </div>

                {/* promo code part */}
                <div className="flex-1 md:mt-4">
                    <p className="text-lg lg:text-xl mb-4">If you have a promo code, enter it here</p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Your promo code"
                            className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 py-3 rounded-r-lg transition duration-200 cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartItems;