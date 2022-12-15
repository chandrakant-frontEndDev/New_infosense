import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function Banner() {
    return (
        <>
            <section className='banner_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mainSection">
                                <div className="content_area">
                                    <h1>Industries</h1>
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
