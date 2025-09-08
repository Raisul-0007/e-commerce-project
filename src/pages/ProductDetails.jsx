import { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { ApiData } from '../components/ContextApi';
const ProductDetails = () => {
    let productsId = useParams()
    let info = useContext(ApiData)
    let [product, setProduct] = useState([])
    let singleProduct = ()=>{
        axios.get(`https://dummyjson.com/products/${productsId.id}`).then((response)=>{
            setProduct(response.data)
        })
    }
    useEffect(()=>{
        singleProduct()
    },[])
    
    let clientRating = Array.from({length:5},(_, index)=>{
        let number = index + 0.5
        return product.rating > index + 1 ? (
        <IoIosStar/>
        ) : product.rating > number ? (<IoIosStarHalf/>)
        : 
        (<IoIosStarOutline/>)
    })
    
  return (
    <>
    <Container>
        <div className="">
            <h1 className='dm-sons text-[34px] font-bold '>Products</h1>
            <div className=" flex">
                <p className='dm-sons text-[12px] text-[#6D6D60]'>Home</p>
                <div className="font-dm text-[10px] px-1 pt-1">
                < SlArrowRight/>
                </div>
                <p className='dm-sons text-[12px] text-[#6D6D60]'>Products</p>
            </div>

        </div>
        <div className="">
            <div className=" flex flex-wrap">
                <img className='w-1/3 m-auto h-[300px]' src={product.thumbnail} alt="" />
            </div>
            <div className="w-1/2 mx-auto">
                <h2 className='dm-sons text-[30px] font-bold text-center text-[#262626] pl-[20px]'>{product.title}</h2>
            </div>
        </div>
        <div className="flex">
            <div className="flex pt-1 gap-1 dm-sons text-[14px] text-[#FFD881]">
                {clientRating}
            </div>
            <div className="">
                <p className='dm-sons text-[#767676] text-[14px] pl-2'>1 Review</p>
            </div>
        </div>
    </Container>
    </>
  )
}

export default ProductDetails