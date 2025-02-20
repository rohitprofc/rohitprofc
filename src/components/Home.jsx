import React from 'react';

const Home = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('rohitprofc@gmail.com')
      .then(() => {
        alert('Email Copied!'); 
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <>
      <div className="header slide">
        <a href="/" className="logo">Rohit Kavuluri</a>
        <a href="/about">About</a>
      </div>

      <div className="hero">
        <h1 className="slide delay01">
          Web Development. Machine Learning. Data Science. AI. & More
        </h1>
      </div>

      <div className="about-me slide delay03">
        <div className="description">
          <p>
            I'm Rohit Kavuluri, a Full Stack Web Developer with a versatile skill set and a passion for crafting seamless digital experiences. I have expertise in UI/UX design, backend development, and Python web applications. I specialize in creating responsive, aesthetic web interfaces that align with business goals and user expectations. My journey has led me through diverse projects, from front-end elegance to robust backend solutions, and I thrive on tackling challenges in the ever-evolving tech landscape.
          </p>
          <a href="/about">More about me</a>
        </div>
        <div className="contact">
          <p>Get in touch <span>(Click to copy)</span></p>
          <div className="email" onClick={copyEmail}>
            rohitprofc@gmail.com
          </div>
        </div>
      </div>

      <footer className="slide delay03">© rohitprofc 2025</footer>
    </>
  );
};

export default Home;
