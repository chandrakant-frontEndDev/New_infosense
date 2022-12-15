import React from 'react'
import ContactUs from '../components/common/ContactUs'
import Banner from '../components/pages/use_cases/Banner'
import Faq from '../components/pages/use_cases/Faq'
import OurServices from '../components/pages/use_cases/OurServices'

export default function use_cases() {
    return (
        <>
            <Banner />
            <OurServices/>
            <Faq/>
            <ContactUs />
        </>
    )
}
