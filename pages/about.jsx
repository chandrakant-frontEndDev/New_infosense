import React from 'react'
import ClientReview from '../components/common/ClientReview'
import ContactUs from '../components/common/ContactUs'
import BannerSection from '../components/pages/about/BannerSection'
import BoxSection from '../components/pages/about/BoxSection'
import Mission from '../components/pages/about/Mission'

export default function about() {
    return (
        <>
            <BannerSection />
            <BoxSection/>
            <Mission/>
            <ClientReview/>
            <ContactUs/>
        </>
    )
}
