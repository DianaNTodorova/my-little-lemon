import React from 'react';
import cardData from '../components/data'; // Ensure the path is correct
import CardOrder from './CardOrder'; // Adjust path if needed

export default function CardList() {
  return (
    <div>
      {cardData.map((item) => (
        <CardOrder key={item.id} data={item} />
      ))}
    </div>
  );
}
