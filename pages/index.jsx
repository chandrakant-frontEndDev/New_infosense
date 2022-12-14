import ContactUs from "../components/common/ContactUs";
import Advantages from "../components/pages/landing/Advantages";
import BoxSection from "../components/pages/landing/BoxSection";
import ClientReview from "../components/pages/landing/ClientReview";
import HeroSection from "../components/pages/landing/HeroSection";
import KeyTabs from "../components/pages/landing/KeyTabs";
import LatestBlogs from "../components/common/LatestBlogs";
import Section1 from "../components/pages/landing/Section1";
import Section2 from "../components/pages/landing/Section2";
import TrustedBy from "../components/pages/landing/TrustedBy";
export default function Home() {

  return (
    <>
      <HeroSection />
      <BoxSection/>
      <TrustedBy/>
      <ClientReview/>
      <Section1/>
      <Section2/>
      <Advantages/>
      <KeyTabs/>
      <LatestBlogs/>
      <ContactUs/>
    </>
  )
}
