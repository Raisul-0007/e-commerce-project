import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { ApiData } from './ContextApi';

const Filter = () => {
    let {info} = useContext(ApiData)
    let [cate,cateShow] =useState(true)
    let [color,colorShow] =useState(true)
    let [brand,brandShow] =useState(true)
    let [price,priceShow] =useState(true)
    let [category, setCategory] = useState([])
    let [brandSet, brandSetShow] = useState([])
    let [priceSet, priceSetShow] = useState([])

    useEffect(()=>{
        setCategory([...new Set(info.map((item)=>item.category))])
    },[info])
    useEffect(()=>{
        brandSetShow([...new Set(info.map((item)=>item.brand))])
    },[info])
    useEffect(()=>{
        priceSetShow([...new Set(info.map((item)=>item.price))])
    },[info])
  return (
    <>
    <Container>
        <div className="py-[10px]">
            <div onClick={(()=>{cateShow(!cate)})} className="flex justify-between py-[15px]">
                <h3 className='font-dm text-[20px] '>Shop by Category</h3>
                <div className="py-3 font-dm text-[20px]">
                   {cate ? <MdArrowDropUp/> : <MdArrowDropDown/>}
                </div>
            </div>
            
            <div className="">
        {cate && (
                <ul>
                {category.map((item)=>(
                    <li className='flex justify-between py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676]'> {item}</p>
                    <div className="p-1">
                        <AiOutlinePlus/>
                    </div>
                    </li>
                    ))}                    
                </ul>
            )}
            </div>
        </div>
        <div className="py-[10px]">
            <div onClick={(()=>{colorShow(!color)})} className="flex justify-between py-[15px]">
                <h3 className='font-dm text-[20px]'>Shop by Color</h3>
                <div className="py-3 font-dm text-[20px]">
                    {color ? <MdArrowDropUp/> : <MdArrowDropDown/>}
                </div>
            </div>
            {color &&(
            <div className="">
                <ul>
                    <li className='py-[10px] border-b-1 border-[#F0F0F0]'>
                    <div className="flex">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#000000] m-1.5"></div>
                        <p className='font-dm text-[16px] text-[#767676]'>Color 1</p>
                    </div>
                    </li>         
                    <li className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <div className="flex">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#FF8686] m-1.5"></div>
                        <p className='font-dm text-[16px] text-[#767676]'>Color 2</p>
                    </div>
                    </li>                    
                    <li className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <div className="flex">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#7ED321] m-1.5"></div>
                        <p className='font-dm text-[16px] text-[#767676]'>Color 3</p>
                    </div>
                    </li>                   
                    <li className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <div className="flex">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#B6B6B6] m-1.5"></div>
                        <p className='font-dm text-[16px] text-[#767676]'>Color 4</p>
                    </div>
                    </li>
                    <li className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <div className="flex">
                        <div className="h-[10px] w-[10px] rounded-full bg-[#15CBA5] m-1.5"></div>
                        <p className='font-dm text-[16px] text-[#767676]'>Color 5</p>
                    </div>
                    </li>
                </ul>
            </div>
            )}
        </div>
        <div className="py-[10px]">
            <div onClick={(()=>{brandShow(!brand)})} className="flex justify-between py-[15px]">
                <h3 className='font-dm text-[20px]'>Shop by Brand</h3>
                <div className="py-3 font-dm text-[20px]">
                    {brand ? <MdArrowDropUp/> : <MdArrowDropDown/>}
                </div>
            </div>
            {brand && (
            <div className="">
            {brandSet.map((item)=>(
                <ul>
                    <li className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676]'>{item}</p>
                    </li>                    
                </ul>
            ))}
            </div>
            )}
        </div>
        <div className="py-[10px]">
            <div  onClick={(()=>{priceShow(!price)})} className="flex justify-between py-[15px]">
                <h3 className='font-dm text-[20px]'>Shop by Price</h3>
                <div className="py-3 font-dm text-[20px]">
                    {price ? <MdArrowDropUp/> : <MdArrowDropDown/>}
                </div>
            </div>
            {price && (
            <div className="">
            {priceSet.map((item)=>(
                <ul>
                    <li className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676]'>{item}</p>
                    </li> 
                </ul>
            ))}
            </div>
            )}
        </div>
    </Container>
    </>
  )
}

export default Filter