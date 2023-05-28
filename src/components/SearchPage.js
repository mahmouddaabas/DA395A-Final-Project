import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SongList from './SongList';

export default function SearchPage() {
  //State to set and save the data from the API.
  const [data, setData] = useState([]);

  //Use location to get the searchValue from the Link element in the Homepage component.
  const location = useLocation();
  const searchValue = location.state?.searchValue;

  //Use effect to only call the API once.
  useEffect(() => {
    const fetchData = () => {
      /*axios
        .get(`https://api.genius.com/search?q=${searchValue}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });*/

        //Dummy data to prevent spamming the api.
        const dummyData = require("../dummyData");
        setData(dummyData.getData());
        console.log(dummyData.getData())
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Results for: {searchValue}</h1>
      {
        //Dont render the SongList component if the data is undefined.
      }
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <SongList data={data} />
      )}
    </div>
  );
}

