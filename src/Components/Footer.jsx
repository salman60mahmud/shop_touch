import { FaWhatsapp, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import "./Navbar.css"
import "./Footer.css"
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
              <a className="footer-text">Branding</a>
              <a className="footer-text">Design</a>
              <a className="footer-text">Products</a>
              <a className="footer-text">Marketing</a>
            </div>
          </nav>

          {/* Company */}
          <nav className="flex-1">
            <h6 className="footer-title text-[20px] sm:text-xl">Company</h6>
            <div className="grid gap-2 text-[16px] sm:text-[18px] font-medium">
              <a className="footer-text">About us</a>
              <a className="footer-text">Contact</a>
            </div>
          </nav>

          {/* Social */}
          <nav className="hidden sm:block">
            <h6 className="footer-title text-xl sm:text-xl">Social</h6>
            <div className="grid gap-4">
              <div className="grid grid-flow-col gap-4 justify-start">
                <a className='social-logo'>
                  <FaWhatsapp />
                </a>
                <a className='social-logo'>
                  <FaInstagram />
                </a>
                <a className='social-logo'>
                  <FaFacebook />
                </a>
                <a className='social-logo'>
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
              <a className='social-logo'>
                <FaWhatsapp />
              </a>
              <a className='social-logo'>
                <FaInstagram />
              </a>
              <a className='social-logo'>
                <FaFacebook />
              </a>
              <a className='social-logo'>
                <FaPinterest />
              </a>
            </div>
          </div>
        </nav>

        {/* brand logo */}
        <div className='flex items-center gap-4 mx-auto'>
          <Link to='/' end>
            <img src="/Images/logo_big.png" alt="logo_big" className="h-12 w-auto" />
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