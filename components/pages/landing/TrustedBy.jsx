import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
export default function TrustedBy() {
    return (
        <>
            <section className='trustedBy'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 className='text-center'>Trusted by Innovative Companies</h4>
                        </Col>
                        <Col lg={12}>
                                <div className="trusted_wrapper">
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                    <div className="company_image">
                                        <Image src={'https://www.monalabs.io/hubfs/mona%20logo.svg'} fluid />
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
