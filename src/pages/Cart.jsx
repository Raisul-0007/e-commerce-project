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
    
    let grandTotal = cartData.reduce((total,item)=>{
  return total + (
    (item.price - (item.price * item.discountPercentage / 100))
    * item.qun
  )
},0)

  return (
    <div>
        <Container>
            <div className="mt-[40px] mb-[80px]">
                <h1 className='dm-sons text-[36px] font-bold'>Cart</h1>
                <p className='dm-sons text-[10px] flex gap-1 items-center text-[#6D6D60]'>Home  <MdKeyboardArrowRight />  Cart</p>
            </div>
            {cartData.length > 0 &&
            (<div className="flex bg-[#F5F5F3] lg:py-[20px] py-3 pl-2">
                    <div className="w-2/5 text-center lg:text-[20px] text-sm">Product</div>
                    <div className="w-1/5 text-center lg:text-[20px] text-sm">Price</div>
                    <div className="w-1/5 text-center lg:text-[20px] text-sm">Quantity</div>
                    <div className="w-1/5 text-center lg:text-[20px] text-sm">Total</div>
            </div>)
}
            {cartData.length > 0 ?
            (cartData.map((item)=>(
                <div className="">
                    <div className="flex items-center pl-2 border-1 border-solid border-[#F0F0F0] py-[10px]">
                    <div className="w-2/5  flex items-center">
                    <div onClick={()=>handleRemove(item)} className="cursor-pointer">
                        <RxCross2 />
                    </div>
                    <div className="h-15 w-15">
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="pr-4 lg:text-[20px] text-sm">
                        {item.title.slice(0, 15)}
                    </div>
                    </div>
                    <div className="w-1/5 lg:text-[20px] text-center text-sm">${(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}</div>
                    <div className="w-1/5  flex justify-center">
                    <div className=" lg:gap-3 gap-1 py-[1px] border-1 order-solid border-[#F0F0F0] flex items-center">
                    <button onClick={()=>handleminus(item)} className='p-1 cursor-pointer hover:bg-[#F0F0F0] text-sm'><FiMinus/></button>
                    <p className='dm-sons lg:text-[14px] text-[12px]'>{item.qun}</p>
                    <button onClick={()=>handleplus(item)} className='p-1 cursor-pointer hover:bg-[#F0F0F0] text-sm'><FiPlus/></button>
                    </div>
                    </div>
                    <div className="w-1/5 text-center">
                    <h3 className='dm-sons lg:text-[20px] text-sm'>{((item.price - (item.price * item.discountPercentage / 100))* item.qun).toFixed(2)}</h3>
                    </div>
                </div>
                </div>
            ))):
            <h2 className="text-center dm-sons text-[36px] py-[50px]">Your Cart Is Empty</h2>
            }
            {cartData.length > 0 &&(
              <div className=" border ml-auto lg:w-1/5 w-1/3 my-8 flex items-center rounded-2xl">
                    <div className="py-2 w-3/5 text-center border-r-1 lg:text-xl text-[12px]  bg-[#F5F5F3] rounded-l-2xl">
                        Grand Total :
                    </div>
                    <div className="lg:text-[18px] text-[10px] w-2/5 py-2 text-center">
                        {grandTotal.toFixed(2)}
                    </div>
                </div>
                )}
        </Container>
    </div>
  )
}

export default Cart