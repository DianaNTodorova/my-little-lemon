import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import backgroundLemon from '../images/background_lemon.jpg';
import Footer from './Footer';
import { useOrder } from './OrderContext';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function PlaceOrder() {
  const { basket, addToCart, removeFromCart } = useOrder();

  // Increment item quantity
  const handleAddItem = (item) => {
    addToCart(item);
  };

  // Decrement item quantity
  const handleRemoveItem = (item) => {
    removeFromCart(item.title);
  };

  // Calculate total price
  const totalPrice = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="card wrapper">
          <div className="card">
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${backgroundLemon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                height: '100vh', // Adjust height as needed
              }}
            />
            <div
              className="card-img-overlay d-flex align-items-center justify-content-center text-center"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 0%)',
                maxWidth: '80%', // Limit maximum width of the overlay
                maxHeight: '100%', // Limit maximum height of the overlay
              }}
            >
              <h5 className="card-title  mb-2">Finish Order</h5>
              {basket.length === 0 ? (
                <p className="card-text">No items in the basket!</p>
              ) : (
                <>
                  <ul className="p-1 w-100 ">
                    {basket.map((item, index) => (
                      <li
                        key={index}
                        className="d-flex justify-content-between mt-4 py-2 align-items-center"
                      >
                        <div>
                          <strong>{item.title}</strong> - ${item.price}
                        </div>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginLeft: '5px',
                          }}
                        >
                          <button
                            className="btn main-button"
                            style={{
                              width: '30px',
                              borderRadius: '4px 0px 0px 4px',
                              height: '30px',
                              padding: '0',
                            }}
                            onClick={() => handleRemoveItem(item)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            style={{
                              width: '50px',
                              textAlign: 'center',
                              marginRight: '5px',
                              border: '1px solid #ccc',
                              backgroundColor: 'white',
                              borderRadius: '0px',
                              fontSize: '19px',
                              margin: 'auto',
                            }}
                          />
                          <button
                            className="btn main-button"
                            style={{
                              width: '30px',
                              borderRadius: '0px 4px 4px 0px',
                              height: '30px',
                              padding: '0',
                            }}
                            onClick={() => handleAddItem(item)}
                          >
                            +
                          </button>
                        </div>
                      </li>
                    ))}
                    <div>
                      <h3 className="mt-5 mb-3">
                        Total: ${totalPrice.toFixed(2)}
                      </h3>
                      <button
                        className="main-button mt-3 text-l"
                        onClick={() => navigate('/orderconfirmation')}
                      >
                        Place Order
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </div>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
