import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap'
export default function Industries() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className='industries'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 className='text-center head'>Industries</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo dolorem itaque adipisci dolorum accusamus!</p>
                        </Col>
                        <Col lg={12}>
                            <div className='slider_div'>
                                <div>
                                    <Slider {...settings}>
                                        {Array(6).fill('').map((e, key) => {
                                            return <div key={key}>
                                                <div className="wrapper_box">
                                                    <div className='content_area'>
                                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, distinctio.</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis architecto consequuntur nemo fugiat
                                                            doloribus quis perspiciatis aut ipsum, tenetur dolore libero ad,
                                                            corrupti facilis iusto itaque. Recusandae officia necessitatibus doloribus.</p>
                                                    </div>
                                                    <div className='image_area'>
                                                        <img src={'https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg'} />
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
