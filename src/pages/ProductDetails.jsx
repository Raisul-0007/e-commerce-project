import { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { ApiData } from '../components/ContextApi';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/counterSlice';
const ProductDetails = () => {
    let productsId = useParams()
    let dispatch = useDispatch()
    let info = useContext(ApiData)
    let [product, setProduct] = useState([])
    let [show, setShow] = useState(false)
    let [ship, setShip] = useState(false)
    let singleProduct = () => {
        axios.get(`https://dummyjson.com/products/${productsId.id}`).then((response) => {
            setProduct(response.data)
        })
    }



    useEffect(() => {
        singleProduct()
    }, [])

    let clientRating = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5
        return product.rating > index + 1 ? (
            <IoIosStar />
        ) : product.rating > number ? (<IoIosStarHalf />)
            :
            (<IoIosStarOutline />)
    })
    let discountPrice = (product.price / 100) * product.discountPercentage;
    let mainPrice = product.price - discountPrice

    let handleCart = (item) => {   
        dispatch(addToCart({...item, qun:1}))
    }

    return (
        <>
            <Container>
                <div className="">
                    <h1 className='dm-sons text-[34px] font-bold '>Products</h1>
                    <div className=" flex">
                        <p className='dm-sons text-[12px] text-[#6D6D60]'>Home</p>
                        <div className="font-dm text-[10px] px-1 pt-1">
                            < SlArrowRight />
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
                <div className="flex gap-2 items-center py-[15px] lg:w-2/5">
                    <del className='font-dm text-[12px] text-[#767676]'>${product.price}</del>
                    <h4 className='font-dm text-[16px] text-[#262626]'>${mainPrice.toFixed(2)}</h4>
                </div>
                <div className="flex gap-4 border-y-1 border-[#F0F0F0] py-[13px] lg:w-2/5">
                    <h4 className='font-dm text-[12px] text-[#262626]'>STATUS:</h4>
                    <p className='font-dm text-[12px] text-[#767676]'>In stock</p>
                </div>
                <div className="py-[20px] flex gap-4 lg:w-2/5">
                    <a href="#" className='text-[#262626] border-1 border-[#262626] py-[10px] px-[15px] hover:bg-[#262626] hover:text-[#ffffff]'>Add to Wish List</a>
                    <a href="#" onClick={()=> handleCart(product)} className='text-[#262626] border-1 border-[#262626] py-[10px] px-[15px] hover:bg-[#262626] hover:text-[#ffffff] '>Add to Cart</a>
                </div>
                <div className="pt-[10px] lg:w-2/5">
                    <div onClick={(() => { setShow(!show) })} className="flex justify-between items-center py-[15px] cursor-pointer border-y-1 border-[#F0F0F0]">
                        <h3 className='font-dm text-[16px] font-bold'>FEATURES  & DETAILS</h3>
                        <div className=" font-dm text-[14px]">
                            {show ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    {show && (
                        <div className="pt-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    )}
                </div>
                <div className="pb-[10px] lg:w-2/5">
                    <div onClick={(() => { setShip(!ship) })} className="flex justify-between items-center py-[15px] cursor-pointer border-b-1 border-[#F0F0F0]">
                        <h3 className='font-dm text-[16px] font-bold'>SHIPPING & RETURNS</h3>
                        <div className=" font-dm text-[14px]">
                            {ship ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    {ship && (
                        <div className="pt-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    )}
                </div>
                <div className='w-2/5'>
                    <div class="mb-2 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li class="me-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Description</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Review</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div class=" py-2 rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p class="text-sm text-gray-500 bg-gray-100 p-2 rounded dark:text-gray-400">{product.description}</p>
                        </div>
                        <div class="hidden py-2 rounded-lg" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <p class="text-sm  bg-gray-100 p-2 rounded">
                                {product?.reviews?.map((item) => (
                                    <>
                                        <div className="flex gap-3 items-center pt-2">
                                            <div className="dm-sons text-[14px]">{item.reviewerName}</div>
                                            <div className="flex dm-sons text-[12px] text-[#FFD881]">{clientRating}</div>
                                        </div>
                                        <div className="dm-sons text-[11px] pb-2">{item.comment}</div>
                                    </>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProductDetails