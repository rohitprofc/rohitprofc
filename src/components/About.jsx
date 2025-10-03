import React, { useState } from 'react';
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
            Software Development Engineer specializing in scalable applications and intelligent digital solutions.
          </h2>
          <p className="text">
            I’m Rohit, a dedicated Full Stack Engineer with expertise in Web Development & SEO, App Development, Artificial Intelligence, Machine Learning, and software consulting. My career has been defined by building responsive, user-centric applications and designing robust backend systems that empower businesses to grow. I thrive on solving complex challenges by blending technical precision with strategic business alignment.
          </p>
          <p className="text">
            In my projects, I’ve driven initiatives that streamlined workflows, enhanced user engagement, and automated critical operations. From landing pages and enterprise applications to AI-powered systems, I’ve managed projects end-to-end—covering design, development, and deployment. With a foundation in modern frameworks and methodologies, I focus on delivering scalable, maintainable, and impactful results.
          </p>
          <p className="text">
            My strength lies in combining aesthetic design, functional engineering, and business consulting to create solutions that drive tangible outcomes. I collaborate closely with teams and clients, ensuring that every solution not only meets technical requirements but also achieves business objectives. Above all, I am committed to delivering innovation that resonates with users and accelerates growth.
          </p>
        </div>

        {/* Work, Education & Disciplines */}
        <div className="about">
          <h4>Work Experiences</h4>
          <div className="multi-row-grid">
            <div className="multi-row">
              <p className="title">Software Development Engineer</p>
              <p className="entity">LinenGrass - Present</p>
              <p className="years">2025</p>
            </div>
          </div>
          <div className="multi-row-grid">
            <div className="multi-row">
              <p className="title">Designer and Director</p>
              <p className="entity">Freelance</p>
              <p className="years">2023 - Present</p>
            </div>
          </div>

          <h4>Education</h4>
          {/* <div className="multi-row">
            <p className="title">Master's Degree</p>
            <p className="entity">Artificial Intelligence and Data Science</p>
            <p className="years">xxxx – xxxx</p>
          </div> */}

          <div className="multi-row">
            <p className="title">Bachelor of Technology</p>
            <p className="entity">Artificial Intelligence and Data Science</p>
            <p className="years">2021 – 2025</p>
          </div>

          <div className="multi-row">
            <p className="title">Higher Secondary Education</p>
            <p className="entity">Calculus, Statistics, Physics & Chemistry</p>
            <p className="years">2019 – 2021</p>
          </div>

          <div className="multi-row">
            <p className="title">High School</p>
            <p className="entity">Mathematics and Sciences</p>
            <p className="years">2014 – 2019</p>
          </div>

          <h4>Disciplines</h4>
          <div className="multi-row-grid">
          <p>End-to-end Product Design</p>
          <p>Interface Design</p> 
          <p>User Experience Design</p>
          <p>Design Systems</p> 
          <p>Automations</p>
          <p>AI & Machine Learning</p>
          <p>Consulting</p>
          <p>Full-Stack</p>
          </div>

          <h4>Contact</h4>
          <p>
            Feel free to reach out for projects, collaborations, or just to say hello!
            {/* Feel free to reach out for projects, collaborations, or just to say hello! Currently seeking new opportunities. */}
          </p>
          <div className="multi-row contact-options">
            <a
              id="copyemail"
              data-clipboard-text="hey@rohitprofc.com"
              onClick={handleCopyEmail}
              style={{ cursor: 'pointer' }}
            >
              {emailText}
            </a>
            <a href="https://www.linkedin.com/in/rohitprofc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* <a href="https://www.github.com/rohitprofc/" target="_blank" rel="noopener noreferrer">GitHub</a> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
