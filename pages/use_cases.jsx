import React from 'react'
import ContactUs from '../components/common/ContactUs'
import Banner from '../components/pages/use_cases/Banner'
import BoxSection from '../components/pages/use_cases/BoxSection'
import Description from '../components/pages/use_cases/Description'
import Faq from '../components/pages/use_cases/Faq'
import OurServices from '../components/pages/use_cases/OurServices'
import SideSection from '../components/pages/use_cases/SideSection'

export default function use_cases() {
    return (
        <>
            <Banner />
            <BoxSection/>
            <SideSection/>
            <Description/>
            <OurServices/>
            <Faq/>
            <ContactUs />
        </>
    )
}
