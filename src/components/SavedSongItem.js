import React, { useState, useEffect  } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

export default function SavedSongItem(props) {

  //State to set and save data from the API Call
  const [songDataResults, setSongDataResults] = useState([]);
  const navigate = useNavigate();

  //useEffect hook to navigate after the state has been updated.
  useEffect(() => {
    if (songDataResults.songDataResults && songDataResults.songDataResults.api_path) {
      navigate(`/information/${props.songData.songName}`, { state: songDataResults });
    }
  }, [songDataResults, navigate, props.songData.songName]);

  //Searches for a song by sending a api_path to the song through a state to the SearchInformation component.
  //SeachInformation then performs an api request based on the path and the user is navigated through the useEffect to the page to see the data.
  function searchForSong(event) {
    const songApiPath = event.target.closest('.list-group-item').getAttribute('apipath');
    setSongDataResults({
      songDataResults: {
        api_path: songApiPath
      }
    });
  }

  //Deletes a song from the local storage then from the html list.
  function deleteSongFromStorage(event) {
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
      <li className='list-group-item' apipath={props.songData.songApiPath} onClick={searchForSong}>
        <img src={props.songData.songImage}></img>
        {props.songData.songName}
        <DeleteIcon id="delete-saved-song" onClick={(event) => {
          //Does not execute onClick on parent element.
          event.stopPropagation();
          deleteSongFromStorage(event);
        }} style={{ color: 'red' }} />
      </li>
    </div>
  )
}
