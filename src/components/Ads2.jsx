import React from 'react'
import Container from './Container'
import Ads from '../assets/Ads-2.png'
const Ads2 = () => {
  return (
    <div>
        <Container className='py-[100px] cursor-pointer'>
            <img src={Ads} alt="" />
        </Container>
    </div>
  )
}

export default Ads2