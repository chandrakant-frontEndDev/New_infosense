import React from 'react'
import Banner from '../../components/pages/industry/Banner'
import ContactUs from '../../components/common/ContactUs'
import RightSection from '../../components/pages/industry/RightSection'
import LeftSection from '../../components/pages/industry/LeftSection'
import BoxSection from '../../components/pages/industry/BoxSection'
import WorkWithUs from '../../components/pages/industry/WorkWithUs'
export default function index() {
  return (
    <>
      <Banner />
      <LeftSection/>
      <BoxSection/>
      <RightSection/>
      <WorkWithUs/>
      <ContactUs/>
    </>
  )
}
