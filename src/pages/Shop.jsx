import Container from '../components/Container'
import { SlArrowRight } from "react-icons/sl";
import Filter from '../components/Filter';
import FilterTwo from '../components/FilterTwo';



const Shop = () => {
  
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
          <Filter/>
        </div>
        <div className="w-9/12">
        <FilterTwo/>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Shop