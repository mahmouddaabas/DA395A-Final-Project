
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage";
import SongInformation from './components/SongInformation';
import Navbar from './components/Navbar';
import SaveArtistPage from './components/SavedSongPage';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/information/:songTitle' element={<SongInformation/>} />
        <Route path='/saved' element={<SaveArtistPage />} />
      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
