import { useContext, useEffect, useState } from 'react'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import { LuLogOut, LuRefreshCcw } from 'react-icons/lu'
import { ApiData } from './ContextApi'
import { Link } from  'react-router-dom'
const Products = ({allPage, filterCategory,active}) => {
  let {loading} = useContext(ApiData)
  let [allFilter, setAllFilter] = useState([])
  let [showAll, setShowAll] = useState(true)
  
 useEffect(()=>{
  let filterCate = filterCategory.slice(0,6)
  setAllFilter(filterCate)
  },[filterCategory])

  let handleShow = ()=>{
    setAllFilter(filterCategory)
    setShowAll(false)
  }
  let handleLess = ()=>{
    let filterCate = filterCategory.slice(0,6)
    setAllFilter(filterCate)
    setShowAll(true)
  }


  if(loading){
    return(
      <div>
      <h1 className='font-dm text-center text-[40px]'>Loading........</h1>
      </div>
    )
  }
  return (
    <div className=''>
      {allFilter.length > 0 
      ? (<div className="">
        <div className="flex flex-wrap">
        {allFilter.map((item) => (
        <div className='lg:w-1/3 w-1/2 p-1 lg:p-3 relative'>
        <div className="relative">
          <Link to={`/Shop/${item.id}`}>
            <img className='w-[100%]' src={item.thumbnail} alt="" />
          </Link>
          <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
          <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
          <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
          <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
          </div>
          <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] py-1 lg:px-3 px-1 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-[#FFFFFF]">
           {item.discountPercentage}%
          </div>
        </div>
        <div className=" py-5">
          <div className="flex justify-between">
            <h3 className='font-dm lg:text-[16px] text-[12px]'>{item.title}</h3>
            <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>${item.price}</h2>
          </div>
          <div className="py-3">
            <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>{item.category}</p>
          </div>
        </div>
      </div>
      ))}
      </div>
      <div className="inline-block">
        {showAll ? filterCategory.length > 5 && <h2 onClick={handleShow} className='font-dm text-[16px] bg-[#262626] px-3 py-2 text-[#ffffff] cursor-pointer'>Show All</h2> : <h2 onClick={handleLess} className='font-dm text-[16px] bg-[#262626] px-3 py-2 text-[#ffffff] cursor-pointer'>Show Less</h2>}
      </div>
      </div>
      )
      :(<div className={`${active == "active" ? "w-full" : "flex flex-wrap"}`}>
          {allPage.map((item)=>(
        <div className='lg:w-1/3 w-1/2 p-1 lg:p-3 relative'>
        <div className="relative">
          <Link to={`/Shop/${item.id}`}>
            <img className='w-[100%] cursor-pointer' src={item.thumbnail} alt="" />
          </Link>
          <div className='absolute bottom-0 right-0 bg-[#FFFFFF] w-[100%] justify-end opacity-0 hover:opacity-100 ease-in-out duration-300 '>
          <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer '>Add to Wish List < FaHeart/></h3>
          <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Compare<LuRefreshCcw/></h3>
          <h3 className='font-dm text-[16px] flex items-center justify-end gap-2 py-2 pr-2 hover:font-bold cursor-pointer'>Add to Cart <FaCartShopping/></h3>
          </div>
          <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] py-1 lg:px-3 px-1 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-[#FFFFFF]">
           {item.discountPercentage}%
          </div>
        </div>
        <div className=" py-5">
          <div className="flex justify-between">
            <h3 className='font-dm lg:text-[16px] text-[12px]'>{item.title}</h3>
            <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>${item.price}</h2>
          </div>
          <div className="py-3">
            <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>{item.category}</p>
          </div>
        </div>
      </div>
      ))}
      </div>)
      }
    </div>
  )
}

export default Products