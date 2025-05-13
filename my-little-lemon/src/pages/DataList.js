import React from 'react';
import cardData from '../components/data'; // Ensure the path is correct
import CardOrder from './CardOrder'; // Adjust path if needed

export default function CardList() {
  return (
<div className="container my-5">
  <div className="row">
    {cardData.map((item) => (
      <div className="col-md-6 mb-4" key={item.id}>
        <div className="card h-100 d-flex flex-column"> 
          <CardOrder data={item} />
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
