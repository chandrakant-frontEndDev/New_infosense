import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Link from 'next/link'
export default function LatestBlogs() {
    return (
        <>
            <section className='latestBlogs'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head">
                                <h4>Latest Blogs</h4>
                            </div>
                        </Col>
                        {
                            Array(3).fill('').map((e, key) => {
                                return <Col lg={4} key={key}>
                                    <div className="blog_wrapper">
                                        <div className="blog_content">
                                            <div className='blog_image'>
                                                <Image src='https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg' fluid />
                                            </div>
                                            <div className='blog_short_description'>
                                                <h4>Title</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque libero deleniti, inventore dolorum, porro voluptas nam eius possimus alias autem eos corrupti sint cumque minus beatae asperiores, quis pariatur.</p>
                                                <Link href={"/"}>Read More...</Link>
                                            </div>
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
