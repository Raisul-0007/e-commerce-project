import React, { useState } from 'react'
import Container from '../components/Container'
import Logo from '../assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
const Navber = () => {
    let [menu, setMenu] = useState(false)
  return (
    <div className='py-3'>
        <Container>
        <div className="lg:flex items-center">
            <div className="lg:w-2/12">
                <img src={Logo} alt="" />
            </div>
            <div className="w-full lg:w-10/12 ">
                <ul className={`lg:flex lg:mt-0 gap-6 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#767676] mt-[5px] z-[-1] text-[#FFFFFF] h-[150px] opacity-100" :  " mt-[-150px]"}`}>
                    <li className='font-dm text-[16px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Home</li>
                    <li className='font-dm text-[16px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Shop</li>
                    <li className='font-dm text-[16px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>About</li>
                    <li className='font-dm text-[16px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Contacts</li>
                    <li className='font-dm text-[16px] lg:text-[#767676] hover:text-[#262626] duration-300 ease-in-out'>Journal</li>
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