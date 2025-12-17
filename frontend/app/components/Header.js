'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-area header-three">
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              
              {/* --- 1. LOGO SECTION --- */}
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link href="/">
                    {/* Ensure logo.png is inside public/img/logo/ */}
                    <img src="/img/logo/FullLogo.png" alt="logo" />
                  </Link>
                </div>
              </div>

              {/* --- 2. MENU SECTION --- */}
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu text-right text-xl-right">
                  <nav id="mobile-menu" style={{ display: 'block' }}>
                    <ul>
                      <li className="sub">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="sub">
                        <Link href="/courses">Courses</Link>
                        <ul>
                          <li><Link href="/courses">All Courses</Link></li>
                          <li><Link href="/courses/python-basics">Python Basics</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* --- 3. RIGHT ICONS (Search etc.) --- */}
              <div className="col-xl-2 col-lg-2 text-right d-none d-xl-block mt-30 mb-30">
                <div className="search-top2">
                  <ul>
                    <li><a href="#" className="menu-tigger"><i className="fas fa-search"></i></a></li>
                  </ul>
                </div>
              </div>

              {/* --- 4. MOBILE MENU PLACEHOLDER --- */}
              {/* The 'meanmenu' plugin will automatically inject the mobile menu here */}
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}