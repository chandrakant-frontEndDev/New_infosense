import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function HeroSection() {
    return (
        <>
            <section className='heroSection'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='hero_wrapper'>
                                <div>
                                    <h1>Big on Data Science & AI</h1>
                                    <p>Empowering Your Business With Data Science and AI Technology</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
