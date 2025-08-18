import React from 'react'
import BanImg from "../assets/ban.png"
import Slider from 'react-slick';
const Banner = () => {
    const settings = {
    dots:true,
    infinite: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
     appendDots: dots  => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:"absolute",
          left:"10%",
          top:"50%",
          transform:"translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          color: "transparent",
          borderRight: "2px solid #ffffff ",
          padding:"5px 10px",
          cursor:"pointer",
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <div>
        <Slider {...settings}>
        <div className="cursor-pointer">
            <img src={BanImg} alt="" />
        </div>
        <div className="cursor-pointer">
            <img src={BanImg} alt="" />
        </div>
        <div className="cursor-pointer">
            <img src={BanImg} alt="" />
        </div>
        <div className="cursor-pointer">
            <img src={BanImg} alt="" />
        </div>
         </Slider>
    </div>
  )
}

export default Banner