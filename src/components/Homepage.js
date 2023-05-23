import React, { useState, useRef } from 'react'
import './styles/Homepage.css';


export default function Homepage(props){
const [searchArtist, setArtist] =useState([]);


  return(
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
  
        <li class="nav-item">
          <a class="nav-link" href="#">Saved Artists</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

<div className="form-container">
<form>
<input type="text" placeholder="Search artist.." />
    <button type="submit">Search</button>
</form>
</div>
</div>

    );
 
}