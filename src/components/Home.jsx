import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const [emailText, setEmailText] = useState("hey@rohitprofc.com");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hey@rohitprofc.com");
      setEmailText("Email Copied");
      setTimeout(() => {
        setEmailText("hey@rohitprofc.com");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      {/* Header */}
      <Header navLinks={[{ to: '/about', label: 'About' }]} />

      {/* Hero Section */}
      <div className="hero">
        <h1 className="slide delay01">
          Product Design. Interfaces. Systems. Strategy. UX. & More
        </h1>
      </div>

      {/* About Me Section */}
      <div className="about-me slide delay03">
        <div className="description">
          <p>
            I’m Rohit Kavuluri, a Software Development Engineer specializing in Web Development, SEO, App Development, and AI-driven solutions. With expertise across UI/UX, backend systems, and intelligent automations, I craft scalable applications that align business goals with user needs. My work spans front-end precision, backend robustness, and data-driven intelligence, enabling me to deliver seamless digital solutions that create measurable impact in the evolving technology landscape.
          </p>
          <Link to="/about">More about me</Link>
        </div>
        <div className="contact">
          <p>
            Get in touch <span>(Click to copy)</span>
          </p>
          <div
            className="email"
            id="copyemail"
            onClick={handleCopyEmail}
            style={{ userSelect: 'none' }}
          >
            {emailText}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
