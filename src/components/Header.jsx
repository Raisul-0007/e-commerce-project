import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
    let [show, setShow] = useState(false)
    let [usershow, usersetShow] = useState(false)
    let cateRef = useRef()
    let userRef = useRef()

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
        })

  return (
    <div className='bg-[#F5F5F3] py-2'>
        <Container>
            <div className="flex items-center">
                <div className="w-2/7 relative">
                <div ref={cateRef} className="flex items-center gap-x-2 cursor-pointer">
                    <HiMiniBars3BottomLeft/> 
                    <h3>Shop by Category</h3>
                </div>
                { show && (
                <div className="bg-[#262626] py-2 absolute left-0 top-[30px] w-[70%] ">
                    <ul className='cursor-pointer'>
                        <li className='flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8]'>
                            Accesories
                            <MdOutlineArrowRight/>
                        </li >
                        <li className='flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-3 border-b-[1px] border-[#D8D8D8]'>
                            Furniture
                            <MdOutlineArrowRight/>
                        </li>
                        <li className='flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-3 border-b-[1px] border-[#D8D8D8]'>
                            Electronics
                            <MdOutlineArrowRight/>
                            </li>
                        <li className='flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-3 border-b-[1px] border-[#D8D8D8]'>
                             Clothes
                            <MdOutlineArrowRight/>
                            </li>
                        <li className='flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-3 border-b-[1px] border-[#D8D8D8]'>
                            Bags
                            <MdOutlineArrowRight/>
                            </li>
                        <li className='flex items-center justify-between text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2'>
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
                        <input type="text" className='py-3 w-full bg-[#FFFFFF] rounded-full placeholder-[#979797] pl-5 ' placeholder='Search Products'/>
                        <div className="absolute top-3 right-2 cursor-pointer p-4">
                            <FaSearch/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-1/7 flex items-center justify-end gap-x-6 relative">
                <div ref={userRef} className="flex cursor-pointer ">
                    <FaUser />
                    <IoMdArrowDropdown/>
                </div>
                <div className="cursor-pointer">
                    <FaCartShopping/>
                </div>
                {usershow && (
                <div className="bg-[#FFFFFF] absolute right-0 top-8 w-full">
                    <ul className=' '>
                        <li className=' py-3 w-full hover:bg-[#2B2B2B] hover:text-[#FFFFFF] cursor-pointer duration-300 ease-in-out text-center'>My Account</li>
                        <li className='py-3 w-full hover:bg-[#2B2B2B] hover:text-[#FFFFFF] cursor-pointer duration-300 ease-in-out text-center'>Log Out</li>
                    </ul>
                </div>
                )}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header