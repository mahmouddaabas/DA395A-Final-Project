import React from 'react'
import SavedSongItem from './SavedSongItem'

export default function SavedArtistList() {

    //Get the saved songs in the local storage.
    const savedSongs = JSON.parse(localStorage.getItem("savedSongs"))
    //console.log(savedSongs)

  return (
    <div>
        <ul id="saved-song-list">
            {savedSongs.map((savedSong, index) => <SavedSongItem songData={savedSong} />)}
        </ul>
    </div>
  )
}
