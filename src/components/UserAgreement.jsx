import React from 'react';
import './Footer.css'; // Optional: You can add a CSS file for styling if needed

const UserAgreement = () => {
  return (
    <div className="agreement-container">
      <h1 className="agreement-heading">User Agreement</h1>
      <p className="agreement-content">
        Vyuh does not collect, store, or process any personal data from users, ensuring a seamless gaming experience without the need
        for personal information. 
        By using Vyuh's services or playing the game, users agree to respect the privacy and content protection policies outlined here.
      </p>
      <p className="agreement-content">
        Users are strictly prohibited from copying, distributing, or reproducing any part of Vyuh’s game content,
        including maps, graphics, designs, and other intellectual property, without explicit permission from Vyuh. Any unauthorized
        use may lead to legal action.
      </p>
      <p className="agreement-content">
        As Vyuh evolves, we may update our policies, and users will be informed of any changes to this agreement. 
        Continued use of the services will imply acceptance of the revised terms.
      </p>
    </div>
  );
};

export default UserAgreement;

