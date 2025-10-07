import React, { useState } from 'react'
const Checkout = () => {
  let [name, setName] = useState('')
  let [number, setNumber] = useState('')
  let [email, setEmail] = useState('')
  let handleName=(e)=>{
    setName(e.target.value)
  }
  let hanldeNumber=(e)=>{
    setNumber(e.target.value)
  }
  let handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  let handlePayment=(e)=>{
    e.preventDefault()
    console.log(name, number, email)  
  }
  return (
    <div>
      <section className=" py-8 antialiased md:py-16">
  <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
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
              <input onChange={handleName}
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
                  <input
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
              <input
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
      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Subtotal
              </dt>
              <dd className="text-base font-medium text-[#262626]">
                $8,094.00
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Savings
              </dt>
              <dd className="text-base font-medium text-green-500">0</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Store Pickup
              </dt>
              <dd className="text-base font-medium text-[#262626]">
                $99
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-[#767676]">
                Tax
              </dt>
              <dd className="text-base font-medium text-[#262626]">
                $199
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-[#262626]">
                Total
              </dt>
              <dd className="text-base font-bold text-[#262626]">
                $8,392.00
              </dd>
            </dl>
          </div>
        </div>
        <div className="space-y-3">
          <button
            onClick={handlePayment}
            type="submit"
            className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium bg-[#262626] text-white hover:bg-[#767676]"
          >
            Proceed to Payment
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
</section>
    </div>
  )
}

export default Checkout
