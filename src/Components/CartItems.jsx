import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { CiSquareRemove } from "react-icons/ci";



const CartItems = () => {
    const { allProduct, cartItems, removeFromCart, getTotalCartAmount, loading } = useContext(OurContext);

    if (loading) return <div>Loading products...</div>;

    return (
        <div className="my-25 mx-40">

            {/* cart chart */}
            <div className="grid grid-cols-[2fr_3fr_1fr_1fr_1fr_1fr] items-center gap-[75px] text-2xl font-medium px-5 py-0">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-1 bg-[#e2e2e2] border-0" />

            {allProduct?.length > 0 ? (
                allProduct.map(allProduct => (
                    cartItems[allProduct.id] > 0 ? (
                        <>
                            <div className="grid grid-cols-[2fr_3fr_1fr_1fr_1fr_1fr] items-center gap-[75px] text-xl px-5 py-0 my-3">
                                <img className="h-26 w-auto" src={allProduct.image} alt={allProduct.name} />
                                <p>{allProduct.name}</p>
                                <p className="ml-2">${allProduct.new_price}</p>
                                <button className="btn rounded-xl w-16 ml-5">{cartItems[allProduct.id]}</button>
                                <p className="ml-2">${allProduct.new_price * cartItems[allProduct.id]}</p>
                                <CiSquareRemove className="text-4xl cursor-pointer ml-8" onClick={() => { removeFromCart(allProduct.id) }} />
                            </div>
                            <hr />
                        </>
                    ) : null
                ))

            ) : (
                <p>No product found</p>
            )}

            {/* Cart Totals & promo */}
            <section className="flex my-25">
                <div className="flex flex-1 flex-col mr-50 gap-4">
                    <h1 className="text-2xl font-semibold">Cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-4 font-medium">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-4 font-medium">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-4 font-semibold">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="btn btn-secondary hover:bg-secondary-content hover:text-secondary w-36 sm:w-56 rounded-xl md:rounded-2xl mt-2 sm:mt-4">PROCEED TO CHECK</button>
                </div>

                {/* promo code part */}
                <div className="flex-1 mt-5">
                    <p className="text-xl">If you have a promo code, Enter it here</p>
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Your promo code"
                            class="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-r-lg transition duration-200 cursor-pointer"
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