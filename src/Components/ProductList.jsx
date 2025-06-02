import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const ProductList = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:5000/allproducts')
            .then((response) => response.json())
            .then((data) => { setAllProducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    //product removing by clicking
    const removeProduct = async (id) => {
        await fetch('http://localhost:5000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        await fetchInfo();
    }

    return (
        <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">
                All Products List
            </h1>

            {/* Desktop View - Description hidden until 2xl */}
            <div className="hidden md:block mb-6">
                <div className="grid grid-cols-12 gap-4 mb-4 font-medium text-sm lg:text-base border-b pb-3">
                    <p className="col-span-1 2xl:col-span-1 min-w-[60px]">Image</p>
                    <p className="col-span-4 2xl:col-span-3 min-w-[150px]">Title</p>
                    <p className="hidden 2xl:block col-span-4 min-w-[200px]">Description</p>
                    <p className="col-span-2 2xl:col-span-1 min-w-[80px]">Old Price</p>
                    <p className="col-span-2 2xl:col-span-1 min-w-[80px]">New Price</p>
                    <p className="col-span-2 2xl:col-span-1 min-w-[80px]">Category</p>
                    <p className="col-span-1 2xl:col-span-1 min-w-[60px]">Action</p>
                </div>

                {allproducts?.length > 0 ? (
                    allproducts.map((product, index) => (
                        <div className="grid grid-cols-12 gap-4 items-center py-3 text-sm lg:text-base border-b" key={index}>
                            <img className="h-12 w-12 md:h-14 md:w-14 object-contain" src={product.image} alt={product.name} />
                            <p className="col-span-4 2xl:col-span-3">{product.name}</p>
                            <p className="hidden 2xl:block col-span-4 line-clamp-2">{product.description}</p>
                            <p className="col-span-2 2xl:col-span-1 md:mx-5 2xl:mx-6">${product.old_price}</p>
                            <p className="col-span-2 2xl:col-span-1 md:mx-5 2xl:mx-7">${product.new_price}</p>
                            <p className="col-span-2 2xl:col-span-1 md:mx-2 2xl:mx-4">{product.category}</p>
                            <button className="col-span-1 text-red-600 hover:text-red-800">
                                <FaRegTrashCan onClick={() => { removeProduct(product.id) }} className="mx-auto md:mx- 2xl:mx-6 cursor-pointer" />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-red-700 md:text-2xl py-30">No products found</p>
                )}
            </div>

            {/* Mobile View (never shows description) */}
            <div className="md:hidden space-y-4 mb-6">
                {allproducts?.length > 0 ? (
                    allproducts.map((product, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-sm">
                            <div className="flex items-start gap-4 mb-3">
                                <img className="h-16 w-16 object-contain border rounded" src={product.image} alt={product.name} />
                                <div className="flex-1">
                                    <h3 className="font-medium">{product.name}</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-sm">
                                <div>
                                    <p className="text-gray-500 text-xs">Old Price</p>
                                    <p className="mx-3">${product.old_price}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">New Price</p>
                                    <p className="mx-4">${product.new_price}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">Category</p>
                                    <p className="mx-1">{product.category}</p>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-end">
                                <button className="text-red-600 hover:text-red-800 p-2">
                                    <FaRegTrashCan onClick={() => { removeProduct(product.id) }} className="cursor-pointer" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-red-700 text-lg py-10">No products found</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;