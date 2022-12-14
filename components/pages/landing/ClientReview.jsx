import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";

export default function ClientReview() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        arrows: true,
        dots: true,
        accessibility: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <section className='clientReview'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 className='text-center head'>Let Our Clients Do the Talking</h4>
                        </Col>
                        <Col lg={12}>
                            <div className='slider_div'>
                                <div>
                                    <Slider {...settings}>
                                        <div className='custom_wrapper'>
                                            <div className="review_wrapper">
                                                <div className="box">
                                                    <h6>Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugiat, atque eum unde cupiditate ratione ipsam sunt aut, dolores possimus ipsum molestias illum? Impedit, illo! Odio, voluptatibus libero. Delectus, earum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='custom_wrapper'>
                                            <div className="review_wrapper">
                                                <div className="box">
                                                    <h6>Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugiat, atque eum unde cupiditate ratione ipsam sunt aut, dolores possimus ipsum molestias illum? Impedit, illo! Odio, voluptatibus libero. Delectus, earum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='custom_wrapper'>
                                            <div className="review_wrapper">
                                                <div className="box">
                                                    <h6>Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugiat, atque eum unde cupiditate ratione ipsam sunt aut, dolores possimus ipsum molestias illum? Impedit, illo! Odio, voluptatibus libero. Delectus, earum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='custom_wrapper'>
                                            <div className="review_wrapper">
                                                <div className="box">
                                                    <h6>Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugiat, atque eum unde cupiditate ratione ipsam sunt aut, dolores possimus ipsum molestias illum? Impedit, illo! Odio, voluptatibus libero. Delectus, earum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='custom_wrapper'>
                                            <div className="review_wrapper">
                                                <div className="box">
                                                    <h6>Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugiat, atque eum unde cupiditate ratione ipsam sunt aut, dolores possimus ipsum molestias illum? Impedit, illo! Odio, voluptatibus libero. Delectus, earum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='custom_wrapper'>
                                            <div className="review_wrapper">
                                                <div className="box">
                                                    <h6>Title</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugiat, atque eum unde cupiditate ratione ipsam sunt aut, dolores possimus ipsum molestias illum? Impedit, illo! Odio, voluptatibus libero. Delectus, earum.</p>
                                                </div>
                                            </div>
                                        </div>
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
