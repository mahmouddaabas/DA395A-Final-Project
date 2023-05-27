import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchPage() {
  const location = useLocation();
  const searchValue = location.state?.searchValue;

  return (
    <div>
      <h1>Search Page</h1>
      <h2>{searchValue}</h2>
    </div>
  );
}
