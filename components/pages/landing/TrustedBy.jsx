import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
export default function TrustedBy() {
    return (
        <>
            <section className='trustedBy'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>Trusted By</h2>
                        </Col>
                        <Col lg={12}>
                            <marquee className="marquee" width="100%" direction="left" height="100px" loop scrollamount="12">
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
                                </div>
                            </marquee>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
