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
        //Request data based on the searchValue
        /*const fetchData = async () => {
            try {
              const response = await axios.get(`https://api.genius.com/search?q=${searchValue}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
              setData(response.data.response.hits);
              console.log(data)
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();*/
    }, []);


    return (
        <div>
            <h1>Results for: {searchValue}</h1>
            <SongList data={data}/>
        </div>
    );
}
