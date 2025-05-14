import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import backgroundLemon from '../images/background_lemon.jpg';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Confetti from 'react-confetti';

export default function OrderConfirmatio() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 9000); // Stop confetti after 3 seconds
  }, []);
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={800}
            recycle={false}
            colors={['#f4ce14', '#fff', '#f4ce14']}
          />
        )}
        <div className="card">
          <div  className="card-img" alt="..."    
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
              left: '25%',
      
            }}
          >
            <h5 class="card-title fs-1">Thank you for your order!</h5>

            <button className="main-button mt-3" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faChevronLeft} />
              {''} Return to Home
            </button>
          </div>
        </div>
      </main>
      <Footer className="footer" />
    </div>
  );
}
