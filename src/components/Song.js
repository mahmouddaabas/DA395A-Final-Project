import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../components/styles/Song.css";
import PlusIcon from '@mui/icons-material/Add';


export default function Song(props) {

  //Get the song data from the props and store in local variables.
  const songData = props.songData;
  const songDataResults = songData.result;

  //Saves the a song and its image to the local storage.
  function addSongToStorage(event){
    const songName = event.target.closest('.list-group-item').textContent;
    const songImage = event.target.closest('.list-group-item').querySelector("img").src;
    const songToSave = {
      songName,
      songImage
    }
    let savedSongArray = JSON.parse(localStorage.getItem("savedSongs"));
    if(savedSongArray == null){
        savedSongArray = [];
        savedSongArray.push(songToSave);
        localStorage.setItem("savedSongs", JSON.stringify(savedSongArray))
    }
    else {
      savedSongArray.push(songToSave);
      localStorage.setItem("savedSongs", JSON.stringify(savedSongArray))
    }
    console.log(localStorage.getItem("savedSongs"))
  }

  return (
    <div id='list-item'>
      <li className='list-group-item'>
        {
          //Create a clickable arrow to the right every song that links to the SongInformation component (Path: /information).
          //The song title can also be clicked, it will have the same effect as the arrow.
          //The song title will also be set in the url (/information/titleHere).
          //Sends the song data to the component, it can be retrieved by using location in SongInformation.
        }
        <Link className='' to={`/information/${songData.result.title}`} state={{ songDataResults }}>
        <img src={songData.result.song_art_image_thumbnail_url} alt='song-img'></img>
        {songData.result.full_title}
        <KeyboardArrowRightIcon style={{ color: 'blue' }} />
        </Link>
        <PlusIcon id="save-song" onClick={addSongToStorage} style={{color: 'green'}}/>
      </li>
    </div>
  )
}
