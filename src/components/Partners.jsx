import React from 'react';
import './Footer.css'; // Import the separate CSS file

const Partners = () => {
  const handleDonateClick = () => {
    // Check if the user is on mobile
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    // Construct UPI URL for Google Pay, PhonePe, or Paytm
    const upiURL = `upi://pay?pa=9644692482@upi&pn=Vyuh&cu=INR`;

    // Open UPI URL in a new tab for mobile users, else show an alert for desktops
    if (isMobile) {
      window.open(upiURL, '_blank'); // Open the UPI payment link for mobile users
    } else {
      alert("UPI payments are only supported on mobile devices. Please use your phone to complete the donation.");
    }
  };

  return (
    <div className="partners-container">
      <h1 className="partners-title">Support Vyuh's Journey</h1>
      <p className="partners-message">
        At <strong>Vyuh</strong>, we’re not just building a game – we’re creating an experience, a community, and a vision. 
        Every step we take is made possible by the generous support and belief of individuals like you who share in our dream.
      </p>
      <p className="partners-message">
        With your contribution, you’re not only supporting a game but helping us foster creativity, innovation, and 
        connection among players around the world. No amount is too small; every donation brings us closer to our 
        goal of making Vyuh a name recognized across the gaming universe.
      </p>
      <p className="partners-message">
        By donating, you become a part of something larger than us all—a shared mission to revolutionize gaming. 
        Your support means the world to us and motivates us to keep pushing forward. Thank you for believing in us and 
        for being a vital part of our journey. Let’s make Vyuh’s impact unforgettable, together!
      </p>
      <button onClick={handleDonateClick} className="partners-button">Donate Now</button>
      <p className="contact-info">-</p>
      <p className="contact-info">Contact us: +91-9303368482 | Animesh | +91-6261292989 | Sanat</p>
      <p className="contact-info">-</p>
    </div>
  );
};

export default Partners;
