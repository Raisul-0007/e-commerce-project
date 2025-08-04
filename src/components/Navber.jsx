import React, { useState } from 'react'
import Container from '../components/Container'
import Logo from '../assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
const Navber = () => {
    let [menu, setMenu] = useState(false)
  return (
    <div className='py-4 '>
        <Container>
        <div className="lg:flex items-center  ">
            <div className="lg:w-2/12">
                <img src={Logo} alt="" />
            </div>
            <div className="w-full lg:w-10/12 ">
                <div className={`cursor-pointer lg:flex lg:mt-0 gap-6 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#767676] mt-[10px] z-[-1]  pt-[10px] pl-[15px] text-[#FFFFFF] h-[120px] opacity-100 " :  " mt-[-150px]"}`}>
                    <Link className='font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out' to='/'>Home</Link>
                    <Link className='font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out' to='/Shop'>Shop</Link>
                    <Link className='font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out' to='/About'>About</Link>
                    <Link className='font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out' to='/Contact'>Contacts</Link>
                    <Link className='font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out' to='/Journal'>Journal</Link>
                </div>   
            </div>
            <div className='lg:hidden absolute top-4 right-6' onClick={()=>setMenu(!menu)}>
                {menu ? <ImCross/> : <FiAlignJustify/>}
            </div>
        </div>
    </Container>
    </div>
  )
}

export default Navber