import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/common/Footer';
import MainHeader from '../components/common/MainHeader';
import MobileMenu from '../components/common/MobileMenu';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return <>
    <section className='main_wrapper'>
      <MainHeader />
      <MobileMenu/>
      <Component {...pageProps} />
    </section>
    <Footer />
  </>
}

export default MyApp
