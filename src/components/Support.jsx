import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Footer.css';

const Support = () => {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const sendQuery = (e) => {
    e.preventDefault();

    // Check if query is not empty
    if (query.trim()) {
      // Use EmailJS to send the email
      emailjs.send(
        'service_vsimzhb',    // Your Gmail Service ID
        'template_gf0ln3p',   // Your EmailJS template ID
        {
          message: query,     // This sends the query input
          to_name: 'Support Team', 
          reply_to: 'shanatpande44@gmail.com',  // Your email address
        },
        'KvHXqufXx8FGL-5-j'        // Your EmailJS User ID (replace with your public key)
      )
      .then(() => {
        setMessage('Query sent successfully!');
        setQuery(''); // Clear the form after successful submission
      })
      .catch((error) => {
        setMessage('Failed to send the query. Please try again.');
        console.error('Email error:', error); // Log any errors for debugging
      });
    } else {
      setMessage('Please enter a valid query.');
    }
  };

  return (
    <div className="support-page">
      <div className="article-box">
        <h2>Support 📡</h2>
        <p>
          Welcome to the Support Section! We are here to assist you.
          <br />
          Please feel free to send us your queries, and let us know about any issues
          you may be facing. Your concerns are important to us, and we are committed
          to providing you with the help you need.
          <br />
          How may we assist you today? Do you require assistance with a specific issue?
        </p>
        <p>
          Remember, you're not alone in this journey. Together, we can overcome any challenge!
          <br />
          Feel free to reach out; we're just a message away.
        </p>
      </div>

      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>You can reach us via:</p>
        <p>WhatsApp: <a href="https://wa.me/916261292989" target="_blank" rel="noopener noreferrer">+91 6261292989</a></p>
        <p>Email: <a href="mailto:dddd@gmail.com">dddd@gmail.com</a></p>
      </div>

      <div className="query-box">
        <h3>Submit Your Query</h3>
        <form onSubmit={sendQuery}>
          <textarea
            placeholder="Write your query (up to 100 words)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            maxLength="600"
            rows="5"
            className="query-textarea"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}  {/* Display success or error message */}
      </div>
    </div>
  );
};

export default Support;
