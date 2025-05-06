
import { FaWhatsapp, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-6 sm:p-10">
        <div className="w-full flex flex-col md:flex-row justify-between gap-8">
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
          <nav className="flex-1">
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
              <div className='flex items-center gap-4 mt-2 mx-16 sm:mx-0'>
                <Link to='/' end>
                  <img src="/src/media/logo_big.png" alt="logo_big" className="h-12 w-auto" />
                </Link> 
                <Link to='/' end>
                  <p className='text-xl sm:text-2xl font-medium'>SHOP Touch</p>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </footer>
      
      {/* Copyright */}
      <footer className="bg-base-300">
        <aside className="w-full text-center p-4">
          <p className="text-sm sm:text-base md:text-lg">
            Copyright © {new Date().getFullYear()} - All right reserved by Shop Touch
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;