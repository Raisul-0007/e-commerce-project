import Container from '../components/Container'
import { SlArrowRight } from "react-icons/sl";
import Filter from '../components/Filter';

import { React, useContext, useEffect, useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { ApiData } from '../components/ContextApi';

const Shop = () => {
   let {info} = useContext(ApiData)
    let [cate,cateShow] =useState(true)
    let [color,colorShow] =useState(true)
    let [brand,brandShow] =useState(true)
    let [price,priceShow] =useState(true)
    let [category, setCategory] = useState([])
    let [brandSet, brandSetShow] = useState([])
    let [priceSet, priceSetShow] = useState([])
    let [filterCategory,setfilterCategory] = useState([])
    useEffect(()=>{
        setCategory([...new Set(info.map((item)=>item.category))])
    },[info])
    useEffect(()=>{
        brandSetShow([...new Set(info.map((item)=>item.brand))])
    },[info])
    useEffect(()=>{
        priceSetShow([...new Set(info.map((item)=>item.price))])
    },[info])
    let handleCategory = (cItem)=>{
        let filterItem = info.filter((item)=>item.category == cItem)
        setfilterCategory(filterItem)
    }
    let handleAllProduct = ()=> {
        setfilterCategory("")
    }
  return (
    <>
    <Container>
      <div className="lg:pt-[80px]">
        <h1 className="font-dm text-[49px] font-bold">Products</h1>
        <div className='flex'>
          <p  className="font-dm text-[12px] text-[#767676]">Home</p>
          <div className="font-dm text-[10px] px-1 pt-1">
            < SlArrowRight/>
          </div>
          <p  className="font-dm text-[12px] text-[#767676]">Products</p>
        </div>
      </div>
      <div className="flex py-[60px] gap-3">
        <div className="w-3/12">
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
                    <li onClick={handleAllProduct} className='flex justify-between py-[10px] border-b-1 border-[#F0F0F0]'>
                        <p className='font-dm text-[16px] text-[#767676] cursor-pointer'>All Products</p>
                        <div className="p-1">
                            <AiOutlinePlus/>
                        </div>
                    </li>
                {category.map((item)=>(
                    <li onClick={()=>{handleCategory(item)}} className='flex justify-between py-[10px] border-b-1 border-[#F0F0F0] cursor-pointer'>
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
        </div>
        <div className="w-9/12">
        <Filter filterCategory={filterCategory}/>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Shop