import { useContext } from "react";
import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';
import { OurContext } from "../Context/ContextProvider";

const Navbar = () => {
    const location = useLocation();
    const {getTotalCartItems, loading}= useContext(OurContext);

        if (loading) return <div>Loading products...</div>;

    return (
        <div className="navbar bg-base-100 shadow-sm p-4 lg:p-16">

            {/* Mobile Dropdown */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/' end className={location.pathname === '/' ? 'active' : ''}>Shop</Link>
                        </li>
                        <li>
                            <Link to='/men' className={location.pathname === '/men' ? 'active' : ''}>Men</Link>
                        </li>
                        <li>
                            <Link to='/women' className={location.pathname === '/women' ? 'active' : ''}>Women</Link>
                        </li>
                        <li>
                            <Link to='/kids' className={location.pathname === '/kids' ? 'active' : ''}>Kids</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Logo section - visible on all screens */}
            <div className="navbar-start lg:gap-10">
                <Link to='/' end> <img className="hidden lg:flex" src="/Images/logo.png" alt="logo" /></Link>
                <p className="text-2xl lg:text-3xl xl:text-4xl font-medium ms:font-semibold bubblegum-sans-font"> <Link to='/' end>SHOP <br />Touch</Link></p>
            </div>

            {/* Desktop menu - hidden on mobile */}
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center list-none gap-20 lg:gap-16 xl:gap-20 text-neutral-600 text-2xl font-semibold cursor-pointer nav-menu">
                    <li className="nav-item">
                        <Link to='/' end>Shop</Link>
                        {location.pathname === '/' && <hr />}
                    </li>
                    <li className="nav-item">
                        <Link to='/men'>Men</Link>
                        {location.pathname === '/men' && <hr />}
                    </li>
                    <li className="nav-item">
                        <Link to='/women'>Women</Link>
                        {location.pathname === '/women' && <hr />}
                    </li>
                    <li className="nav-item">
                        <Link to='/kids'>Kids</Link>
                        {location.pathname === '/kids' && <hr />}
                    </li>
                </ul>
            </div>

            {/* Login button - visible on all screens */}
            <div className="navbar-end gap-4 lg:gap-16">
                <Link to='/login' className="sm:inline-flex">
                    <button className="btn btn-outline btn-secondary h-8 md:h-12 w-24 md:w-36 lg:w-28 xl:w-36 text-lg md:text-2xl rounded-3x md:mr-36 lg:mr-0">
                        Login
                    </button>
                </Link>
                {/* Cart Button */}
                <div className="flex items-center mt-4">
                    <Link to='/cart'>
                        <img className="p-2 sm:p-0" src="/Images/cart_icon.png" alt="cart-icon" />
                        <div className="badge badge-sm rounded-2xl sm:rounded-4xl bg-[#EA580C] text-white font-semibold border-0 -mt-28 sm:-mt-24 ml-8 sm:ml-6">{getTotalCartItems()}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;