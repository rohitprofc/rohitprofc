import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const About = () => {
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
      <Header navLinks={[{ to: '/', label: 'Work' }]} />


      {/* About Content */}
      <div className="about-page slide delay01">
        <div className="about">
          <h2>
            Full Stack Web Developer specializing in responsive design and seamless user experiences.
          </h2>
          <p className="text">
            I'm Rohit, a dedicated Full Stack Web Developer with a passion for crafting intuitive digital solutions. With expertise spanning UI/UX, frontend elegance, and robust backend systems, I bring a holistic approach to web development. My experience in dynamic projects, from responsive landing pages to complex intranet sites, has honed my ability to optimize user experiences and align them with business objectives.
          </p>
          <p className="text">
            In previous roles, I have driven key initiatives that enhanced user engagement and streamlined workflows. I excel in managing comprehensive web development projects, from strategic planning and coding to collaboration across teams. With a solid foundation in modern development frameworks and a keen eye for detail, I leverage diverse tools and methodologies to deliver impactful results.
          </p>
          <p className="text">
            My strength lies in building aesthetically pleasing, functional interfaces while fostering a collaborative environment that integrates design, development, and project management. I am committed to pushing the envelope in web development, delivering innovative solutions that meet user expectations and business goals.
          </p>
        </div>

        {/* Work, Education & Disciplines */}
        <div className="about">
          <h4>Work Experiences</h4>
          <div className="multi-row-grid">
            <div className="multi-row">
              <p className="title">Full Stack Developer</p>
              <p className="entity">Studio Interlace</p>
              <p className="years">2024</p>
            </div>
          </div>

          <h4>Education</h4>
          <div className="multi-row">
            <p className="title">Bachelor's Degree</p>
            <p className="entity">Artificial Intelligence and Data Science in Computer Science Engineering</p>
            <p className="years">2021 – 2025</p>
          </div>

          <div className="multi-row">
            <p className="title">High School</p>
            <p className="entity">Mathematics, Physics, Chemistry</p>
            <p className="years">2019 – 2021</p>
          </div>

          <h4>Disciplines</h4>
          <div className="multi-row-grid">
            <p>End-to-end Product Design</p>
            <p>Interface Design</p>
            <p>User Experience Design</p>
            <p>Front-End</p>
          </div>

          <h4>Contact</h4>
          <p>
            Feel free to reach out for projects, collaborations, or just to say hello! Currently seeking new opportunities.
          </p>
          <div className="multi-row contact-options">
            <a
              id="copyemail"
              data-clipboard-text="rohitprofc@gmail.com"
              onClick={handleCopyEmail}
              style={{ cursor: 'pointer' }}
            >
              {emailText}
            </a>
            <a href="https://www.linkedin.com/in/rohitprofc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.github.com/rohitprofc/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
