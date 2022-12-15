import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function WorkWithUs() {
    return (
        <>
            <section className='WorkWithUs'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <div className="head">
                                <h4>Why Work with Us?</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil accusamus excepturi modi? Deleniti harum inventore blanditiis
                                    distinctio nostrum vel! Quae iure sed voluptatum eaque cum soluta. Molestias, suscipit corporis.</p>
                            </div>
                        </Col>
                        {Array(4).fill('').map((e, key) => {
                            return <Col lg={3} key={key}>
                                <div className='box_wrapper'>
                                    <div className="box_div">
                                        <h4>Enhance data analytics</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt, tempore cum sit possimus praesentium atque ipsum?
                                            Labore tenetur, enim, minus perspiciatis hic modi ipsum rem iste excepturi unde consequatur.</p>
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
