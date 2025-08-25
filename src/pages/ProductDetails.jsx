import React from 'react'
import Container from '../components/Container'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import product1 from '../assets/best1.png'
import product2 from '../assets/best2.png'
import product3 from '../assets/best3.png'
import product4 from '../assets/best4.png'

const ProductDetails = () => {
    let productsId = useParams()
    let singleProduct = ()=>{
        axios.get(`https://dummyjson.com/products/${productsId.id}`).then((response)=>{
            console.log(response.data);
            
        })
    }
  return (
    <>
    <Container>
        <div className="">
            <h1 className='dm-sons text-[34px] font-bold '>Products</h1>
            <p className='dm-sons text-[12px] text-[#6D6D60]'>Home > Products</p>
        </div>
        <div className="flex flex-wrap">
            <div className="w-1/2"><img className='w-[100%] p-3' src={product1} alt="" /></div>
            <div className="w-1/2"><img className='w-[100%] p-3' src={product2} alt="" /></div>
            <div className="w-1/2"><img className='w-[100%] p-3' src={product3} alt="" /></div>
            <div className="w-1/2"><img className='w-[100%] p-3' src={product4} alt="" /></div>
        </div>
    </Container>
    </>
  )
}

export default ProductDetails