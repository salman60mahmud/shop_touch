import React from 'react';
// icons
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
<footer className="footer flex justify-around sm:footer-horizontal bg-base-300 text-xl p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer">Branding</a>
    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer">Design</a>
    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer">Products</a>
    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer">Marketing</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer">About us</a>
    <a className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a className='text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer'>
      <FaWhatsapp />
      </a>
      <a className='text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer'>
      <FaInstagram />
      </a>
      <a className='text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer'>
      <FaFacebook />
      </a>
      <a className='text-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 cursor-pointer'>
        <FaPinterest />
      </a>
    </div>
  </nav>
  </footer>
  <footer>
  <aside>
    <p className='flex flex-col items-center gap-50 w-full bg-base-300 text-xl pb-10'>Copyright © {new Date().getFullYear()} - All right reserved by Shop Touch</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;