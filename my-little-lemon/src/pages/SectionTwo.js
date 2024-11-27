import React from 'react';
import CardList from './DataList';

// Forwarding the ref from the parent to this component
const SectionTwo = React.forwardRef(({ id }, ref) => {
  return (
    <div className="section-two" ref={ref} id={id}>
      <CardList />
    </div>
  );
});

export default SectionTwo;
