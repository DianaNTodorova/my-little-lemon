import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/The Little Lemon logo.png';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for page navigation
import { useOrder } from './OrderContext';

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const { basket } = useOrder();
  const handleClick = () => {
    navigate('/placeorder');
  };
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Left-aligned hamburger toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered logo */}
        <div className="navbar-brand mx-auto">
          <img src={logo} alt="Little Lemon Logo" className="img-fluid" />
        </div>

        {/* Font Awesome Basket Icon on the right side */}
        <button
          className="btn btn-outline-secondary position-relative "
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faBasketShopping} size="lg" />
          {basket.length > 0 ? (
            <span
              className="position-absolute top-0 start-100 translate-middle rounded-pill badge bg-danger"
              style={{
                padding: '0.3rem',
                fontSize: '0.8rem',
                minWidth: '1.5rem',
                textAlign: 'center',
              }}
            >
              {basket.length}
            </span>
          ) : (
            ' '
          )}
        </button>

        {/* Offcanvas Content */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <div className="mx-auto">
                <img
                  src={logo}
                  alt="Little Lemon Logo"
                  className="img-fluid"
                  style={{ height: '80px' }}
                />
              </div>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {/* Use Link for navigation */}
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li>
                <button
                  className="nav-link active btn btn-link"
                  onClick={onMenuClick}
                >
                  Menu
                </button>
              </li>
              <li>
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="/signin">
                  Sign In
                </Link>
              </li>
            </ul>

            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success main-button"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
