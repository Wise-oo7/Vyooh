import React, { useState } from 'react';
import './Rules.css'; // Import your CSS file

const Rules = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRules = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Game Rules Button positioned as required */}
      <button className="note-button" onClick={toggleRules}>
        Game Rules
      </button>

      {/* Display Rules right below the button */}
      {isOpen && (
        <div className="rules-container">
          <h2>Game Rules!</h2>
          <p>1. प्रत्येक खिलाड़ी के पास 9 Dice होते हैं।</p>
          <p>2. केवल 2 खिलाड़ी खेल सकते हैं।</p>
          <p>3. हम नक्शे पर एक-एक करके Dice रखेंगे।</p>
          <p>4. हमें एक ट्रिक बनानी है! (यानी एक ही रंग के 3 Dice एक पंक्ति में रखना)।</p>
          <p>5. प्रत्येक खिलाड़ी के 9 Dice रखने के बाद, हम Dice को दाएं-बाएं और ऊपर-नीचे हिला सकते हैं।</p>
          <p>6. ट्रिक बनते ही हम प्रतिद्वंद्वी का एक Dice उठा लेते हैं, फिर एक अंक गिना जाएगा।</p>
          <p>7. बनी हुई ट्रिक में से नहीं उठा सकते।</p>
          <p>8. हम ट्रिक तोड़ और बना सकते हैं।</p>
          <p>9. जो सबसे ज्यादा Dice इकट्ठा करेगा, वही विजेता होगा।</p>

          <p>"इस खेल में आपकी असाधारण भागीदारी आपकी बुद्धिमत्ता और तीव्र मस्तिष्क का परिचायक है!🍿</p>
          <p>"अपने मस्तिष्क को इसी तरह Sharp करते रहें"🍿</p>

          <p>-----------&&&----------</p>

          <p>1. Each player has 9 Dices.</p>
          <p>2. Only 2 players can play.</p>
          <p>3. We will place Dice on the map one by one.</p>
          <p>4. We need to form a trick! place 3 Dice of the same color in a row.</p>
          <p>5. After placing all 9 Dice, we can move the Dice left-right and up-down.</p>
          <p>6. Once a trick is formed, we take one Dice from the opponent, and then one point is counted.</p>
          <p>7. Dice from an already formed trick cannot be taken.</p>
          <p>8. We can break and form new tricks.</p>
          <p>9. The player who collects the most Dice will be the winner.</p>
        </div>
      )}
    </div>
  );
};

export default Rules;
