'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="slider-area slider-four fix p-relative">
      <div className="slider-active">
        <div className="single-slider slider-bg d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center pt-50 pb-150">
              
              {/* CHANGE 1: Reduce Text Width from 7 to 6 */}
              <div className="col-lg-6">
                <div className="slider-content s-slider-content mt-200">
                  <h2 data-animation="fadeInUp" data-delay=".4s">Start Learning With Us Now!</h2>
                  <p data-animation="fadeInUp" data-delay=".6s">
                    Master Python, Computer Vision, and Robotics with expert-led tutorials.
                  </p>
                  
                  <div className="slider-btn mt-30">     
                      <Link href="/courses" className="btn ss-btn mr-15" data-animation="fadeInRight" data-delay=".8s">
                          View Courses
                      </Link>					
                  </div>
                </div>
              </div>

              {/* CHANGE 2: Increase Image Width from 5 to 6 */}
              <div className="col-lg-6">
                <div className="slider-img" data-animation="fadeInUp" data-delay=".4s">
                  {/* CHANGE 3: Force width to 100% and auto height */}
                  <img 
                    src="/img/slider/wb4.png" 
                    alt="AI Robot"
                    style={{ width: '100%', height: 'auto' }}
                   />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}