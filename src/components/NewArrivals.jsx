import React, { useContext } from 'react'
import Container from '../components/Container'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { ApiData } from './ContextApi.jsx'
import Slider from 'react-slick';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-[5px] top-[15%] lg:top-[40%] z-100 p-[15px] rounded-full bg-[rgba(151,151,151,0.4)] cursor-pointer"
      onClick={onClick}
    ><FaArrowRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute left-[5px] top-[15%] lg:top-[40%] z-100 p-[15px] rounded-full bg-[rgba(151,151,151,0.4)] cursor-pointer'
      onClick={onClick}
    ><FaArrowLeft /></div>
  );
}

const NewArrivals = () => {
  let {info,loading} = useContext(ApiData)
  
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2 ,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }
  if(loading){
    return(
      <div>
      <h1 className='font-dm text-center text-[40px]'>Loading........</h1>
      </div>
    )
  }
  return (
    <div className='lg:pb-[50px] lg:pt-[30px]'>
        <Container>
              
                <div className="">
                <h1 className='font-dm lg:text-[39px] text-[25px] font-bold py-3 text-[#262626]'>New Arrivals</h1>
                <div >
                  <Slider {...settings}>
                  {info.map((item)=>(
                <div className='w-1/4 p-3 relative'>
                  <div className="relative">
                    <a href="/shop">
                    <img className='w-[100%]' src={item.thumbnail} alt="" />
                    </a>
                    <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
                    <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
                    <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
                    <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
                  </div>
                  <div className="font-dm lg:text-[16px] text-[10px] bg-[#262626] text-[#FFFFFF] py-1 lg:px-2 px-1 absolute lg:top-[15px] top-0 lg:left-[15px] left-0">
                    {item.discountPercentage} %
                  </div>
                  </div>
                  <div className="py-5">
                    <div className="flex justify-between">
                      <h3 className='font-dm lg:text-[16px] text-[12px]'>{item.title}</h3>
                      <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>{item.price} $</h2>
                    </div>
                    <div className="py-3">
                      <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>{item.category}</p>
                    </div>
                  </div>
                </div>
                ))}
                </Slider>
              </div>
            </div>
        </Container>
    </div>
  )
}
export default NewArrivals
