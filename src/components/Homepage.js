import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import './styles/Homepage.css';


export default function Homepage(props) {
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link" href="#">Saved Artists</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="form-container">
        <input type="text" placeholder="Search artist.." onChange={handleInputChange} ref={searchBarRef}/>
        <Link className='btn btn-primary' to="/search" state={{ searchValue }}>
          Search
        </Link>
      </div>
    </div>
  );

}