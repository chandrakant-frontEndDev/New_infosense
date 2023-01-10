import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'

export default function Index() {
    const [Blogs, setBlogs] = useState([])
    const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"]
    function pageFunc(e, value) {
        // console.log(value);
        const end = 6 * value;
        const Start = end - 6
        const filteredArray = array.slice(Start.toString() == 'NaN' ? 0 : Start, end.toString() == 'NaN' ? 6 : end)
        // console.log(filteredArray);
        setBlogs(filteredArray);
    }

    useEffect(() => {
        pageFunc()
    }, [])
    return (
        <>
            <section className='blog_page'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head">
                                <h2>Our Blogs</h2>
                            </div>
                        </Col>
                        {Blogs.map((item, i) => {
                            return <Col key={i} lg={4} md={6} sm={12}>
                                <div className='all_blogs'>
                                    <div className='img_part'>
                                        <Image src={'https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg'} fluid loading="lazy" />
                                    </div>
                                    <div className='content_part'>
                                        <h5>Slice Ledger at GITEX North Star 2022 === {item}{i}</h5>
                                        <p>One of the most futuristic cities in the world is Dubai. It has established itself as an epicentre for significant global developments GITEX.</p>
                                        <Link href={'/blog/sliceledger-at-GITEX-north-star-event-2022-dubai'} className="read_more">Read More...</Link>
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='pagination_div'>
                                <Stack spacing={2} sx={{alignItems:'center'}}>
                                    <Pagination count={Math.ceil(array.length / 6)} shape="rounded" onChange={pageFunc} />
                                </Stack>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
