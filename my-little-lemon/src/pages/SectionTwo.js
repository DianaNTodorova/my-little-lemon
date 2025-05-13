import React from 'react';
import CardList from './DataList.js';

// Forwarding the ref from the parent to this component
const SectionTwo = React.forwardRef(({ id }, ref) => {
  return (
    <div className="section-two" ref={ref} id={id}>
      <div className="container text-center my-5">
      <h1 className=" menu-title" style={{ fontFamily: 'Tangerine, cursive' }}>--- Our Menu ---</h1>
      <CardList />
    </div>
    </div>
  );
});

export default SectionTwo;
