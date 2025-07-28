import React from 'react'
import Container from './Container';
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
                    <p className='px-2'>Two years warranty</p>
                </div>
                <div className="flex items-center">
                    <GrDeliver/>
                    <p className='px-2'>Free shipping</p>
                </div>
                <div className="flex items-center">
                    <IoIosRefresh/>
                    <p className='px-2'>Return policy in 30 days</p>
                </div>
            </div>
            <div className="flex py-[100px]">
                <div className="w-1/2 p-3 cursor-pointer">
                    <img src={Ad1} alt="" />
                </div>
                <div className="w-1/2">
                    <div className="p-3 pb-4 cursor-pointer">
                        <img src={Ad2} alt="" />
                    </div>
                    <div className="p-3 py-4 cursor-pointer">
                        <img src={Ad3} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Ads