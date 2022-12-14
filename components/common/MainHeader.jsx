import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import Logo from '../../public/images/logo.png'
import Link from 'next/link'
import { MdKeyboardArrowDown } from 'react-icons/md'
export default function MainHeader() {

    function DropdownToggle({ target }) {
        const getAllDrop = document.getElementsByClassName('dropdown_content')
        for (let i = 0; i < getAllDrop.length; i++) {
            if (getAllDrop[i].getAttribute('droplinkname') === target.getAttribute('navlinkname')) {
            } else {
                if (getAllDrop[i].classList.value.includes('showDrop')) {
                    getAllDrop[i].classList.toggle('showDrop')
                }
            }
        }
        const linkName = target.getAttribute('navlinkname')
        const DropDown = document.querySelector(`[droplinkname="${linkName}"]`)
        DropDown.classList.toggle('showDrop')
    }

    function closeDropdown(params) {
        const DropDown = document.querySelector(`[navlinkname="${params}"]`)
        DropDown.click()
    }

    return (
        <>
            <header className='mainHeader'>
                <section className='link_content'>
                    <div className="left_part">
                        <div className="brand_logo">
                            <Image src={Logo.src} fluid />
                        </div>
                        <ul className='main_links'>
                            <li className='dropBtn' navlinkname="services" onClick={DropdownToggle}>Services <MdKeyboardArrowDown /></li>
                            <li className='dropBtn' navlinkname="industries" onClick={DropdownToggle}>Industries <MdKeyboardArrowDown /></li>
                            <li>Use Cases</li>
                            <li className='dropBtn' navlinkname="success_stories" onClick={DropdownToggle}>Success Stories <MdKeyboardArrowDown /></li>
                            <li>About</li>
                        </ul>
                    </div>
                    {/* <div className="right_part"></div> */}
                    <div className='header_contactBtn'>
                        <Link href={'/contact_us'}>Contact Us</Link>
                    </div>
                </section>
                <section className='dropdown_content' droplinkname="services" onClick={() => closeDropdown('services')}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li><Link href={'/services/big-data'}>Big Data Analytics</Link></li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='dropdown_content' droplinkname="industries" onClick={() => closeDropdown('industries')}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>xxxxxxxxxxx</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li><Link href={'/'}>Big Data Analytics</Link></li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='dropdown_content' droplinkname="success_stories" onClick={() => closeDropdown('success_stories')}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>DEMO</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li><Link href={'/'}>Big Data Analytics</Link></li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='drop_list_col'>
                                    <h6>Big Data Development Services</h6>
                                    <ul>
                                        <li>Modern Data Architecture</li>
                                        <li>Data Engineering Services</li>
                                        <li>Big Data Analytics</li>
                                        <li>Data Warehouse</li>
                                        <li>BI & Data Visualizations</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </header>

        </>
    )
}
