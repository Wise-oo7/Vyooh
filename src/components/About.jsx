import React from 'react';
import './Footer.css';

const About = () => {
  return (
    <div className="about-page">
      <h2>About Us</h2>

      <div className="image-box">
        <img 
          src="cx.webp" // Replace with your actual image URL
          alt="About Us"
          className="responsive-image"
        />
      </div>
      
      <div className="article-box">
        <h3>Our Story</h3>
        <p>
          Vyuh's mission is to empower individuals through the ancient wisdom of strategy, 
          building a community where tactical minds and enthusiasts can converge to explore, 
          learn, and apply the principles of formation and battle strategies from Indian epics. 
          As a unique platform dedicated to the art of Vyuh, we aim to bridge history with modern 
          applications, creating a space where users can engage in intellectual battles and grow 
          their strategic thinking skills.
        </p>

        <h2>Our Values</h2>
        <p>
          At Vyuh, we are committed to fostering a respectful, thoughtful, and stimulating environment. 
          Here's what drives us:
        </p>

        <ul>
          <li><strong>Respect for History:</strong> We believe that the ancient strategies are timeless, 
          and we approach them with the reverence they deserve, aiming to teach them in a way that honors 
          their origins.</li>

          <li><strong>Learning through Experience:</strong> Every challenge in Vyuh is designed to teach 
          and improve your strategic skills. Success or failure, each battle is a learning experience, 
          sharpening the mind and building resilience.</li>

          <li><strong>Enjoyment through Strategy:</strong> While Vyuh is rooted in serious intellectual 
          pursuit, we believe in the joy of strategy—the thrill of outwitting an opponent and the satisfaction 
          of mastering complex formations. Our platform celebrates that joy through dynamic, interactive 
          experiences.</li>
        </ul>
      </div>

      <div className="video-box">
        <h3>Watch Our Story</h3>
        <iframe 
          src="https://www.youtube.com/embed/your-video-id" // Replace with your actual video URL
          title="About Us Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="footer">
      thevyuh.com © 2024
      </div>
    </div>
  );
};

export default About;
