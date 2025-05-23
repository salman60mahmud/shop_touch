import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const CartItems = () => {
    const { 
        allProduct, 
        cartItems, 
        removeFromCart, 
        addToCart, 
        getTotalCartAmount, 
        loading 
    } = useContext(OurContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <span className="text-lg">Loading products...</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24 py-8">
            {/* Cart Header - Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-200">
                <div className="col-span-5 font-medium text-gray-600 sm:text-xl">Product</div>
                <div className="col-span-2 font-medium text-gray-600 text-center sm:text-xl">Price</div>
                <div className="col-span-3 font-medium text-gray-600 text-center sm:text-xl">Quantity</div>
                <div className="col-span-2 font-medium text-gray-600 text-right sm:text-xl">Total</div>
            </div>

            {/* Cart Items */}
            {allProduct?.length > 0 ? (
                allProduct.map((product) => 
                    cartItems[product.id] > 0 && (
                        <div key={product.id} className="mb-6">
                            {/* Mobile View */}
                            <div className="md:hidden bg-white rounded-lg shadow-sm p-4 mb-4">
                                <div className="flex justify-between items-start">
                                    <img 
                                        className="h-24 w-24 object-contain" 
                                        src={product.image} 
                                        alt={product.name} 
                                    />
                                </div>
                                
                                <div className="mt-4 space-y-3">
                                    <h3 className="font-medium text-lg">{product.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-900">Price:</span>
                                        <span className="font-medium">${product.new_price}</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-900">Quantity:</span>
                                        <div className="flex items-center space-x-3">
                                            <FiMinus 
                                                className="text-xl cursor-pointer text-red-600 hover:text-red-800"
                                                onClick={() => removeFromCart(product.id)}
                                            />
                                            <span className="px-3 py-1 bg-gray-100 rounded">
                                                {cartItems[product.id]}
                                            </span>
                                            <FaPlus 
                                                className="text-xl cursor-pointer text-green-700 hover:text-green-900"
                                                onClick={() => addToCart(product.id)}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                        <span className="font-semibold">Subtotal:</span>
                                        <span className="font-bold">
                                            ${product.new_price * cartItems[product.id]}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop View */}
                            <div className="hidden md:grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-200">
                                <div className="col-span-5 flex items-center space-x-4">
                                    <img 
                                        className="h-20 w-20 object-contain" 
                                        src={product.image} 
                                        alt={product.name} 
                                    />
                                    <div>
                                        <h3 className="md:text-xl">{product.name}</h3>
                                    </div>
                                </div>
                                
                                <div className="col-span-2 text-center font-medium">
                                    ${product.new_price}
                                </div>
                                
                                <div className="col-span-3 flex items-center justify-center space-x-3">
                                    <FiMinus 
                                        className="text-xl cursor-pointer text-red-600 hover:text-red-800"
                                        onClick={() => removeFromCart(product.id)}
                                    />
                                    <span className="px-4 py-1 bg-gray-100 rounded-md">
                                        {cartItems[product.id]}
                                    </span>
                                    <FaPlus 
                                        className="text-xl cursor-pointer text-green-700 hover:text-green-900"
                                        onClick={() => addToCart(product.id)}
                                    />
                                </div>
                                
                                <div className="col-span-2 text-right font-bold">
                                    ${product.new_price * cartItems[product.id]}
                                </div>
                            </div>
                        </div>
                    )
                )
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-xl font-medium text-gray-600">Your cart is empty</h3>
                    <p className="mt-2 text-gray-500">Start shopping to add items to your cart</p>
                </div>
            )}

            {/* Cart Summary */}
            {allProduct?.length > 0 && (
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Promo Code */}
                    <div className="order-2 lg:order-1 xl:mx-auto lg:my-auto">
                        <h3 className="text-lg font-medium mb-4">Promo Code</h3>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter promo code"
                                className="md:w-96 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-r-lg transition-colors duration-200"
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    {/* Cart Totals */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-lg font-medium mb-4">Cart Totals</h3>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">${getTotalCartAmount()}</span>
                                </div>
                                
                                <div className="flex justify-between pt-4 border-t border-gray-100">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                                
                                <div className="flex justify-between pt-4 border-t border-gray-100 font-bold text-lg">
                                    <span>Total</span>
                                    <span>${getTotalCartAmount()}</span>
                                </div>
                            </div>
                            
                            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItems;