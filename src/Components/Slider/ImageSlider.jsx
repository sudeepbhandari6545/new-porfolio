import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

//style
import './Slider.css'

const ImageSlider = () => {
  return (
    <>
      <Carousel controls={false} indicators={false} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider_image"
            src="https://www.sudeepbhandari1.com.np/Image/slide1.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider_image"
            src="https://www.sudeepbhandari1.com.np/Image/slide2.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider_image"
            src="https://www.sudeepbhandari1.com.np/Image/slide3.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageSlider
