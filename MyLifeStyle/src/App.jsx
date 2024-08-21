import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyClass from '../components/MyClass'  
import './App.css'

const App = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);

    const toggleNav = () => {
      setMenuActive(!menuActive);
      if (!menuActive) {
        document.body.style.position = 'fixed';
      } else {
        document.body.style.position = '';
      }
    };

    const plusSlides = (n) => {
      setSlideIndex((prev) => {
        let newIndex = prev + n;
        if (newIndex > slides.length) {
          newIndex = 1;
        } else if (newIndex < 1) {
          newIndex = slides.length;
        }
        return newIndex;
      });
    };

    const currentSlide = (n) => {
      setSlideIndex(n);
    };

    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);

    const showSlides = (n) => {
      const slides = document.getElementsByClassName('image-box');
      const dots = document.getElementsByClassName('dot');
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
      }
      slides[n - 1].style.display = 'flex';
      dots[n - 1].className += 'active';
    };   

  return (
    <>
   
      <div>
        {/* menu for ipad and smaller screens=> slide in/out */}
        <div className="menu-background" id="small-screen-menu">
          <div className="responsive-menu">
            <div className="menu-header">
              <a href="./index.html" title="Home" alternative="Home"><svg className="menu-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 800" style={{enableBackground: 'new 0 0 800 800'}} xmlSpace="preserve">
                  <g>
                    <ellipse className="st0" cx="400.08" cy="200.97" rx="197.24" ry="197.36" />
                    <ellipse className="st1" cx="400.08" cy="299.66" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="400.08" cy="102.29" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="498.7" cy="200.97" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="301.45" cy="200.97" rx="98.62" ry="98.68" />
                    <ellipse className="st0" cx="400.08" cy="595.7" rx="197.24" ry="197.36" />
                    <ellipse className="st1" cx="400.08" cy="694.39" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="400.08" cy="497.02" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="498.7" cy="595.7" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="301.45" cy="595.7" rx="98.62" ry="98.68" />
                    <ellipse className="st0" cx="202.83" cy="398.34" rx="197.24" ry="197.36" />
                    <ellipse className="st1" cx="301.45" cy="398.34" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="104.21" cy="398.34" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="202.83" cy="299.66" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="202.83" cy="497.02" rx="98.62" ry="98.68" />
                    <ellipse className="st0" cx="597.32" cy="398.34" rx="197.24" ry="197.36" />
                    <ellipse className="st1" cx="695.94" cy="398.34" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="498.7" cy="398.34" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="597.32" cy="299.66" rx="98.62" ry="98.68" />
                    <ellipse className="st1" cx="597.32" cy="497.02" rx="98.62" ry="98.68" />
                    <ellipse className="st2" cx="400.08" cy="398.34" rx="394.97" ry="395.22" />
                  </g>
                </svg></a>
              <h1 className="title menu-main">Lara Oz Therapies</h1>
              <h2 className="title white-text menu-quote">Combining science and mindfulness</h2>
            </div>
            <div className="responsive-menu-options">
              <a className="nav-item menu-options" href="./about.html" title="About"><span>About</span></a>
              <a className="nav-item menu-options" href="./treatments.html" title="Treatments"><span>Treatments</span></a>
              <a className="nav-item menu-options" href="./prices.html" title="Prices"><span>Prices</span></a>
              <a className="nav-item menu-options" href="./testimonials.html" title="Testimonials"><span>Testimonials</span></a>
            </div>
            <div className="responsive-details">
              <a className="nav-item responsive-contact" href="mailto:#" title="Email"><i className="far fa-envelope" /> Email Enquiry</a>
              <a className="nav-item responsive-contact" href="tel:0123451623" title="Phone"><i className="fas fa-phone" /> 1234 345 345</a>
            </div>
            <button onclick="window.location.href='./contact.html'" className="menu-btn">Make a Booking</button>
            <i className="fas nav-item menu-options fa-seedling menu-seedling" />
          </div>
        </div>
        {/* burger bar menu=> animated */}
        <div className="menu-bars" id="menu-bars">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        {/* navigation and header for larger screens */}
        <div className="background"> 
          <nav className="md-hide" id="nav">
            <a className="nav-item" href="./index.html" title="Home">
              <svg className="nav-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" style={{enableBackground: 'new 0 0 400 400'}} xmlSpace="preserve">
               <MyClass/>
              </svg>
            </a>
            <div className="main-menu">
              <a className="nav-item nav-options" href="./about.html" title="About"><span>About</span></a>
              <a className="nav-item nav-options" href="./treatments.html" title="Treatments"><span>Treatments</span></a>
              <a className="nav-item nav-options" href="./prices.html" title="Prices"><span>Prices</span></a>
              <a className="nav-item nav-options" href="./testimonials.html" title="Testimonials"><span>Testimonials</span></a>
            </div>
            <div className="details">
              <a className="nav-item nav-contact" href title="Email"><i className="far fa-envelope" /> Email Enquiry</a>
              <a className="nav-item nav-contact" href="tel:0123491623" title="Phone"><i className="fas fa-phone" /> +1 (561) 851-0409</a>
            </div>
            <button onclick="window.location.href='./contact.html'" className="nav-booking-btn">Make a Booking</button>
          </nav>
          <div className="header">
            {/* logo svg */}
            <MyClass/>
            <h1 className="title main">My Life Style</h1>
            <h2 className="title white-text quote">Real beauty</h2>
          </div>
        </div>
        <main>
          <h1 className="title sm-contact-header"><i className="fas fa-hand-sparkles" /> Massage and Soft Tissue Therapy in London, UK</h1>
          <p className="main-blurb">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum id et est provident cum sequi voluptatem suscipit accusamus nemo ea. Perspiciatis alias illo expedita in exercitationem excepturi quod rem animi.</p>
          <div className="carousel-wrapper">
            {/* slides */}
            <div className="image-box fade" id="image-box">
              <div className="number-text">1 / 5</div>
              <a href="./treatments.html"><img className="carousel-image" id="carousel-image" src="./images/carousel/slideshow1.jpg" alt="Massage" title="Massage" /></a>
              <span className="carousel-text" id="carousel-text">Soothe</span>
            </div>
            <div className="image-box fade" id="image-box">
              <div className="number-text">2 / 5</div>
              <a href="./treatments.html"><img className="carousel-image" id="carousel-image" src="./images/carousel/slideshow2.jpg" alt="Massage" title="Massage" /></a>
              <span className="carousel-text" id="carousel-text">Relax</span>
            </div>
            <div className="image-box fade" id="image-box">
              <div className="number-text">3 / 5</div>
              <a href="./treatments.html"><img className="carousel-image" id="carousel-image" src="./images/carousel/slideshow3.jpg" alt="Massage" title="Massage" /></a>
              <span className="carousel-text" id="carousel-text">Heal</span>
            </div>
            <div className="image-box fade" id="image-box">
              <div className="number-text">4 / 5</div>
              <a href="./treatments.html"><img className="carousel-image" id="carousel-image" src="./images/carousel/slideshow4.jpg" alt="Massage" title="Massage" /></a>
              <span className="carousel-text" id="carousel-text">Well-being</span>
            </div>
            <div className="image-box fade" id="image-box">
              <div className="number-text">5 / 5</div>
              <a href="./treatments.html"><img className="carousel-image" id="carousel-image" src="./images/carousel/slideshow5.jpg" alt="Massage" title="Massage" /></a>
              <span className="carousel-text" id="carousel-text">Mobility</span>
            </div>
            {/* next and previous buttons */}
            <a className="previous" onclick="plusSlides(-1)">❮</a>
            <a className="next" onclick="plusSlides(1)">❯</a>
          </div>
          <br />
          {/* dots and circles */}
          <div className="dot-wrapper">
            <span className="dot active" onclick="currentSlide(1)" />
            <span className="dot active" onclick="currentSlide(2)" />                
            <span className="dot active" onclick="currentSlide(3)" />
            <span className="dot active" onclick="currentSlide(4)" />
            <span className="dot active" onclick="currentSlide(5)" />
          </div>
          {/* googlemap locations */}
          <h2 className="title front-page-title">Where can you find me?</h2>
          <span className="sm-text-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam aut commodi eius cumque minus, soluta ullam fuga, excepturi nulla debitis rem optio animi quod omnis culpa earum nemo architecto.</span>
          <h3 className="title sm-location-title"><i className="fas fa-map-marker-alt" /> Locations in Hackney and Stratford, London UK</h3>
          <div className="front-page-flex">
            <div className="locations-wrapper location1">
              <h4 className="title">Fix – London Fields</h4>
              <span>Tuesdays and Fridays from <strong>2:30pm – 7:30pm</strong></span>
              <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.3409267773413!2d-0.059780084763147445!3d51.54364721587409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ce5a25ed9a3%3A0x3dfffc2618530660!2sFix%20London%20Fields!5e0!3m2!1sen!2suk!4v1612448913973!5m2!1sen!2suk" title=" Fix – London Fields" target="blank"><p className="address"><i className="fas fa-map-marker-alt" /> 199 Richmond Rd, Hackney, London E8 3NJ</p></a>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.3409267773413!2d-0.059780084763147445!3d51.54364721587409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ce5a25ed9a3%3A0x3dfffc2618530660!2sFix%20London%20Fields!5e0!3m2!1sen!2suk!4v1612448913973!5m2!1sen!2suk" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            <div className="locations-wrapper">
              <h4 className="title">Fix – East Village</h4>
              <span>Saturdays from <strong>10am – 4pm</strong></span>
              <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.194384808184!2d-0.009085584763012869!3d51.54633451567746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64b19761ab%3A0xe2961dab075bd794!2sFix%20East%20Village!5e0!3m2!1sen!2suk!4v1612449251409!5m2!1sen!2suk" title=" Fix – East Village" target="blank"><p className="address"><i className="fas fa-map-marker-alt" /> 11 Penny Brookes St, East Village, London E20 1BN</p></a>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.194384808184!2d-0.009085584763012869!3d51.54633451567746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64b19761ab%3A0xe2961dab075bd794!2sFix%20East%20Village!5e0!3m2!1sen!2suk!4v1612449251409!5m2!1sen!2suk" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
          </div>
          <div className="booking">
            <button onclick="window.location.href='./contact.html'" className="booking-btn">Book Appointment</button> 
          </div>  
        </main>
        <footer>
          <h2 className="title footer-title">book now or send a message to find out more</h2>
          <a href="./contact.html" className="footer-text" title="Go To Contact Form"><i className="far fa-file-alt" /> Go To Contact Form</a>
          <a className="footer-text email" href title="Email"><i className="far fa-envelope" /> Email Enquiry</a>
          <a className="footer-text" href="tel:0123491623" title="Phone"><i className="fas fa-phone" /> 01654 787 654</a>
          <div className="wrapper">
            <h3 className="title social-title"><i className="fas fa-hand-holding-heart" /> connect on social media</h3>
            <div className="social">
              <a href><i className="social-icon fab fa-facebook-f" /></a> 
              <a href><i className="social-icon fab fa-instagram" /></a>
              <a href><i className="social-icon fab fa-linkedin-in" /></a>
            </div>
          </div>
          <span className="copy">© Lara Oz Therapies 2021</span>
          <div className="image-container">
            <img src="./images/icons/fht.png" alt="" className="massage-training professional-logo" />
            <img src="./images/icons/mti-logo.png" alt="" className="fht professional-logo" />
          </div>
        </footer>
        {/* Script */}
      </div>
    
    </>
  )
}

export default App
