import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GrFacebookOption , GrLinkedinOption, GrInstagram} from 'react-icons/gr'

export default function Footer() {
  return (
    <>
      <footer className='footer_wrapper'>
        <Container>
          <Row className='pt-4'>
            <Col lg={3} md={6} sm={6}>
              <div className='link_div'>
                {/* <div className=''> */}
                <h6>Expertise & Services</h6>
                <ul>
                  <li>Data Science & AI</li>
                  <li>Machine Learning</li>
                  <li>AI Software Development</li>
                  <li>AI Mobile Apps Development</li>
                  <li>Natural Language Processing</li>
                  <li>Data Capture & OCR</li>
                </ul>
                {/* </div> */}
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className='link_div'>
                <h6>Big Data Solutions</h6>
                <ul>
                  <li>Big Data Development</li>
                  <li>Data Architecture Engineering</li>
                  <li>Data Warehouse Engineering</li>
                  <li>BI & Data Visualizations</li>
                  <li>Predictive Analytics</li>
                  <li>Cloud Services</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className='link_div'>
                <h6>About Us</h6>
                <ul>
                  <li>Success Stories</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>About</li>
                  <li>Write for Us</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className='address_content'>
                <div className='social_links'>
                  <div className='list_item'><GrFacebookOption /></div>
                  <div className='list_item'><GrLinkedinOption/></div>
                  <div className='list_item'><GrInstagram/></div>
                </div>
                <address>32 W 5th Street, Cheyenne,wy, 82003  United States</address>
                <div className="email_footer">info@demo.com</div>
                <div className="footer_phone">+875 565 54 (UK)</div>
                <div className="footer_phone">+1 565 54 (US)</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="footer_bottom">
                <div className='left'>© Infosense 2022 – All Rights Reserved</div>
                <div className='right'>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Cookie Policy</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
