import React from 'react'
import { Image } from 'react-bootstrap'
import Slider from 'react-slick'
//style
import './Slider.css'

const ImageSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
  }
  return (
    <>
      <div className="overflow-hidden">
        {/* <div className="slider_heading">
          <h1>HI,I AM SUDEEP BHANDARI</h1>
        </div> */}
        <Slider {...settings}>
          <div className="slider_image_div">
            <Image
              src="https://www.sudeepbhandari1.com.np/Image/slide1.webp"
              className="slider_image"
            />
          </div>
          <div className="slider_image_div">
            <Image
              src="https://www.sudeepbhandari1.com.np/Image/slide2.webp"
              className="slider_image"
            />
          </div>
          <div className="slider_image_div">
            <Image
              src="https://www.sudeepbhandari1.com.np/Image/slide3.webp"
              className="slider_image"
            />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ImageSlider
