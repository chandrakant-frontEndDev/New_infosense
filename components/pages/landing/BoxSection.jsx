import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
export default function BoxSection() {
    return (
        <>
            <section className='boxSection'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='box_wrapper'>
                                <div className="box_div">
                                    <h4>Enhance data analytics</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt, tempore cum sit possimus praesentium atque ipsum?
                                        Labore tenetur, enim, minus perspiciatis hic modi ipsum rem iste excepturi unde consequatur.</p>
                                    <Link href={'/'}>Big Data Analytics <HiOutlineArrowNarrowRight/> </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='box_wrapper'>
                                <div className="box_div">
                                    <h4>Enhance data analytics</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt, tempore cum sit possimus praesentium atque ipsum?
                                        Labore tenetur, enim, minus perspiciatis hic modi ipsum rem iste excepturi unde consequatur.</p>
                                    <Link href={'/'}>Big Data Analytics <HiOutlineArrowNarrowRight/></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='box_wrapper'>
                                <div className="box_div">
                                    <h4>Enhance data analytics</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt, tempore cum sit possimus praesentium atque ipsum?
                                        Labore tenetur, enim, minus perspiciatis hic modi ipsum rem iste excepturi unde consequatur.</p>
                                    <Link href={'/'}>Big Data Analytics <HiOutlineArrowNarrowRight/></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='box_wrapper'>
                                <div className="box_div">
                                    <h4>Enhance data analytics</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt, tempore cum sit possimus praesentium atque ipsum?
                                        Labore tenetur, enim, minus perspiciatis hic modi ipsum rem iste excepturi unde consequatur.</p>
                                    <Link href={'/'}>Big Data Analytics <HiOutlineArrowNarrowRight/></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
