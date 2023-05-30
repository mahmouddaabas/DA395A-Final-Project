import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import SearchIcon from '@mui/icons-material/Search';


export default function HomePage(props) {
  //State to set and save the searchValue in the input.
  const [searchValue, setSearchValue] = useState([]);

  //Set a ref for the searchBar, this is used to get the value from it.
  const searchBarRef = useRef();

  //Saves the searchBar input when it changes to the state.¨
  //The value is then passed to the SearchPage component through the Link component.
  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <div className="form-container">
        <input  className =" search-bar"type="text" placeholder="Search artist.." onChange={handleInputChange} ref={searchBarRef}/>
        <Link to="/search" state={{ searchValue }}>
          <SearchIcon />
        </Link>
      </div>
    </div>
  );

}