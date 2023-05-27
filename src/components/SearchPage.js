import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchPage() {
  const location = useLocation();
  const searchValue = location.state?.searchValue;

  console.log(process.env.REACT_APP_ACCESS_TOKEN)

  function requestDataFromAPI(){
    //Request data based on the searchValue
    //https://api.genius.com/search?q=searchValHere&access_token=tokenHere
  }

  return (
    <div>
      <h1>Search Page</h1>
      <h2>{searchValue}</h2>
    </div>
  );
}
