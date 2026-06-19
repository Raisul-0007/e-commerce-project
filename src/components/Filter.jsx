import { FaListUl, FaTableCellsLarge } from 'react-icons/fa6'
import Pagination from './Pagination'
import Products from './Products'
import { ApiData } from './ContextApi';
import { useContext, useEffect, useState } from 'react'
const Filter = ({filterCategory}) => {
  
  let {info} = useContext(ApiData)
  let [perPage,setPerPage] =useState(6)
  let [currentPage,setCurrentPage] = useState(1)
  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let showProduct = filterCategory.length > 0 ? filterCategory : info
  let allPage = showProduct.slice(firstPage, lastPage)
  let [active,setActive] =useState("active")
   
  let pageNumber = [];

  for (let i= 1; i<= Math.ceil(showProduct.length/perPage); i++){
    pageNumber.push(i);
  }
  let prev = ()=>{
       if(currentPage > 1){
    setCurrentPage((index)=> index - 1)
    }
  }
  let paginate = (index)=>{
   setCurrentPage(index + 1)
  }
  let next = ()=>{
    if(currentPage < pageNumber.length){
    setCurrentPage((index)=> index + 1)
    }
  }
  let handlePageNumber =(e)=>{
    setPerPage(e.target.value)
    setCurrentPage(1)
  }
  let handleActive = ()=>{
    setActive("active")
  }
  let handlelist = ()=>{
    setActive("")
  } 

  useEffect(()=>{
  setCurrentPage(1)
},[filterCategory])
  return (
    <>
    <div className="flex justify-between">
        <div className=" flex gap-3">
            <div onClick={handleActive}  className={`${active === "active" ? "p-[5px] lg:text-[16px] text-[12px] bg-[#262626] text-[#FFFFFF] cursor-pointer" : "p-[4px] hover:bg-[#505050] hover:text-[#FFFFFF] border-1 border-[#262626] cursor-pointer lg:text-[16px] text-[12px]" }`}>
                <FaTableCellsLarge/>
            </div>
           <div onClick={handlelist} className={`${active === "active" ? "p-[4px] lg:text-[16px] text-[12px] hover:bg-[#505050] hover:text-[#FFFFFF] border-1 border-[#262626] cursor-pointer" : "p-[5px] lg:text-[16px] text-[12px] bg-[#262626] text-[#FFFFFF] cursor-pointer " }`}>
             <FaListUl/>
           </div>
        </div>
      <div className="flex">
        <div className="flex items-center px-4 gap-3">
          <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>Show:</p>
          <select onChange={handlePageNumber} className='py-0.5 lg:text-[14px] text-[10px] cursor-pointer font-dm text-[#767676] border-1 border-[#737373] lg:py-[2px] lg:pr-[50px]' >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
        </div>
      </div>
    </div>
    <div className="">
        <Products active={active}  allPage={allPage}/>
    </div>
    <div className="py-[50px]"><Pagination pageNumber={pageNumber} paginate={paginate} prev={prev} next={next} currentPage={currentPage} filterCategory={filterCategory} /></div>
    </>
  )
}

export default Filter