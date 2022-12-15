import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'


export default function SideContent() {
    return (
        <>
            <section className='side_content'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="content_wrapper">
                                <div className="content">
                                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, amet!</h4>
                                    {Array(4).fill('').map((e, key) => {
                                        return <div key={key} className='inner_content_point'>
                                            <div className='points_no'>{key + 1}</div>
                                            <div className='points_description'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus labore consequatur ad cumque praesentium totam, facilis
                                                adipisci quas? Corrupti aliquid officia odit vitae? Et repellendus maxime suscipit asperiores qui nobis?
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="image">
                                <Image src={'https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg'} fluid/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
