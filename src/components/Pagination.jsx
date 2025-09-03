import React from 'react'

const Pagination = ({pageNumber,paginate,next,prev,currentPage,filterCategory}) => {
  
    return (
    <>
    <nav aria-label="Page navigation example" className={`${filterCategory.length > 0 ? "hidden" : ""}`}>
        <ul class="flex text-sm justify-center">
            <li onClick={prev}>
                <a className=" font-dm lg:text-[14px] text-[10px] px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-[#262626] hover:text-white cursor-pointer">Previous</a>
            </li> 
           {pageNumber.map((item, i)=>(
            <li onClick={()=>paginate(i)}>
                <a className={`${currentPage == i + 1 ? "font-dm lg:text-[14px] text-[10px] px-3 py-2 border hover:bg-[#767676] border-gray-300 bg-[#262626] text-white cursor-pointer" : "font-dm lg:text-[14px] text-[10px] px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-[#262626] hover:text-white cursor-pointer"}`}>{item}</a>
                </li>
           ))}
            <li onClick={next}>
                <a className=" font-dm lg:text-[14px] text-[10px] px-3 py-2  text-gray-500 bg-white border  border-gray-300 hover:bg-[#262626] hover:text-white cursor-pointer">Next</a>
            </li>
        </ul>
</nav>
    </>
  )
}

export default Pagination