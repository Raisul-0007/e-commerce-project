import React from 'react'
import Container from '../components/Container'
import { PiNumberTwo } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";
import { IoIosRefresh } from "react-icons/io";
import Ad1 from "../assets/Ad-1.png"
import Ad2 from "../assets/Ad-2.png"
import Ad3 from "../assets/Ad-3.png"
const Ads = () => {
  return (
    <div>
        <Container>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <PiNumberTwo/>
                    <p className='font-dm lg:text-[16px] text-[14px] lg:px-2 px-1'>Two years warranty</p>
                </div>
                <div className="flex items-center">
                    <GrDeliver/>
                    <p className='font-dm lg:text-[16px] text-[14px] lg:px-2 px-1'>Free shipping</p>
                </div>
                <div className="flex items-center">
                    <IoIosRefresh/>
                    <p className='font-dm lg:text-[16px] text-[14px] lg:px-2 px-1'>Return policy in 30 days</p>
                </div>
            </div>
            <div className="flex lg:py-[100px] py-[30px]">
                <div className="w-1/2 lg:p-3 p-2 cursor-pointer">
                    <img src={Ad1} alt="" />
                </div>
                <div className="w-1/2">
                    <div className="kg:p-3 p-2 lg:pb-4 cursor-pointer">
                        <img src={Ad2} alt="" />
                    </div>
                    <div className="lg:p-3 p-2 lg:py-4 cursor-pointer">
                        <img src={Ad3} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Ads