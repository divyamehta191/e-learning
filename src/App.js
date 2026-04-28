// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div id="root">
      {/* Navbar */}
      <div className="darkblue">
        <nav className="navbar">
          <div className="logo">
            <img
              className="eleimg"
              src="/elearning.png"
              alt="logo"
            />
          </div>

      <div className="right">
  <a href="#home">HOME</a>
  <a href="#about">ABOUT US</a>
  <a href="#courses">OUR COURSES</a>
  {/* <a href="#blog">BLOG</a>
  <a href="#centers">CENTERS</a> */}
  <a href="#contact">CONTACT US</a>
  <a href="#contact">
    <button>JOIN COURSES TODAY</button>
  </a>
</div>
      

<div
  className="menu-toggle"
  onClick={(e) => {
    const menu = document.querySelector(".right");
    menu.classList.toggle("active");

    e.target.innerText =
      menu.classList.contains("active") ? "✖" : "☰";
  }}
>
  ☰
</div>
        </nav>

        {/* Header */}
        <header id="home" className="header">
          <div className="leftsection">
            <h2>2560+ Batches</h2>
            <h1>The Foremost Digital</h1>
            <h1>Career</h1>
            <h1>Institute in Asia</h1>

            <p>
              Advance your career in Data Science and Digital Marketing with the
              most trusted brand in Digital Education
            </p>

            <div className="buttons">
              <button id="button1">VIEW COURSES</button>
              <button id="button2">BOOK FREE DEMO</button>
            </div>
          </div>

          <div className="rightsection">
            <img src="/Hero_Banner.png" alt="banner" />
          </div>
        </header>

        {/* Main */}
        <main id="about">
          <h2>eLearning Tech Academy In The News</h2>

          <div className="images">
            <img src="/google.webp" alt="google" />
            <img src="/visa.png" alt="visa" />
            <img src="/apple.png" alt="apple" />
            <img src="/trusted.png" alt="trusted" />
          </div>

          <div className="content1">
            <button id="button1">Your Path to Digital Success Starts Here</button>

            <h2>Why Choose eLearning Tech Academy?</h2>

            <h4>
              eLearning Tech Academy is awarded as the "Most Trusted Brand in
              Digital Education" by WCRC
            </h4>

            <h4>(Leading Marketing Research Firm and Magazine)</h4>

            <button id="button2">Learn More About Us</button>
          </div>
        </main>

        {/* Features */}
        <div className="divs3">
          <div className="div1">
            <h3>GET CERTIFIED</h3>
            <h4>
              Our curriculum is built on suggestions from over 450 corporates
              across Asia.
            </h4>
          </div>

          <div className="div2">
            <h3>AWARD-WINNING LMS</h3>
            <h4>
              Learn through 24×7 interactive LMS with videos, quizzes, and
              progress tracking.
            </h4>
          </div>

          <div className="div3">
            <h3>MOST IN-DEPTH PROGRAM</h3>
            <h4>
              50+ Modules, 321+ learning hours, followed by certification tests.
            </h4>
          </div>
        </div>
      </div>

      {/* Light Section */}
     {/* Light Section */}
<div className="lightblue">
  
  {/* Left Side */}
  <div className="lightleftsection">
    <button className="lightbutton1">
      Theory, Live Practical & Implementation
    </button>

    <h3>Award Winning LMS</h3>
    <h3>DOLMS!</h3>

    <p>
      High-quality explainer videos of all topics. Learn on desktop or mobile
      and track progress with SMART tracker.
    </p>

    <div className="lightbtnwrap">
      <button className="lightbutton2">Watch Video</button>
      <button className="lightbutton3">Learn More</button>
    </div>
  </div>

  {/* Right Side */}
  <div className="lightrightsection">
    
    <div className="firstdiv">
      <div className="round"></div>

      <h3>Advanced</h3>
      <h4>ANNUAL CERTIFICATE PROGRAM</h4>
      <h6>in Digital Marketing</h6>
    </div>

    <div className="seconddiv">
      <h4>3 YEARS</h4>
      <h5>Experience</h5>

      <h4>Are You Aware?</h4>
    </div>

  </div>
</div>

      {/* Courses */}
      <div id="courses" className="certificate">
        <h3>eLearning Tech Academy Certified Programs</h3>
        <p>
          Join the next revolution now! 6700+ learners got placements with our
          certifications.
        </p>
        
      </div>
      <div class="divs4"><div class="div41"><button class="buttons4">Data Science</button><h3>Data Science,AI &amp; ML</h3><h4>Know More </h4> </div><div class="div42"><button class="buttons4">Annual Program</button><h3>Annual DigiHero Program</h3><h4>Know More </h4> </div><div class="div43"><button class="buttons5">Digital Marketing</button><h3>Online Marketing Professional</h3><h4>Know More </h4> </div><div class="div44"><button class="buttons4">Digital Marketing</button><h3>Online Marketing Practitioner</h3><h4>Know More </h4> </div></div>

      {/* Testimonials */}
      <div className="trainee">
        <button>Testimonials</button>

        <h2>What Our Trainees Have to Say</h2>

        <h3>
          Our courses have received an average rating of <span>9.4/10</span>.
          We have trained more than <span>75,000+</span> individuals.
        </h3>
      </div>

      {/* Contact */}
      <div id="contact"className="divss3">
        <div className="ssleftsection">
          <h1>Confused? Why not let us help!</h1>

          <h4>
            Get in touch with our friendly team for batches, fees and curriculum
          </h4>

          <form id="contact"className="form">
            <label>Name*</label>
            <input type="text" placeholder="Your Name" />
              <label>Phone No.*</label>
            <input type="number" placeholder="Your Phone" />
              <label>Email*</label>
            <input type="email" placeholder="Your Email" />
              <label>Center*</label>
         <select type="select">
            <option>Select</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Chandigarh</option>
            </select>
             <label>Course*</label>
            <select type="select">
            <option>Select</option>
              <option>Frontend developer</option>
              <option>Full-stack developer</option>
                <option>Python developer</option>
              </select>
     
<div>
              <button type="submit">Get Brochures</button>
              </div>
          </form>
        </div>

        <div className="ssrightsection">
          <img src="/Hero_Banner.png" alt="contact" />
        </div>
      </div>

    {/* Footer */}
<footer className="footer">

  <div className="footer-top">

    <div className="tech">
      <h3>eLearning Tech Academy</h3>
      <p>Empowering careers through cutting-edge digital education.</p>
    </div>

    <div>
      <h3>Quick Links</h3>
      <ul>
        <li>About Us</li>
        <li>Courses</li>
        <li>Programs</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>
      <h3>Popular Courses</h3>
      <ul>
        <li>Digital Marketing</li>
        <li>Web Development</li>
        <li>Data Analytics</li>
        <li>UI/UX Design</li>
      </ul>
    </div>

    <div>
      <h3>Get in Touch</h3>
      <ul>
        <li>Chandigarh, India</li>
        <li>+91 7027316762</li>
        <li>info@abcdmehta.org.in</li>
      </ul>
    </div>

  </div>

  <div className="footer-middle">
    <div className="newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <p>Stay updated with latest courses and digital trends</p>
    </div>

    <div className="subscribe-box">
      <input type="text" placeholder="Enter Your Email" />
      <button>Subscribe</button>
    </div>
  </div>

  <div className="footer-bottom">
    <p>
      © 2025 eLearningTechAcademy. All rights reserved.
      Privacy Policy | Terms of Service
    </p>
  </div>

</footer>
    </div>
  );
}

export default App;