import { useContext, useEffect, useState } from 'react'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import { LuLogOut, LuRefreshCcw } from 'react-icons/lu'
import { ApiData } from './ContextApi'
import { Link } from  'react-router-dom'
const Products = ({allPage,active}) => {
  let {loading} = useContext(ApiData)
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
  <div>
    {active === "active" ? (
      <div>
        <div className="flex flex-wrap">
          {allPage.map((item) => (
            <div
              key={item.id}
              className="lg:w-1/3 w-1/2 p-1 lg:p-3 relative"
            >
              <Link to={`/Shop/${item.id}`}>
              <div className="relative">
                  <img
                    className="w-full"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                <div className="absolute bottom-0 right-0 bg-white w-full justify-end opacity-0 hover:opacity-100 ease-in-out duration-300">
                  <h3 className="font-dm lg:text-[16px] text-[8px] flex items-center justify-end gap-2 lg:py-2 py-1 pr-2 hover:font-bold cursor-pointer">
                    Add to Wish List <FaHeart />
                  </h3>

                  <h3 className="font-dm lg:text-[16px] text-[8px] flex items-center justify-end gap-2 lg:py-2 py-1 pr-2 hover:font-bold cursor-pointer">
                    Compare <LuRefreshCcw />
                  </h3>

                  <h3 className="font-dm lg:text-[16px] text-[8px] flex items-center justify-end gap-2 lg:py-2 py-1 pr-2 hover:font-bold cursor-pointer">
                    Add to Cart <FaCartShopping />
                  </h3>
                </div>

                <div className="font-dm lg:text-[16px] text-[10px] bg-[#262626] py-1 lg:px-3 px-1 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-white">
                  {item.discountPercentage}%
                </div>
              </div>

              <div className="lg:py-5">
                <div className="flex justify-between">
                  <h3 className="font-dm lg:text-[16px] text-[10px]">
                    {item.title}
                  </h3>

                  <h2 className="font-dm lg:text-[16px] text-[10px] text-[#767676]">
                    ${(item.price - ((item.price / 100) * item.discountPercentage)).toFixed(2)}
                  </h2>
                </div>

                <div className="lg:py-3">
                  <p className="font-dm lg:text-[16px] text-[12px] text-[#767676]">
                    {item.category}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="w-full">
        {allPage.map((item) => (
          <Link key={item.id} to={`/Shop/${item.id}`}>
            <div className="flex items-center border-b py-3 hover:bg-gray-100">
              <div className="w-1/4">
                <img
                  className="w-full cursor-pointer"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>

              <div className="w-2/4 px-4">
                <h3 className="font-dm font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.category}</p>
              </div>

              <div className="w-1/4 text-right font-bold">
                ${(item.price - ((item.price / 100) * item.discountPercentage)).toFixed(2)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
)
}

export default Products