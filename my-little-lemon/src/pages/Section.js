import backgroundLemon from '../images/background_lemon.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigateButton from '../components/Button';

export default function Section() {
  return (
    <div className="card text-bg-light">
      <img src={backgroundLemon} className="card-img" alt="..." />
      <div className="card-img-overlay ">
        <h5 className="card-title fs-1">Little Lemon </h5>
        <p className="card-text fs-3">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <p className="card-text">
          <NavigateButton to="/reservation" label="Reserve table" />
        </p>
      </div>
    </div>
  );
}
