import React from 'react'
import Container from '../components/Container'
import Ads from '../assets/Ads-2.png'
const Ads2 = () => {
  return (
    <div>
        <Container className='lg:pb-[100px] lg:pt-[50px] cursor-pointer'>
            <a href="/shop">
              <img src={Ads} alt="" />
            </a>
        </Container>
    </div>
  )
}

export default Ads2