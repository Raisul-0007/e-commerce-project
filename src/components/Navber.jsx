import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Logo from '../assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Link, useLocation } from 'react-router-dom';
const Navber = () => {
    let [menu, setMenu] = useState(false)
    let location = useLocation()
    let menuRef = useRef(null)

    useEffect(()=>{
        const handleMenu = ()=>{
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setMenu(false)
            }
        }
        document.addEventListener("mousedown", handleMenu)
        return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
    }, [])

    
  return (
    <div className='py-4 bg-white'>
        <Container>
        <div className="lg:flex items-center  ">
            <div className="lg:w-2/12">
                <img src={Logo} alt="" />
            </div>
            <div className="w-full lg:w-10/12 ">
                   <ul ref={menuRef} className={`cursor-pointer lg:flex lg:mt-0 gap-6 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#767676] mt-[10px] z-[-1]  px-[15px] py-2 text-[#FFFFFF] h-[205px] opacity-100 " :  " mt-[-250px]"}`}>
                    <li>
                         <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/" ? "text-[#262626] font-bold " : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Shop" ? "text-[#262626] font-bold" : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/Shop'>Shop</Link>
                    </li>
                    <li>
                        <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/About" ? "text-[#262626] font-bold" : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/About'>About</Link>
                    </li>
                    <li>
                        <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Contact" ? "text-[#262626] font-bold" : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/Contact'>Contacts</Link>
                    </li>
                    <li>
                        <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Journal" ? "text-[#262626] font-bold" : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/Journal'>Journal</Link>
                    </li>
                    <li>
                        <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Checkout" ? "text-[#262626] font-bold" : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/Checkout'>Checkout</Link>
                    </li>
                    <li>
                        <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/Login" ? "text-[#262626] font-bold" : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/Login'>Login</Link>
                    </li>
                    <li>
                        <Link className={`font-dm block w-full cursor-pointer lg:text-[16px] text-[13px] lg:text-[#767676] ${location.pathname == "/SignUp" ? "text-[#262626] font-bold" : ""} hover:text-[#262626] hover:bg-[#f5f5f5] duration-300 ease-in-out py-0.5`} to='/SignUp'>SignUp</Link>
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