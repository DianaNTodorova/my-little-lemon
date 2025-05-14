import backgroundLemon from '../images/background-section.jpg';

export default function SmallSection() {
  return (
    <div
      className="card card-small justify-content-center"
      style={{
        backgroundImage: `url(${backgroundLemon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '300px',
      }}
    >
      <h5 className="card-title style-h5">Little Lemon</h5>
      <p className="card-text style-p">Reserve table</p>
      <p className="card-text"></p>
    </div>
  );
}
