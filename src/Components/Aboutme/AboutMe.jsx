import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
//style
import './About.css'

const AboutMe = () => {
  return (
    <>
      <Container fluid>
        <div className="page_heading">
          <h2 className="capitalize text-center font-bold">About Me</h2>
        </div>
        <Row>
          <Col>
            <div className="about_image_div">
              <Image
                src="https://www.sudeepbhandari1.com.np/Image/about-image.jpg"
                className="aboutme_image"
              />
            </div>
            <div className="abouttme_heading text-justify">
              Hi there! My name is{' '}
              <strong className="mb-4">&nbsp;Sudeep Bhandari</strong>
              <br />
              I am a student from CITE, Tinkune, Kathmandu. Currently studying
              Bachalor in Computer Application (BCA) learning to improve digital
              customer experience through my college . I am passionate about Web
              and Mobile App Development using JavaScript. I aspire to be a Full
              Front End Web Developer with HTML, CSS, JavaScript,
              React.js,Bootstrap,React-bootstrap ,Tailwimd css.
              <br />
              I love continuous learning to improve my skills as well as add new
              tools under my belt.
              <br />
              I work well in a team setting and believe in using my full
              potential towards providing better solutions to clients.
              <br />I love learning about new technologies, what problems are
              they solving and How can I use them to build better and scalable
              products. My vision is to make a difference in the world through
              technology.
              <br /> <br />
              <div className="about_icons">
                <AiFillGithub
                  size={50}
                  cursor="pointer"
                  className="github_icon"
                />
                <BsLinkedin
                  size={45}
                  cursor="pointer"
                  className="linkdin_icon"
                />
                <BsFacebook
                  size={45}
                  cursor="pointer"
                  className="facebook_icon"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutMe
