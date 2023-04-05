import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TData from './TData'

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      }
  return (
    <>
    <Slider {...settings}>
        {
            TData.map((value,index)=>{
            return(
                <>
                <div className="box product" key={index}>
                    <div className="nameTop d_flex">
                        <span className="tLeft">{value.para}</span>
                        <span className="tRight">{value.desc}</span>
                    </div>
                    <div className="img">
                        <img src={value.cover} alt="" />
                    </div>
                </div>
                </>
            )
            })
        }
    </Slider>
    </>
  )
}

export default TopCart
