import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function SavedSongItem(props) {

  //Deletes a song from the local storage then from the html list.
  function deleteSongFromStorage(event){
  //Remove from local stoarge.
  const songName = event.target.closest('.list-group-item').textContent.trim();
  let savedSongArray = JSON.parse(localStorage.getItem("savedSongs"));
  let indexToRemove = savedSongArray.map(item => item.songName.trim()).indexOf(songName);
  savedSongArray.splice(indexToRemove, 1)
  localStorage.setItem("savedSongs", JSON.stringify(savedSongArray))

  //Remove from HTML list.
  const itemToRemove = event.target.closest('.list-group-item').parentNode;
  itemToRemove.remove();
  
}

  return (
    <div id='list-items'>
        <li className='list-group-item'>
        <img src={props.songData.songImage}></img>
          {props.songData.songName}
          <DeleteIcon id="delete-saved-song" onClick={deleteSongFromStorage} style={{color: 'red'}}/>
        </li>
    </div>
  )
}
