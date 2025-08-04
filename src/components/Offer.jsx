import React from 'react'
import Offer1 from '../assets/offer1.png'
import Offer2 from '../assets/offer2.png'
import Offer3 from '../assets/offer3.png'
import Offer4 from '../assets/offer4.png'
import Container from './Container.jsx'
import { FaHeart } from 'react-icons/fa'
import { LuRefreshCcw } from 'react-icons/lu'
import { FaCartShopping } from 'react-icons/fa6'

const Offer = () => {
  return (
    <div className='pb-[30px] pt-[30px]'>
        <Container>
            <div className="">
                <h1 className='font-dm lg:text-[39px] text-[25px] font-bold py-3 text-[#262626]'>Special Offers</h1>
                <div className='flex'>
                <div className='w-1/4 p-3 relative'>
                  <div className="relative">
                    <img src={Offer1} alt="" />
                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                  </div>
                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] text-[#FFFFFF] py-1 lg:px-3 px-2 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px]">
                    <p>New</p>
                  </div>
                  </div>
                  <div className="py-5">
                    <div className="flex justify-between">
                      <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                      <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                    </div>
                    <div className="py-3">
                      <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>black</p>
                    </div>
                  </div>
                </div>
                  <div className='w-1/4 p-3 relative'>
                  <div className="relative">
                    <img src={Offer2} alt="" />
                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                  </div>
                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] text-[#FFFFFF] py-1 lg:px-3 px-2 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px]">
                    <p>New</p>
                  </div>
                  </div>
                  <div className="py-5">
                    <div className="flex justify-between">
                      <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                      <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                    </div>
                    <div className="py-3">
                      <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>black</p>
                    </div>
                  </div>
                </div>
                <div className='w-1/4 p-3 relative'>
                  <div className="relative">
                    <img src={Offer3} alt="" />
                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                  </div>
                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] text-[#FFFFFF] py-1 lg:px-3 px-2 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px]">
                    <p>New</p>
                  </div>
                  </div>
                  <div className="py-5">
                    <div className="flex justify-between">
                      <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                      <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                    </div>
                    <div className="py-3">
                      <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>black</p>
                    </div>
                  </div>
                </div>
                <div className='w-1/4 p-3 relative'>
                  <div className="relative">
                    <img src={Offer4} alt="" />
                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                    <h3 className='font-dm flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                  </div>
                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] text-[#FFFFFF] py-1 lg:px-3 px-2 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px]">
                    <p>New</p>
                  </div>
                  </div>
                  <div className="py-5">
                    <div className="flex justify-between">
                      <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                      <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                    </div>
                    <div className="py-3">
                      <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>black</p>
                    </div>
                  </div>
                </div>
                  
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Offer