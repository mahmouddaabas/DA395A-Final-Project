import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../components/styles/Song.css";

export default function Song(props) {

  //Get the song data from the props and store in local variables.
  const songData = props.songData;
  const songDataResults = songData.result;

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
      </li>
    </div>
  )
}
