import React from 'react'
import AboutMe from './Aboutme/AboutMe'
import Navbar from './Headers/Navbar'
import Skills from './Skills/Skills'
import Heading from './Slider/Heading'
import ImageSlider from './Slider/ImageSlider'

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Heading />
      <AboutMe />
      <Skills />
    </>
  )
}

export default Home
