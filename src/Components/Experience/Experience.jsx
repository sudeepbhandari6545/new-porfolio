import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
//style
import './Style.css'

const Experience = () => {
  return (
    <>
      <div className="experience_section">
        <Container fluid>
          <div className="page_heading">
            <h2 className="capitalize text-center font-bold">my Experience</h2>
          </div>
          <Row className="mt-5">
            <Col>
              <Card style={{ width: '30rem' }}>
                <Card.Img
                  variant="top"
                  src="https://www.sudeepbhandari1.com.np/project-img/neproid.png"
                  className="card_image"
                />
                <Card.Body>
                  <Card.Title className="card_title">
                    Neproid Academy
                  </Card.Title>
                  <Card.Title className="card_title">
                    Front-end-Developer
                  </Card.Title>
                  <Card.Text className="card_text">
                    Unpaid internship in
                    Front-end-Developer(Html/css/javascript/reactjs)
                  </Card.Text>
                  <Card.Text className="card_text">
                    Well Trained in Neproid Academy
                  </Card.Text>
                  <Card.Text className="card_text">
                    Developed Website using Reactjs, javascript,Bootstrap ,css.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '30rem' }}>
                <Card.Img
                  variant="top"
                  src="https://skybase.com.np/storage/5/internships-ts-100669679-large.jpg"
                  className="card_image"
                />
                <Card.Body>
                  <Card.Title className="card_title">
                    Sementic Creation
                  </Card.Title>
                  <Card.Title className="card_title">
                    Front-end-Developer(Reactjs Developer)
                  </Card.Title>
                  <Card.Text className="card_text">
                    Paid internship in
                    Front-end-Developer(Html/css/javascript/reactjs)
                  </Card.Text>
                  <Card.Text className="card_text">
                    Well Trained with reactjs,api and other different tools
                  </Card.Text>
                  <Card.Text className="card_text">
                    Developed real website(Merodinner) using Reactjs,
                    javascript,Bootstrap ,css.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '30rem' }}>
                <Card.Img
                  variant="top"
                  src="https://www.websoftnepal.com/wp-content/uploads/2015/12/Responsive-Web-Design-In-Nepalgif.gif"
                  className="card_image"
                />
                <Card.Body>
                  <Card.Title className="card_title">
                    Mobile responsive Development
                  </Card.Title>

                  <Card.Text className="card_text">Responsive design</Card.Text>

                  <Card.Text className="card_text">
                    Developed mobile responsive website using Reactjs,
                    javascript,Bootstrap ,css.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Experience
