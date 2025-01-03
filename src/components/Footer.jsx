import React from "react";
import { FaFacebookSquare, FaTwitter, FaYoutube   } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="w-full h-[2px] bg-black mt-5 mb-8"></div>
      <div className="flex justify-between">
        <div>
          <h4 className="text-[18px] font-semibold mb-6">Customer Care</h4>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
            <li>CCMS - Central Complain Management System</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] font-semibold mb-6">IntiShop</h4>
          <ul>
            <li>About IntiShop</li>
            <li>Digital Payments</li>
            <li>IntiShop Card</li>
            <li>IntiShop Blog</li>
            <li>IntiShop Mart</li>
            <li>Privacy Policy</li>
            <li>IntiShop App</li>
            <li>IntiShop Exclusives</li>
            <li>Sell on IntiShop</li>
            <li>Code of Conduct</li>
            <li>Join the IntiShop</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] font-semibold mb-6">Keep in Touch</h4>
          <ul className="flex gap-4 text-[30px]">
            <li><FaFacebookSquare /></li>
            <li><FaTwitter /></li>
            <li><FaYoutube /></li>
          </ul>
        </div>
        <div className="w-[22%]">
          <h5 className="text-[18px] font-normal"><span className="font-semibold">100% ORIGINAL</span> guarantee for all products at myntra.com</h5>
          <h5 className="text-[18px] font-normal mt-6"><span className="font-semibold">Return within 14days</span> of receiving your order</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
