import React, { useState } from 'react'
import Container from '../components/Container'
import Logo from '../assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Link, useLocation } from 'react-router-dom';
const Navber = () => {
    let [menu, setMenu] = useState(false)
    let location = useLocation()

    
  return (
    <div className='py-4 '>
        <Container>
        <div className="lg:flex items-center  ">
            <div className="lg:w-2/12">
                <img src={Logo} alt="" />
            </div>
            <div className="w-full lg:w-10/12 ">
                   <ul className={`cursor-pointer lg:flex lg:mt-0 gap-6 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#767676] mt-[10px] z-[-1]  pl-[15px] pb-[20px] text-[#FFFFFF] h-[120px] opacity-100 " :  " mt-[-150px]"}`}>
                    <li>
                         <Link className={`font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/" ? "lg:text-[#262626]" : "text-red-500"} hover:text-[#262626] duration-300 ease-in-out`} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={`font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Shop" ? "text-[#262626]" : "text-red-500"} hover:text-[#262626] duration-300 ease-in-out`} to='/Shop'>Shop</Link>
                    </li>git
                    <li>
                        <Link className={`font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/About" ? "text-[#262626]" : "text-red-500"} hover:text-[#262626] duration-300 ease-in-out`} to='/About'>About</Link>
                    </li>
                    <li>
                        <Link className={`font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Contact" ? "text-[#262626]" : "text-red-500"} hover:text-[#262626] duration-300 ease-in-out`} to='/Contact'>Contacts</Link>
                    </li>
                    <li>
                        <Link className={`font-dm cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Journal" ? "text-[#262626]" : "text-red-500"} hover:text-[#262626] duration-300 ease-in-out`} to='/Journal'>Journal</Link>
                    </li>
                   </ul>   
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