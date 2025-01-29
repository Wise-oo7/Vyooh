import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='d-flex flex-col'>
            <img src="D.jpg" alt="Custom Content" className="responsive-image" />
            <button className="play-button" onClick={() => navigate("/play")}>
                🏆 Play Now 🏆
            </button>
            <button className="play-online-button" onClick={() => navigate("/playOnline")}>
                🎮 Play Online 🎮
            </button>
        </div>
    )
}

export default Home