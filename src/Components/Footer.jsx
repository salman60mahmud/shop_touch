
import { FaWhatsapp, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 p-6 sm:p-10">
        <div className="w-full max-w-[3000px] sm:mx-auto 2xl:w-4/5 grid grid-cols-2  sm:flex sm:flex-row justify-center mx-10 sm:gap-4 md:gap-8 xl:-gap:256">
          {/* Services */}
          <nav className="flex-1">
            <h6 className="footer-title text-[20px]">Services</h6>
            <div className="grid gap-2 text-[16px] sm:text-[18px] font-medium">
              <a className="transition duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">Branding</a>
              <a className="transition duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">Design</a>
              <a className="transition duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">Products</a>
              <a className="transition duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">Marketing</a>
            </div>
          </nav>

          {/* Company */}
          <nav className="flex-1">
            <h6 className="footer-title text-[20px] sm:text-xl">Company</h6>
            <div className="grid gap-2 text-[16px] sm:text-[18px] font-medium">
              <a className="transition duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">About us</a>
              <a className="transition duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">Contact</a>
            </div>
          </nav>

          {/* Social */}
          <nav className="hidden sm:block">
            <h6 className="footer-title text-xl sm:text-xl">Social</h6>
            <div className="grid gap-4">
              <div className="grid grid-flow-col gap-4 justify-start">
                <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                  <FaWhatsapp />
                </a>
                <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                  <FaInstagram />
                </a>
                <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                  <FaFacebook />
                </a>
                <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                  <FaPinterest />
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Social for mobile */}
        <nav className="sm:hidden mx-auto">
          <h6 className="footer-title text-xl sm:text-xl">Social</h6>
          <div className="grid gap-4">
            <div className="grid grid-flow-col gap-4 justify-start">
              <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                <FaWhatsapp />
              </a>
              <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                <FaInstagram />
              </a>
              <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                <FaFacebook />
              </a>
              <a className='text-2xl transition duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                <FaPinterest />
              </a>
            </div>
          </div>
        </nav>

        {/* brand logo */}
        <div className='flex items-center gap-4 mx-auto'>
          <Link to='/' end>
            <img src="/src/media/logo_big.png" alt="logo_big" className="h-12 w-auto" />
          </Link>
          <Link to='/' end>
            <p className='text-xl sm:text-2xl font-medium bubblegum-sans-font'>SHOP Touch</p>
          </Link>
        </div>

      </footer >

      {/* Copyright */}
      < footer className="bg-base-300" >
        <aside className="w-full text-center p-4 -mt-4">
          <p className="text-sm sm:text-base md:text-lg">
            Copyright © {new Date().getFullYear()} - All right reserved by Shop Touch
          </p>
        </aside>
      </footer >
    </div >
  );
};

export default Footer;