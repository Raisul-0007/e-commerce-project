import { FaListUl, FaTableCellsLarge } from 'react-icons/fa6'
import Pagination from './Pagination'
import Products from './Products'
import { ApiData } from './ContextApi';
import { useContext, useState } from 'react'
const Filter = ({filterCategory}) => {
  
  let {info} = useContext(ApiData)
  let [perPage,setPerPage] =useState(6)
  let [currentPage,setCurrentPage] = useState(1)
  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage, lastPage)
  let [active,setActive] =useState("")
   
  let pageNumber = [];

  for (let i= 1; i<= Math.ceil(info.length/perPage); i++){
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
  }
  let handleActive = ()=>{
    setActive("active")
  } 
  return (
    <>
    <div className="flex justify-between">
        <div className=" flex gap-3">
            <div onClick={()=>setActive("")}  className={`${active == "active" ?"p-[4px] hover:bg-[#505050] hover:text-[#FFFFFF] border-1 border-[#262626] cursor-pointer" : "p-[5px] bg-[#262626] text-[#FFFFFF] cursor-pointer" }`}>
                <FaTableCellsLarge/>
            </div>
           <div onClick={handleActive} className={`${active == "active" ? "p-[5px] bg-[#262626] text-[#FFFFFF] cursor-pointer" : "p-[4px] hover:bg-[#505050] hover:text-[#FFFFFF] border-1 border-[#262626] cursor-pointer" }`}>
             <FaListUl/>
           </div>
        </div>
      <div className="flex">
        <div className="flex px-4 gap-3">
          <p className='font-dm text-[16px] text-[#767676]'>Short by:</p>
          <select className='font-dm text-[14px] text-[#767676] cursor-pointer border-1 border-[#737373] py-[2px] pr-[100px]' name="" id="">
          <option value="">Name</option>
          <option value="">Category</option>
          <option value="">Price</option>
        </select>
        </div>
        <div className="flex px-4 gap-3">
          <p className='font-dm text-[16px] text-[#767676]'>Show:</p>
          <select onChange={handlePageNumber} className='cursor-pointer font-dm text-[14px] text-[#767676] border-1 border-[#737373] py-[2px] pr-[50px]' name="" id="">
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
        </div>
      </div>
    </div>
    <div className="">
        <Products active={active} filterCategory={filterCategory} allPage={allPage}/>
    </div>
    <div className="py-[50px]"><Pagination pageNumber={pageNumber} paginate={paginate} prev={prev} next={next} currentPage={currentPage} filterCategory={filterCategory} /></div>
    </>
  )
}

export default Filter