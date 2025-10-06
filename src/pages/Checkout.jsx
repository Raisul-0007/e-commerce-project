import React from 'react'

const Checkout = () => {
  return (
    <div>
      <div>
      <form action="">
        <div className="flex gap-6">
          <div className="py-">
          <h3>Enter Your Name</h3>
          <input type="text" placeholder='enter your name'/>
        </div>
        <div classNme="">
          <h3>Enter Your Number</h3>
          <input type="text" placeholder='enter your number'/>
        </div>
        </div>
        <div className="py-5">
          <h3>Enter Your Email</h3>
          <input type="text" placeholder='enter your email'/>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Checkout
