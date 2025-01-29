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

      {/* Vyuh Role Selection Modal */}
      {showVyuhModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Choose Your Role</h2>
            <button onClick={() => handleVyuhRoleSelect('Pandav')} className="role-button">
              पांडव🛡️
            </button>
            <button onClick={() => handleVyuhRoleSelect('Kaurav')} className="role-button">
              कौरव ⚔️
            </button>
          </div>
        </div>
      )}

      {/* ColdWar Role Selection Modal */}
      {showColdWarModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Choose Your Role</h2>
            <button onClick={() => handleColdWarRoleSelect('Western Bloc')} className="role-button">
              Western Bloc 🌍
            </button>
            <button onClick={() => handleColdWarRoleSelect('Eastern Bloc')} className="role-button">
              Eastern Bloc 🌍
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
