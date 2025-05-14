import backgroundLemon from '../images/background_lemon.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigateButton from '../components/Button';

export default function Section() {
  return (
    <div className="card text-bg-light">
      <img  className="card-img" alt="..."     
            style={{
              backgroundImage: `url(${backgroundLemon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              height: '66.666vh',
            }}/>
      <div className='card-body'>
      <div className="card-img-overlay ">
        <h5 className="card-title card-title_section">The Little Lemon </h5>
        <p className="card-text card-text_section ">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <p className="card-text">
          <NavigateButton to="/reservation" label="Reserve table" />
        </p>
      </div>
     </div>
    </div>
  );
}
