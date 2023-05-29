import React from 'react'
import SavedArtistList from './SavedSongList';
import './styles/SavedSongPage.css';

export default function SavedSongPage() {
  return (
    <div>
        <h1>My saved songs</h1>
        <SavedArtistList />
    </div>
  )
}
