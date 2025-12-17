'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-bg footer-p fix" style={{ backgroundImage: 'url(/img/bg/footer-bg.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      
      {/* --- MIDDLE SECTION (The "Meat" of the footer) --- */}
      <div className="footer-center pt-70 pb-40">
        <div className="container">
          <div className="row justify-content-between">
            
            {/* 1. ABOUT US */}
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>RishiRobotics</h2>
                </div>
                <div className="footer-link">
                  <p>
                    Master Python, Computer Vision, and Robotics. We provide expert-led tutorials to help you build the future of AI.
                  </p>
                </div>
                <div className="footer-social mt-10">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>

            {/* 2. QUICK LINKS */}
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Explore</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. CONTACT INFO (Customized for you) */}
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2>Contact Us</h2>
                </div>
                <div className="f-contact">
                  <ul>
                    <li>
                      <i className="icon fal fa-map-marker-check"></i>
                      <span>Gurugram, Haryana, India</span>
                    </li>
                    <li>
                      <i className="icon fal fa-envelope"></i>
                      <span>
                        <Link href="mailto:contact@rishirobotics.com">contact@rishirobotics.com</Link>
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-clock"></i>
                      <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION (Copyright) --- */}
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              Copyright &copy; 2025 RishiRobotics. All rights reserved.
            </div>
            <div className="col-lg-6 text-right text-xl-right">
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}