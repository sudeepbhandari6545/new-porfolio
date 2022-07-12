import React from 'react'
import Typed from 'react-typed'

//style
import './Slider.css'

const Heading = () => {
  return (
    <>
      <div className="slider_heading_div">
        <h1>
          Hi,I am <br />
          Sudeep Bhandari
        </h1>
        <Typed
          className="slider_heading"
          strings={['Front End Developer', 'React Js Developer']}
          typeSpeed={35}
          backSpeed={60}
          loop
        />
      </div>
    </>
  )
}

export default Heading
