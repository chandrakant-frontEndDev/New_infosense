import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function BoxSection() {
    return (
        <>
            <section className='useCase_boxSection'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head">
                                <h2>Lorem ipsum dolor sit amet.</h2>
                            </div>
                        </Col>
                        {Array(4).fill('').map((e, key) => {
                            return <Col lg={3} key={key}>
                                <div className="content_wrapper">
                                    <div className="content">
                                        <h4>Lorem ipsum dolor sit amet.</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, sint modi. Nostrum non quidem eos quia rem laborum
                                            quisquam enim? Harum aspernatur quia explicabo excepturi, aliquam eum temporibus possimus corporis!</p>
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
