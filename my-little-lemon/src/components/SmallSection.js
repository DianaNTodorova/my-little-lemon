import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundLemon from '../images/background_lemon.png';

export default function SmallSection() {
  return (
    <div className="card text-bg-light">
      <div className="card-img-overlay fixed-overlay">
        <h5 className="card-title fs-1">Little Lemon </h5>
        <p className="card-text fs-3">Reserve table</p>
        <p className="card-text"></p>
      </div>
    </div>
  );
}
