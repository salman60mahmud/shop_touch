import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className="flex justify-around p-16 shadow-[0_1px_3px_-2px_black]">
            <div className="flex items-center gap-10">
                <img src="/src/media/logo.png" alt="logo" />
                <p className="text-4xl font-bold">SHOP <br />Touch</p>
            </div>
            <ul className="flex items-center list-none gap-20 text-neutral-600 text-2xl font-semibold cursor-pointer nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop {menu=="shop"?<><hr/></>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}>Men {menu=="men"?<><hr/></>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}>Women {menu=="women"?<><hr/></>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}>Kids {menu=="kids"?<><hr/></>:<></>}</li>
            </ul>
            <div className="flex items-center gap-16">
                <button className="btn btn-outline btn-secondary h-12 w-36 text-2xl rounded-3xl">Login</button>
                <img src="/src/media/cart_icon.png" alt="cart-icon" />
                <div className="badge badge-sm rounded-xl badge-secondary -mt-10 -ml-20">0</div>
            </div>
        </div>
    );
};

export default Navbar;