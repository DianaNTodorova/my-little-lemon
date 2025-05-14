import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import backgroundLemon from '../images/background_lemon.jpg';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Confirmation() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti shortly after the component mounts
    setTimeout(() => {
      setShowConfetti(true);
    }, 300); // slight delay to ensure rendering
  }, []);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 400,
    dragFriction: 0.08,
    duration: 5000,
    stagger: 0.05,
    width: "10px",
    height: "10px",
    colors:['#f4ce14', '#fff', '#f4ce14'] // shades of yellow
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="card">
          <img  className="card-img" alt="..."    
          style={{
                        backgroundImage: `url(${backgroundLemon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        height: '66.666vh',
                      }}/>
          <div
            className="card-img-overlay d-flex align-items-center justify-content-center text-center"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              flexDirection: 'column',
            }}
          >
            {/* Confetti container */}
            <div style={{ position: 'relative' }}>
              <Confetti active={showConfetti} config={confettiConfig} />
            </div>

            <h5 className="card-title fs-1">Table Reserved!</h5>
            <p className="card-text fs-3">
              Thank you for your reservation in Little Lemon restaurant. You
              will receive email confirmation soon.
            </p>
            <button className="main-button mt-3" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faChevronLeft} />
              {' '}Return to Home
            </button>
          </div>
        </div>
      </main>
      <Footer className="footer" />
    </div>
  );
}
