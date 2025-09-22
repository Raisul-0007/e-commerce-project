import React from 'react'
import Container from '../components/Container'
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-[#F5F5F3]'>
        <Container>
            <div className="flex flex-wrap pl-2">
            <div className="md:w-1/7 w-1/3">
                <div className="py-4">
                    <h3 className='font-dm font-bold lg:text-[16px] text-[13px]'>MENU</h3>
                </div>
                <ul>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'><Link to='/Home'>Home</Link></li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'><Link to='/Shop'>Shop</Link></li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'><Link to='/About'>About</Link></li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'><Link to='/Contact'>Contact</Link></li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'><Link to='/Journal'>Journal</Link></li>
                </ul>
            </div>
            <div className="md:w-1/7 w-1/3">
                <div className="py-4">
                    <h3 className='font-dm font-bold lg:text-[16px] text-[13px]'>Shop</h3>
                </div>
                <ul>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Category 1</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Category 2</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Category 3</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Category 4</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Category 5</li>
                </ul>
               </div>
            <div className="md:w-1/7 w-1/3">
                <div className="py-4">
                    <h3 className='font-dm font-bold lg:text-[16px] text-[13px]'>HELP</h3>
                </div>
                <ul>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Privacy Policy</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Terms & Conditions</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Special E-shop</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Shipping</li>
                    <li className='py-[5px] font-dm text-[#6D6D6D] lg:text-[16px] text-[12px]'>Secure Payments</li>
                </ul>
            </div>
            <div className="md:w-2/7  w-2/3 py-4">
                <h3 className='font-dm font-bold pb-1 lg:text-[16px] text-[13px]'>(052) 611-5711</h3>
                <h3 className='font-dm font-bold lg:text-[16px] text-[13px]'>company@domain.com</h3>
            </div>
            <div className="md:w-2/7  w-1/3 mt-6 ">
                <img src={Logo} alt="" />
            </div>
            </div>
            <div className='pl-2 pr-2 md:py-[30px] flex justify-between'>
                <div className="flex gap-3">
                    < GrFacebookOption/>
                    <FaLinkedinIn/>
                    <SlSocialInstagram/>
                </div>
                <div className="">
                <p className='font-dm lg:text-[16px] text-[13px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer