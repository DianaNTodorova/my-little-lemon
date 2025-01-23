import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import backgroundLemon from '../images/background_lemon.jpg';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Confirmation() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div className="card">
          <img src={backgroundLemon} className="card-img" alt="..." />
          <div
            className="card-img-overlay d-flex align-items-center justify-content-center text-center"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h5 class="card-title fs-1">Table Reserved!</h5>
            <p class="card-text fs-3">
              Thank you for your reservation in Little Lemon restaurant. You
              will receive email confirmation soon.
            </p>
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
