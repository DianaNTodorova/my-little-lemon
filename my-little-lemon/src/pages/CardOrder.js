import { Button } from 'react-bootstrap';

export default function CardOrder({ data }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '45%', margin: 'auto' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body alight-items-center justify-items-center">
            <h5 className="card-title  mt-3">{data.title}</h5>
            <p className="card-text  mt-3 ">{data.description}</p>
            <p>{data.price}</p>
          </div>
        </div>
        <Button className="main-button">Order</Button>
      </div>
    </div>
  );
}
