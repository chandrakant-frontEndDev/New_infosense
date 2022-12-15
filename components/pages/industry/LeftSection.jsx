import React from 'react'
import { Image, Col, Container, Row } from 'react-bootstrap'


export default function LeftSection() {
    return (
        <>
            <section className='leftSection'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='image_wrapper'>
                                <Image src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg" fluid />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='content_side'>
                                <div className='content'>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, perspiciatis!</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat laboriosam non adipisci eligendi quae fugit dignissimos,
                                        quo dolores. Suscipit fugit quae sint at ex temporibus repudiandae vero laudantium, facilis blanditiis.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat laboriosam non adipisci eligendi quae fugit dignissimos,
                                        quo dolores. Suscipit fugit quae sint at ex temporibus repudiandae vero laudantium, facilis blanditiis.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
