import { Button } from 'react-bootstrap';

export default function CardOrder({ data }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '45%', margin: 'auto' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
        <Button className="main-button">Order</Button>
      </div>
    </div>
  );
}
