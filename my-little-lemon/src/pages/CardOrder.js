import { Button } from 'react-bootstrap';
import { useOrder } from './OrderContext';

export default function CardOrder({ data }) {
  const { addToCart } = useOrder();

  const handleOrder = (data) => {
    addToCart(data);
  };

  return (
    <div className="card mb-3 card_flex">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-stretch">
          <img
            src={data.image}
            className="rounded-start img-card"
            alt={data.title}
          />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="price">
              <strong>${data.price}</strong>
            </p>
          </div>
        </div>
      </div>
      <Button className="main-button w-100" onClick={() => handleOrder(data)}>
        Order
      </Button>
    </div>
  );
}
