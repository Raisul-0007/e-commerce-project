import React from 'react'
import Container from '../components/Container'
import best1 from '../assets/best1.png'
import best2 from '../assets/best2.png'
import best3 from '../assets/best3.png'
import best4 from '../assets/best4.png'
import { FaHeart } from 'react-icons/fa'
import { LuRefreshCcw } from 'react-icons/lu'
import { FaCartShopping } from 'react-icons/fa6'
const BestSeller = () => {
  return (
    <div className='lg:py-[50px]'>
        <Container>
            <div className="flex flex-wrap">
                <div className='lg:w-1/4 w-1/2 p-1 lg:p-3 relative'>
                    <div className="relative">
                                    <img className='w-[100%]' src={best1} alt="" />
                                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                                    <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                                    <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                                    <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                                  </div>
                                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] py-1 lg:px-5 px-3 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-[#FFFFFF]">
                                    10%
                                  </div>
                                  </div>
                    <div className=" py-5">
                        <div className="flex justify-between">
                            <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                            <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                        </div>
                        <div className="py-3">
                            <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>Black</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/4 w-1/2 p-1 lg:p-3 relative'>
                    <div className="relative">
                                    <img className='w-[100%]' src={best2} alt="" />
                                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                                  </div>
                                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] py-1 lg:px-5 px-3 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-[#FFFFFF]">
                                    10%
                                  </div>
                                  </div>
                    <div className="py-5">
                        <div className="flex justify-between">
                            <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                            <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                        </div>
                        <div className=" py-3">
                            <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>Black</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/4 w-1/2 p-1 lg:p-3 relative'>
                    <div className="relative">
                                    <img className='w-[100%]' src={best3} alt="" />
                                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                                  </div>
                                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] py-1 lg:px-5 px-3 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-[#FFFFFF]">
                                    10%
                                  </div>
                                  </div>
                    <div className="py-5">
                        <div className="flex justify-between">
                            <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                            <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                        </div>
                        <div className="py-3">
                            <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>Black</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/4 w-1/2 p-1 lg:p-3 relative'>
                    <div className="relative">
                                    <img className='w-[100%]' src={best4} alt="" />
                                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                                    <h3 className='flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                                  </div>
                                  <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] py-1 lg:px-5 px-3 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-[#FFFFFF]">
                                    10%
                                  </div>
                                  </div>
                    <div className="py-5">
                        <div className="flex justify-between">
                            <h3 className='font-dm lg:text-[16px] text-[12px]'>Basic Crew  Neck Tee</h3>
                            <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>$44.00</h2>
                        </div>
                        <div className="py-3">
                            <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>Black</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default BestSeller