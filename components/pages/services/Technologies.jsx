import React from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'

export default function Technologies() {
  return (
    <>
                <section className='technologies_keyTabs'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h4>Tools & Technologies</h4>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="keyTab_content_wrapper">
                                <Tabs
                                    defaultActiveKey="demo1"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="demo1" title="demo1">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum ut eveniet quasi blanditiis, officiis nostrum animi! Sapiente molestias, magnam rerum provident beatae architecto non facilis quasi aspernatur nam eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum ut eveniet quasi blanditiis, officiis nostrum animi! Sapiente molestias, magnam rerum provident beatae architecto non facilis quasi aspernatur nam eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum ut eveniet quasi blanditiis, officiis nostrum animi! Sapiente molestias, magnam rerum provident beatae architecto non facilis quasi aspernatur nam eaque.
                                    </Tab>
                                    <Tab eventKey="demo2" title="demo2">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum ut eveniet quasi blanditiis, officiis nostrum animi! Sapiente molestias, magnam rerum provident beatae architecto non facilis quasi aspernatur nam eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum ut eveniet quasi blanditiis, officiis nostrum animi! Sapiente molestias, magnam rerum provident beatae architecto non facilis quasi aspernatur nam eaque.
                                    </Tab>
                                    <Tab eventKey="demo3" title="demo3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam earum ut eveniet quasi blanditiis, officiis nostrum animi! Sapiente molestias, magnam rerum provident beatae architecto non facilis quasi aspernatur nam eaque.
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    </>
  )
}
