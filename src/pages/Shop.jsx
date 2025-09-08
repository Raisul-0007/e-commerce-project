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
    let [brand,brandShow] =useState(false)
    let [price,priceShow] =useState(false)
    let [category, setCategory] = useState([])
    let [brandSet, brandSetShow] = useState([])
    let [priceSet, priceSetShow] = useState([])
    let [filterCategory,setfilterCategory] = useState([])
    let [low, setLow ] = useState()
    let [high, setHigh ] = useState()
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
    let handleBrand = (bItem)=>{
        let filterItem = info.filter((item)=>item.brand == bItem)
        setfilterCategory(filterItem)
    }
    let handleAllProduct = ()=> {
        setfilterCategory("")
    }
    let handlePrice = (value)=>{
        setLow(value.low)
        setLow(value.high)
        let priceFilter = info.filter((item)=> item.price > value.low && item.price < value.high)
        setfilterCategory(priceFilter);
        
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
            <div onClick={(()=>{brandShow(!brand)})} className="flex justify-between py-[15px]">
                <h3 className='font-dm text-[20px]'>Shop by Brand</h3>
                <div className="py-3 font-dm text-[20px]">
                    {brand ? <MdArrowDropUp/> : <MdArrowDropDown/>}
                </div>
            </div>
            {brand && (
            <div className="">
            <ul>
                <li onClick={handleAllProduct} className=' flex justify-between py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676] cursor-pointer'>All Brand</p>
                    <div className="p-1">
                        <AiOutlinePlus/>
                    </div>
                </li>
            {brandSet.map((item)=>(
                <li onClick={()=>{handleBrand(item)}} className='flex justify-between py-[10px] border-b-1 border-[#F0F0F0] cursor-pointer'>
                <p className='font-dm text-[16px] text-[#767676]'>{item}</p>
                <div className="p-1">
                    <AiOutlinePlus/>
                </div>
                </li>                    
            ))}
            </ul>
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
                <ul>
                    <li onClick={handleAllProduct} className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676]'>All Price</p>
                    </li>
                    <li onClick={()=> handlePrice({low:0, high:5})} className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676]'>$0-$5</p>
                    </li>
                    <li onClick={()=> handlePrice({low:6, high:20})}  className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676]'>$6-$20</p>
                    </li>
                    <li onClick={()=> handlePrice({low:21, high:100})} className=' py-[10px] border-b-1 border-[#F0F0F0]'>
                    <p className='font-dm text-[16px] text-[#767676]'>$21-$100</p>
                    </li>
                </ul>
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