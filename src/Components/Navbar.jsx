import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="flex justify-between p-16 shadow-[0_1px_3px_-2px_black]">
            <div className="flex gap-10">
                <Link to='/' end> <img src="/src/media/logo.png" alt="logo" /></Link>

                <p className="text-4xl font-bold"> <Link to='/' end>SHOP <br />Touch</Link></p>
            </div>
            <ul className="flex items-center list-none gap-20 text-neutral-600 text-2xl font-semibold cursor-pointer nav-menu">
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
            <div className="flex items-center gap-16">
                <Link to='/login'>
                    <button className="btn btn-outline btn-secondary h-12 w-36 text-2xl rounded-3xl">
                        Login
                    </button>
                </Link>
                <Link to='/cart'>
                    <img src="/src/media/cart_icon.png" alt="cart-icon" /></Link>
                <Link to='/cart'>
                    <div className="badge badge-sm rounded-xl badge-secondary -mt-10 -ml-20">0</div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;