import React, { useState } from 'react'
import axios from 'axios' 
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { GiCheckMark } from 'react-icons/gi'
const Checkout = () => {
  let [showPopup, setShowPopup] = useState(false)

  let [name, setName] = useState('')
  let [number, setNumber] = useState('')
  let [email, setEmail] = useState('')
  let [loading, setLoading] = useState(false)
  let [checked, setChecked] = useState(false)
  let handleName=(e)=>{
    setName(e.target.value)
  }
  let hanldeNumber=(e)=>{
    setNumber(e.target.value)
  }
  let handleEmail=(e)=>{
    setEmail(e.target.value)
  }
//   let handlePayment=(e)=>{
//     setLoading(true)
//     e.preventDefault()
//     if(name && number && email){
//       axios.post("http://localhost:3000/order",{
//       name:name,
//       number:number,
//       email : email,
//     }).then(()=>{
//       console.log("order placed")
//       setLoading(false)
//       setShowPopup(true)
//       console.log("popup opened")
//     }).catch((err)=>{
//       console.log(err)
//       setLoading(false)
//     })
//   }else{
//     alert("Please fill all the details")
    
//   }
// }

let handlePayment = (e) => {
  e.preventDefault()
  setShowPopup(true)
  setName('')
  setNumber('')
  setEmail('')
  setChecked(false)
}
let handlepop = ()=>{
   window.location.reload()
}

let cartData = useSelector((state)=> state.product.cartItem)

const Total = cartData.reduce((total, item) => {

const priceAfterDiscount = item.price - (item.price * item.discountPercentage) / 100
return total + priceAfterDiscount * item.qun
}, 0)
let savings =  cartData.reduce((total , item)=>{
  const discount = ((item.price * item.discountPercentage) / 100 ) * item.qun

  return total + discount
}, 0)

let shipping = 99
let tax = (Total * 10) / 100
let grandTotal = Total + tax + shipping

console.log("showPopup:", showPopup)
  return (
    <div>
      <section className=" py-8 antialiased md:py-16">
  <form onSubmit={handlePayment} className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#262626]">
            Delivery Details
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="your_name"
                className="mb-2 block text-sm font-medium text-[#262626]"
              >
                {" "}
                Your name{" "}
              </label>
              <input value={name} onChange={handleName}
                type="text"
                id="your_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Bonnie Green"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="phone-input-3"
                className="mb-2 block text-sm font-medium text-[#262626]"
              >
                {" "}
                Phone Number*{" "}
              </label>
              <div className="flex items-center">                <div className="relative w-full">
                  <input value={number}
                  onChange={hanldeNumber}
                    type="text"
                    id="phone-input"
                    className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#262626]"
              >
                {" "}
                Email{" "}
              </label>
              <input value={email}
              onChange={handleEmail}
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="name@flowbite.com"
                required=""
              />
            </div>

          </div>
        </div>
      </div>

      <div  className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Subtotal
              </dt>
              <dd className="text-base font-medium text-[#262626]">
                ${Total.toFixed(2)}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Savings
              </dt>
              <dd className="text-base font-medium text-green-500"> ${savings.toFixed(2)}</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Store Pickup
              </dt>
              <dd className="text-base font-medium text-[#262626]">
                ${shipping}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Tax
              </dt>
              <dd className="text-base font-medium text-[#262626]">
                ${tax.toFixed(2)}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-[#262626]">
                Total
              </dt>
              <dd className="text-base font-bold text-[#262626]">
                ${grandTotal.toFixed(2)}
              </dd>
            </dl>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-normal text-[#767676] flex justify-center gap-4">
            <input value={checked} onChange={(e) => setIsChecked(e.target.checked)} type='checkbox'className=''/>
            <a
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Sign in or create an account now.
            </a>
            .
          </p>
          <button
            onClick={handlePayment}
            type="button"
            className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium bg-[#262626] text-white hover:bg-[#767676] cursor-pointer"
          >
            {loading ? <AiOutlineLoading3Quarters/> : " Proceed to Payment"}
          </button>
          <p className="text-sm font-normal text-[#767676]">
            One or more items in your cart require an account.{" "}
            <a
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Sign in or create an account now.
            </a>
            .
          </p>
        </div>

        
      </div>
    </div>
  </form>
  {showPopup && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[90%] max-w-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4 flex justify-center items-center gap-3">
        <GiCheckMark /> Your Order is Confirmed
      </h2>

      <p className="text-gray-600 mb-6">
        Thank you for your order. We will contact you soon.
      </p>

      <button
        onClick={() => {
            setShowPopup(false)
             handlepop()}}
        className="bg-[#262626] text-white px-6 py-2 rounded hover:bg-[#767676] cursor-pointer"
      >
        OK
      </button>
    </div>
  </div>
)}
</section>
    </div>
  )
}

export default Checkout
