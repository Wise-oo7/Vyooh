import React, { useState } from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();
  
  // State to manage the modal visibility for Vyuh
  const [showVyuhModal, setShowVyuhModal] = useState(false);
  const [selectedVyuhRole, setSelectedVyuhRole] = useState(''); // To store the Vyuh selected role
  
  // State to manage the modal visibility for ColdWar
  const [showColdWarModal, setShowColdWarModal] = useState(false);
  const [selectedColdWarRole, setSelectedColdWarRole] = useState(''); // To store the ColdWar selected role

  const handleMahabharatClick = () => {
    setShowVyuhModal(true); // Show the Vyuh role selection modal
  };

  const handleSuperPowerClick = () => {
    setShowColdWarModal(true); // Show the ColdWar role selection modal
  };

  const handleVyuhRoleSelect = (role) => {
    setSelectedVyuhRole(role); // Set the selected Vyuh role
    navigate('/board', { state: { role } }); // Navigate to board with the Vyuh role
  };

  const handleColdWarRoleSelect = (role) => {
    setSelectedColdWarRole(role); // Set the selected ColdWar role
    navigate('/bond', { state: { role } }); // Navigate to bond with the ColdWar role
  };

  return (
    <div className="play-container">
      <button className="play-button" onClick={handleMahabharatClick}>
        🎲 व्यूह (Vyuh) 🎲
      </button>
      <button className="play-button" onClick={handleSuperPowerClick}>
        🏆 ColdWar 🏆
      </button>
      <button className="play-button" onClick={() => window.location.href = "https://youtu.be/UDyBVu64tm0"}>
      🏆 How to Play 🎮
      </button>
      {/* Vyuh Role Selection Modal */}
      {showVyuhModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Choose Your Role</h2>
            <button onClick={() => handleVyuhRoleSelect('Pandav')} className="role-button">
              पांडव 🛡️
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                आपके 9 योद्धा ये हैं:
              </p>
              <small>युधिष्ठिर, अर्जुन, भीम, नकुल, सहदेव, अभिमन्यु, धृष्टद्युम्न, सत्यकी, घटोत्कच</small>
            </div>
            <hr className="role-separator" />
            <button onClick={() => handleVyuhRoleSelect('Kaurav')} className="role-button">
              कौरव ⚔️
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                आपके 9 योद्धा ये हैं:
              </p>
              <small>भीष्म, द्रोणाचार्य, कर्ण, अश्वत्थामा, कृपाचार्य, कृतवर्मा, दुर्योधन, दुशासन, युयुत्सु</small>
            </div>
          </div>
        </div>
      )}

      {/* ColdWar Role Selection Modal */}
      {showColdWarModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Choose Your Role</h2>
            {/* Eastern Allies Section */}
            <button onClick={() => handleColdWarRoleSelect('Eastern Allies')} className="role-button">
              Eastern Allies🌍
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                Your nine dices are this:
              </p>
              <small>
                🇷🇺 RUSSIA, 🇨🇳 CHINA, 🇮🇳 INDIA, 🇷🇴 ROMANIA, 🇵🇱 POLAND, 🇭🇺 HUNGARY, 🇰🇵 NORTH KOREA, 🇮🇩 INDONESIA, 🇪🇬 EGYPT
              </small>
            </div>
            <hr className="role-separator" />
            {/* Western Allies Section */}
            <button onClick={() => handleColdWarRoleSelect('Western Allies')} className="role-button">
              Western Allies🛡️
            </button>
            <div className="role-names">
              <p style={{ color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                Your nine dices are this:
              </p>
              <small>
                🇺🇸 UNITED STATES, 🇨🇦 CANADA, 🇫🇷 FRANCE, 🇬🇧 UNITED KINGDOM, 🇩🇪 GERMANY, 🇮🇹 ITALY, 🇦🇺 AUSTRALIA, 🇰🇷 SOUTH KOREA, 🇯🇵 JAPAN
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
