import { useState } from "react";

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "", category: "", description: "", image: "", new_price: "", old_price: ""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    return (
        <div className="box-border md:w-3/5 mx-w-[800px] py-10 px-12 rounded-xl bg-[#f6f6f6]">
            <div>
                <p className="md:text-lg">Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} className="border rounded-md py-2 pl-3 mt-1 w-full text-sm md:text-[16px]" type="text" name="name" placeholder="Type here" />
            </div>
            <div>
                <p className="md:text-lg mt-3">Product Description</p>
                <input value={productDetails.description} onChange={changeHandler} className="border rounded-md pb-7 pl-3 mt-1 w-full text-sm md:text-[16px] h-18" type="text" name="name" placeholder="Type here" />
            </div>
            <div className="flex gap-10">
                <div className="mt-3">
                    <p className="md:text-lg">Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} className="border rounded-md py-2 pl-3 mt-1 w-full text-sm md:text-[16px]" type="text" name="old_price" placeholder="Type here" />
                </div>
                <div className="mt-3">
                    <p className="md:text-lg">Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} className="border rounded-md py-2 pl-3 mt-1 w-full text-sm md:text-[16px]" type="text" name="new_price" placeholder="Type here" />
                </div>
            </div>
            <div className="w-full mt-3">
                <p className="md:text-lg">Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} defaultValue="Pick a Framework" className="select select-info mt-1">
                    <option disabled={true}>Category</option>
                    <option>Women</option>
                    <option>Men</option>
                    <option>Kids</option>
                </select>
            </div>
            <div>
                <p className="md:text-lg mt-5">Upload Here</p>
                <input onChange={imageHandler} type="file" className="file-input file-input-warning mt-1" />

                {/* Image preview */}
                {image && (
                    <div className="mt-4">
                        <p className="text-sm md:text-lg mb-2">Image Preview:</p>
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="max-w-[200px] max-h-[200px] object-contain border rounded-md" />
                        <button className="mt-2 md:mt-3 px-6 md:px-8 btn btn-warning font-medium text-sm md:text-[16px]">Add Now</button>
                    </div>)}

            </div>
        </div>
    );
};

export default AddProduct;