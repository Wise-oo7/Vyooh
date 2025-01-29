import React from 'react'

const PlayerCount = ({ kingRemovalCount, queenRemovalCount, kingTime, queenTime }) => {
    return (
        <div className="counter-buttons d-flex gap-4">
            <button className="king-count-button">पांडव 🛡️ Points | {kingRemovalCount} | {Math.floor(kingTime / 60)}:{String(kingTime % 60).padStart(2, '0')}</button>
            <button className="queen-count-button">कौरव ⚔️ Points | {queenRemovalCount} | {Math.floor(queenTime / 60)}:{String(queenTime % 60).padStart(2, '0')}</button>
        </div>
    )
} 

export default PlayerCount