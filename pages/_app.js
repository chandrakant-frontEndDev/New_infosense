import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/common/Footer';
import MainHeader from '../components/common/MainHeader';
import MobileMenu from '../components/common/MobileMenu';
import '../styles/main.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <>
    <SSRProvider>
      {getLayout(
        <>
          <section className='main_wrapper'>
            <MainHeader />
            <MobileMenu />
            <Component {...pageProps} />
          </section>
          <Footer />
        </>
      )}
    </SSRProvider>
  </>
}

export default MyApp
