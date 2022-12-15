import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function OurServices() {
    return (
        <>
            <section className='our_services'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h4>Our Services</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi eligendi quis illum architecto magni fuga, beatae,
                                    maxime voluptas nam laudantium, cupiditate recusandae autem quod officia facilis voluptates sint mollitia!</p>
                            </div>
                        </Col>
                        {
                            Array(4).fill('').map((e, key) => {
                                return <Col key={key} lg={6}>
                                    <div className='content_wrapper'>
                                        <div className='content_div'>
                                            <div className='point'>{key + 1}</div>
                                            <div className='description'>
                                                <h6>Consulting on AI Use Cases in Business</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, fugit. Maxime minima nulla obcaecati harum maiores nemo impedit
                                                    perspiciatis, quidem dolores, hic libero dolore sunt, nesciunt pariatur architecto soluta magni!</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
