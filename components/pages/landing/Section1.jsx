import React from 'react'
import {Col, Button, Container, Image, Row } from 'react-bootstrap'

export default function Section1() {
    return (
        <>
            <section className='section1'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='content_wrapper'>
                                <div className="content">
                                    <h4>InData Labs is a certified AWS Partner</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque eaque recusandae repudiandae dolores neque est, voluptates blanditiis. Possimus mollitia voluptates velit aut nisi laboriosam consectetur, id quae porro nostrum?</p>
                                    <Button>Learn More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='img_wrapper'>
                                <div className="content">
                                    <Image src='https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg' fluid/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
