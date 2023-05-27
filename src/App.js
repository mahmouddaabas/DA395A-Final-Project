
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage"
import SearchPage from "./components/SearchPage";
import SongInformation from './components/SongInformation';

function App() {
  return (
    <div className="App">
      <h1>Final Project</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/information/:songTitle' element={<SongInformation/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
