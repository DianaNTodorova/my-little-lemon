import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import backgroundLemon from '../images/background_lemon.jpg';
import Footer from './Footer';
import { useOrder } from './OrderContext';

export default function PlaceOrder() {
  const { basket } = useOrder();
  const totalPrice = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div className="card">
          <img src={backgroundLemon} className="card-img" alt="..." />
          <div className="card-img-overlay d-flex align-items-center justify-content-center text-center">
            <h5 class="card-title fs-1">Finish Order</h5>
            <p class="card-text fs-3">
              {basket.length === 0 ? (
                <p>No items in the basket!</p>
              ) : (
                <ul>
                  {basket.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}</strong> - ${item.price} x{' '}
                      {item.quantity} = ${item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              )}
            </p>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button
              className="main-button mt-3 text-l"
              onClick={() => navigate('/')}
            >
              {''} Place Order
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
