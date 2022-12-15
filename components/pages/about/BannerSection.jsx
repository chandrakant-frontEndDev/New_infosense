import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function BannerSection() {
    return (
        <>
            <section className='about_page'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mainSection">
                                <div className="content_area">
                                    <h1>About Us</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt illo eveniet recusandae sapiente mollitia quos quisquam
                                        voluptatibus possimus quia doloremque magni blanditiis quod quibusdam sequi! Perferendis accusantium sapiente harum?</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
