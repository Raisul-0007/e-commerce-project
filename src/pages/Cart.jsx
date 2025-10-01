import React from 'react'
import Container from '../components/Container'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { discreament, increament, removeCart } from '../components/slice/productSlice'

const Cart = () => {
     window.scrollTo(0, 0)
    let dicpatch = useDispatch()
    let cartData = useSelector((state)=>state.product.cartItem)
    let handleRemove =(item)=>{
        dicpatch(removeCart(item))
    }
    let handleplus = (item)=>{
        dicpatch(increament(item))
    }
    let handleminus = (item)=>{
        dicpatch(discreament(item))
    }
  return (
    <div>
        <Container>
            <div className="mt-[40px] mb-[80px]">
                <h1 className='dm-sons text-[36px] font-bold'>Cart</h1>
                <p className='dm-sons text-[10px] flex gap-1 items-center text-[#6D6D60]'>Home  <MdKeyboardArrowRight />  Cart</p>
            </div>
            <div className="flex bg-[#F5F5F3] py-[20px] pl-2">
                    <div className="w-1/4">Product</div>
                    <div className="w-1/4">Price</div>
                    <div className="w-1/4">Quantity</div>
                    <div className="w-1/4">Total</div>
            </div>
            {cartData.length > 0 ?
            (cartData.map((item)=>(
                <div className="">
                    <div className="flex items-center pl-2 border-1 border-solid border-[#F0F0F0] py-[10px]">
                    <div className="w-1/4 flex items-center">
                    <div onClick={()=>handleRemove(item)} className="cursor-pointer">
                        <RxCross2 />
                    </div>
                    <div className="h-15 w-15">
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="pr-4">
                        {item.title}
                    </div>
                    </div>
                    <div className="w-1/4">${(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}</div>
                    <div className="w-1/4 flex">
                    <div className=" gap-3 py-[1px] border-1 order-solid border-[#F0F0F0] flex">
                    <button onClick={()=>handleminus(item)} className='p-1 cursor-pointer hover:bg-[#F0F0F0]'><FiMinus/></button>
                    <p className='dm-sons text-[14px]'>{item.qun}</p>
                    <button onClick={()=>handleplus(item)} className='p-1 cursor-pointer hover:bg-[#F0F0F0]'><FiPlus/></button>
                    </div>
                    </div>
                    <div className="w-1/4">
                    <h3 className='dm-sons text-[20pxpx]'>{((item.price - (item.price * item.discountPercentage / 100))* item.qun).toFixed(2)}</h3>
                    </div>
                </div>
                </div>
            ))):
            <h2 className="text-center dm-sons text-[36px] py-[50px]">Your Cart Is Empty</h2>
            }
              <div className="flex">
                    <div className="py-[5px] px-[15px]">Grand Total</div>
                    <div className="py-[5px] px-[15px]"></div>
                </div>
        </Container>
    </div>
  )
}

export default Cart