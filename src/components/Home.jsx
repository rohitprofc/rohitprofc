import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const [emailText, setEmailText] = useState("rohitprofc@gmail.com");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rohitprofc@gmail.com");
      setEmailText("Email Copied");
      setTimeout(() => {
        setEmailText("rohitprofc@gmail.com");
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
          Web Development. Machine Learning. Data Science. AI. & More
        </h1>
      </div>

      {/* About Me Section */}
      <div className="about-me slide delay03">
        <div className="description">
          <p>
            I'm Rohit Kavuluri, a Full Stack Engineer with a versatile skill set and a passion for crafting seamless digital experiences. I have expertise in UI/UX design, backend development, and Python web applications. I specialize in creating responsive, aesthetic web interfaces that align with business goals and user expectations. My journey has led me through diverse projects, from front-end elegance to robust backend solutions, and I thrive on tackling challenges in the ever-evolving tech landscape.
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
