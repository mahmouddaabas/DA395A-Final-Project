import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SearchPage() {
    //State to set and save the data from the API.
    const [data, setData] = useState([]);

    //Use location to get the searchValue from the Link element in the Homepage component.
    const location = useLocation();
    const searchValue = location.state?.searchValue;


    return (
        <div>
            <h1>Results for: {searchValue}</h1>
            <ul id="song-list">

            </ul>
        </div>
    );
}
