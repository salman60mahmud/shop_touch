import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='flex md:flex-col md:justify-normal md:pt-8 md:gap-5 w-full md:max-w-68 md:h-[100vh] bg-white flex-row py-10 max-w-none h-auto justify-center'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className='flex items-center justify-center py-3 md:mx-8 sm:mx-5 mx-3 px-3 gap-3 cursor-pointer text-blue-600 bg-[#f6f6f6] md:rounded-sm rounded-xl'>
                    <img src="/Images/Product_Cart.svg" alt="Product_cart" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className='flex items-center justify-center py-3 md:mx-8 sm:mx-5 mx-3 px-3 gap-3 cursor-pointer text-blue-600 bg-[#f6f6f6] rounded-sm'>
                    <img src="/Images/Product_list_icon.svg" alt="Product_list_icon" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    );
};

export default AdminSidebar;