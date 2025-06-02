import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='w-full md:w-64 lg:w-72 bg-white shadow-sm md md:sticky md:top-0 md:overflow-y-auto'>
            <div className='flex md:flex-col flex-row justify-center md:justify-start p-4 md:p-6 gap-2 md:gap-4'>
                {/* Add Product */}
                <NavLink
                    to={'/addproduct'}
                    className="w-full"
                    style={({ isActive }) => ({
                        border: isActive ? '2px solid red' : 'none',
                        borderRadius: '0.375rem', // md:rounded-md
                    })}>
                    <div className='flex items-center justify-center md:justify-start py-2 px-3 gap-3 cursor-pointer text-blue-600 bg-[#f6f6f6] hover:bg-blue-50 rounded-lg md:rounded-md transition-all'>
                        <img src="/Images/Product_Cart.svg" alt="Product_cart" className="w-5 h-5" />
                        <p className="text-sm md:text-base">Add Product</p>
                    </div>
                </NavLink>
                
                {/* List product */}
                <NavLink
                    to={'/listproduct'}
                    className="w-full"
                    style={({ isActive }) => ({
                        border: isActive ? '2px solid red' : 'none',
                        borderRadius: '0.375rem', // md:rounded-md
                    })}>
                    <div className='flex items-center justify-center md:justify-start py-2 px-3 gap-3 cursor-pointer text-blue-600 bg-[#f6f6f6] hover:bg-blue-50 rounded-lg md:rounded-md transition-all'>
                        <img src="/Images/Product_list_icon.svg" alt="Product_list_icon" className="w-5 h-5" />
                        <p className="text-sm md:text-base">Product List</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default AdminSidebar;