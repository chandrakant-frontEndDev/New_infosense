import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Advantages() {
    return (
        <>
            <section className="advantages">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <div className="head">
                                <h4>How We Can Help You</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, consequatur. Consectetur suscipit architecto iusto adipisci commodi consequatur vero nam voluptates voluptate? Distinctio esse provident odit, commodi doloribus nostrum nisi dolore!</p>
                            </div>
                        </Col>
                        {
                            Array(5).fill('').map((e,key) => {
                                return <Col lg={4} key={key}>
                                    <div className="advantage_box_wrapper">
                                        <div className="content">
                                            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus provident eaque dolorem voluptas sunt, exercitationem unde consectetur dolor distinctio beatae asperiores deserunt dicta at architecto qui modi eos suscipit!</p>
                                            <Link href={'/'}>learn more</Link>
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
