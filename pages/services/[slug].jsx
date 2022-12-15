import React from 'react'
import BannerSection from '../../components/pages/services/BannerSection'
import Faq from '../../components/pages/services/Faq'
import ContactUs from '../../components/common/ContactUs'
import LatestBlogs from '../../components/common/LatestBlogs'
import Technologies from '../../components/pages/services/Technologies'
import Industries from '../../components/pages/services/Industries'
import BoxSection from '../../components/pages/services/BoxSection'
import SideContent from '../../components/pages/services/SideContent'
export default function Services() {
    return (
        <>
            <BannerSection />
            <SideContent/>
            <BoxSection/>
            <Industries/>
            <Technologies/>
            <LatestBlogs/>
            <Faq/>
            <ContactUs/>
        </>
    )
}
