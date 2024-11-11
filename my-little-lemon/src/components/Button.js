import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigateButton({ to, label }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {label}
    </button>
  );
}
