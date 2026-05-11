import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import MobileMenu from './components/MobileMenu';
import HomeV1 from './pages/HomeV1';
import HomeV2 from './pages/HomeV2';
import About from './pages/About';
import Services from './pages/Services';
import ServiceSingle from './pages/ServiceSingle';
import Works from './pages/Works';
import WorkSingle from './pages/WorkSingle';
import BlogStandard from './pages/BlogStandard';
import BlogGrid2 from './pages/BlogGrid2';
import BlogGrid3 from './pages/BlogGrid3';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import ProductSingle from './pages/ProductSingle';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Basic route change handler to scroll to top
    window.scrollTo(0, 0);

    // Re-initialize external JS libraries/plugins on route change
    const timer = setTimeout(() => {
      // Re-initialize Swiper Carousels
      if (window.runCarouselJS) window.runCarouselJS();
      // Re-initialize GSAP & ScrollTriggers
      if (window.runGsapAnimations) window.runGsapAnimations();
      // Re-initialize main UI scripts
      if (window.runMainJS) window.runMainJS();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollTop />
      <main id="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeV1 />} />
          <Route path="/index-v2" element={<HomeV2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-single" element={<ServiceSingle />} />
          <Route path="/products/:slug" element={<ProductSingle />} />
          <Route path="/works" element={<Works />} />
          <Route path="/work-single" element={<WorkSingle />} />
          <Route path="/blog-standard" element={<BlogStandard />} />
          <Route path="/blog-two-columns" element={<BlogGrid2 />} />
          <Route path="/blog-three-columns" element={<BlogGrid3 />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
      <MobileMenu />
    </>
  );
}

export default App;
