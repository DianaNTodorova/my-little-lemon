import { Button } from 'react-bootstrap';

export default function CardOrder({ data }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '45%', margin: 'auto' }}>
      <div className="row g-0">
        <div className="col-md-4">
          {/* Change: Added alt attribute with data.title */}
          <img
            src={data.image}
            className="img-fluid rounded-start"
            alt={data.title}
          />
        </div>
        <div className="col-md-8">
          {/* Change: Corrected classes for alignment */}
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h5 className="card-title mt-3">{data.title}</h5>
            <p className="card-text mt-3">{data.description}</p>
            <p className="mt-2">
              <strong>{data.price}</strong>
            </p>
          </div>
        </div>
      </div>
      {/* Change: Added w-100 for button width */}
      <Button className="main-button w-100">Order</Button>
    </div>
  );
}
