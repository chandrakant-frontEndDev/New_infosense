import React from 'react'
import BannerSection from '../../components/pages/services/BannerSection'
import Faq from '../../components/pages/services/Faq'
import ContactUs from '../../components/common/ContactUs'
import LatestBlogs from '../../components/common/LatestBlogs'
import Technologies from '../../components/pages/services/Technologies'
import Industries from '../../components/pages/services/Industries'
import BoxSection from '../../components/pages/services/BoxSection'
export default function Services() {
    return (
        <>
            <BannerSection />
            <BoxSection/>
            <Industries/>
            <Technologies/>
            <LatestBlogs/>
            <Faq/>
            <ContactUs/>
        </>
    )
}
