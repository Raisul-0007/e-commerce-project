import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx"; 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    let [show, setShow] = useState(false)
    let [usershow, usersetShow] = useState(false)
    // let [cartshow, cartsetShow] = useState(false)
    let cateRef = useRef()
    let userRef = useRef()
    let cartRef = useRef()
    let addToCart = useSelector((state)=>state.product.cartItem)


        document.addEventListener("click",(e)=>{
            if(cateRef.current.contains(e.target) == true){
                setShow(!show)
            }else{
                setShow(false)
            }
            if(userRef.current.contains(e.target) == true){
                usersetShow(!usershow)
            }else{
                usersetShow(false)
            }
            // if(cartRef.current.contains(e.target) == true){
            //     cartsetShow(!cartshow)
            // }else{
            //     cartsetShow(false)
            // }
        })

  return (
    <div className='bg-[#F5F5F3] lg:py-2'>
        <Container>
            <div className="flex items-center">
                <div className="w-2/7 relative">
                <div ref={cateRef} className="flex items-center lg:gap-x-2 cursor-pointer">
                    <HiMiniBars3BottomLeft/> 
                    <h3 className='font-dm lg:text-[20px] font-bold text-[13px]'>Shop by Category</h3>
                </div>
                { show && (
                <div className="bg-[#262626] lg:py-2 py-1 absolute left-0 lg:top-[40px] top-[30px] lg:w-[70%] z-[999]">
                    <ul className='cursor-pointer'>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-2 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Accesories
                            <MdOutlineArrowRight/>
                        </li >
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Furniture
                            <MdOutlineArrowRight/>
                        </li>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Electronics
                            <MdOutlineArrowRight/>
                            </li>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                             Clothes
                            <MdOutlineArrowRight/>
                            </li>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-3 py-1 border-b-[1px] border-[#D8D8D8]'>
                            Bags
                            <MdOutlineArrowRight/>
                            </li>
                        <li className='font-dm lg:text-[16px] text-[13px] flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out lg:pl-[20px] lg:hover:pl-[30px] lg:py-2 py-1'>
                            Home appliances
                            <MdOutlineArrowRight/>
                            </li>
                    </ul>
                </div>
                )
                }
                </div>
                <div className="w-3/7">
                <div className="">
                    <div className="py-3 w-full relative">
                        <input type="text" className='lg:py-3 py-1 w-full bg-[#FFFFFF] rounded-full placeholder-[#979797] pl-5 ' placeholder='Search Products'/>
                        <div className="absolute lg:top-3 lg:right-2 top-1 right-0 cursor-pointer p-4">
                            <FaSearch/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-1/7 flex items-center justify-end gap-x-3 lg:gap-x-6 relative">
                <div ref={userRef} className="flex cursor-pointer ">
                    <FaUser />
                    <IoMdArrowDropdown/>
                </div>
                <Link className='cursor-pointer flex gap-1 items-center' to='/Cart'>
                <FaCartShopping/>
                {addToCart.length}
                </Link >
                {usershow && (
                <div className="bg-[#FFFFFF] absolute right-0 top-8 lg:w-full w-[100px] z-[999]">
                    <ul className=' '>
                        <li className='font-dm lg:text-[16px] text-[13px] lg:py-3 py-2  w-full  hover:bg-[#2B2B2B] hover:text-[#FFFFFF] cursor-pointer duration-300 ease-in-out text-center'>My Account</li>
                        <li className='font-dm lg:text-[16px] text-[13px] lg:py-3 py-2 w-full hover:bg-[#2B2B2B] hover:text-[#FFFFFF] cursor-pointer duration-300 ease-in-out text-center'>Log Out</li>
                    </ul>
                </div>
                )}
                {/* {cartshow && (
                    <div className='absolute lg:right-[-70px] lg:top-[35px] top-[25px] right-[-20px] lg:w-[290px] w-[200px] z-[999]'>
                    <div className="flex items-center bg-[#F5F5F3] py-2">
                        <div className="w-1/4">
                            <img className='lg:p-2 p-3' src={Cart} alt="" />
                        </div>
                        <div className="w-2/4 ">
                            <p className='font-dm lg:text-[16px] text-[12px] '>Basic Crew Neck Tee</p>
                            <h3 className='font-dm lg:text-[14px] text-[12px]'>$44.00</h3>
                        </div>
                        <div className="w-1/4">
                        <div className="flex lg:justify-end justify-center pr-3">
                            <RxCross2/>
                        </div>
                        </div>
                    </div>
                    <div className=" bg-[#ffffff]">
                        <div className="flex pl-4 py-2">
                            <p className='font-dm text-[14px]'>Subtotal:</p>
                            <h3 className='font-dm text-[14px]'>$44.00</h3>
                        </div>
                        <div className="flex pl-4">
                            <a href="" className='font-dm lg:text-[14px] text-[12px] mr-2 mb-2 p-2 lg:px-7 lg:py-2 bg-[#ffffff] border-[1px] border-solid border-[#262626] hover:bg-[#262626] hover:text-[#ffffff]'>View Cart</a>
                            <a href="" className='font-dm lg:text-[14px] text-[12px] ml-2 mb-2 p-2 lg:px-7 lg:py-2 bg-[#ffffff] border-[1px] border-solid border-[#262626] hover:bg-[#262626] hover:text-[#ffffff]'>Checkout</a>
                        </div>
                    </div>
                </div>
                )} */}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header