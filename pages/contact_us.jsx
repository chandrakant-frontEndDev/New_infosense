import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactUs from '../components/common/ContactUs'
export default function contact_us() {
    return (
        <>
            <section className='contact_us_page'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mainSection">
                                <div className="content_area">
                                    <h1>Contact Us</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt illo eveniet recusandae sapiente mollitia quos quisquam
                                        voluptatibus possimus quia doloremque magni blanditiis quod quibusdam sequi! Perferendis accusantium sapiente harum?</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ContactUs />
            <section className='contact_us_address_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <div className="head">
                                <h4>Our Address</h4>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='address_wrapper'>
                                <div className='content'>
                                    <address>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique modi quia at suscipit expedita praesentium.
                                        Deleniti quo numquam, corporis magnam libero perspiciatis veritatis tempore aut blanditiis, porro, consequatur accusantium.</address>

                                    <div className='phone_no'>+819-7454-12</div>
                                    <div className='phone_no'>+819-7454-12</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='address_wrapper'>
                                <div className='content'>
                                    <address>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique modi quia at suscipit expedita praesentium.
                                        Deleniti quo numquam, corporis magnam libero perspiciatis veritatis tempore aut blanditiis, porro, consequatur accusantium.</address>

                                    <div className='phone_no'>+819-7454-12</div>
                                    <div className='phone_no'>+819-7454-12</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
