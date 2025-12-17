import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RishiRobotics',
  description: 'Learn Python, AI, and Robotics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* --- EDUCATO CSS FILES --- */}
        {/* 1. Bootstrap (Grid & Layout) */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        
        {/* 2. Icons (FontAwesome & Flaticon) */}
        <link rel="stylesheet" href="/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/font-flaticon/flaticon.css" />
        
        {/* 3. Animations & Plugins */}
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/dripicons.css" />
        <link rel="stylesheet" href="/css/default.css" />
        
        {/* 4. MAIN TEMPLATE STYLE */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      
      <body className={inter.className}>
        
        {/* 1. THE NEW HEADER */}
        <Header />

        {/* 2. THE PAGE CONTENT */}
        {children}

        {/* Add the Footer here */}
        <Footer />

        {/* --- EDUCATO JS FILES --- */}
        <Script src="/js/vendor/jquery-1.12.4.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        
        {/* Navigation & Plugins */}
        <Script src="/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.scrollUp.min.js" strategy="lazyOnload" />
        <Script src="/js/one-page-nav-min.js" strategy="lazyOnload" />
        
        {/* Visuals */}
        <Script src="/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/js_isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/imagesloaded.min.js" strategy="lazyOnload" />
        
        {/* Animations */}
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />

        {/* Main Logic */}
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}