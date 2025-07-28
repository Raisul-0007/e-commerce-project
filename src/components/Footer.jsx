import React from 'react'
import Container from './Container'
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className='bg-[#F5F5F3]'>
        <Container>
            <div className="flex">
            <div className="pr-[60px]">
                <div className="py-4">
                    <h3 className='font-dm font-bold'>MENU</h3>
                </div>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Home</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Shop</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>About</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Contact</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Journal</p>
            </div>
            <div className="px-[60px]">
                <div className="py-4">
                    <h3 className='font-dm font-bold'>Shop</h3>
                </div>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Category 1</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Category 2</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Category 3</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Category 4</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Category 5</p>
            </div>
            <div className="px-[60px]">
                <div className="py-4">
                    <h3 className='font-dm font-bold'>HELP</h3>
                </div>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Privacy Policy</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Terms & Conditions</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Special E-shop</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Shipping</p>
                <p className='py-[5px] font-dm text-[#6D6D6D]'>Secure Payments</p>
            </div>
            <div className="font-dm font-bold px-[90px] py-4">
                <h3 className='pb-1'>(052) 611-5711</h3>
                <h3>company@domain.com</h3>
            </div>
            <div className="mt-5 ">
                <img src={Logo} alt="" />
            </div>
            </div>
            <div className='py-[30px] flex justify-between'>
                <div className="flex gap-3">
                    < GrFacebookOption/>
                    <FaLinkedinIn/>
                    <SlSocialInstagram/>
                </div>
                <div className="">
                <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer