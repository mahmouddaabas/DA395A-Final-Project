import React from 'react'
import { Link } from 'react-router-dom';

export default function Song(props) {

  //Get the song data from the props and store in local variables.
  const songData = props.songData;
  const songDataResults = songData.result;

  return (
    <div>
      <li className='list-group-item'>
        {songData.result.full_title}
        {
          //Create a read more button under every song that links to the SongInformation component (Path: /information).
          //The song title will also be set in the url (/information/titleHere).
          //Sends the song data to the component, it can be retrieved by using location in SongInformation.
        }
        <Link className='btn btn-primary' to={`/information/${songData.result.title}`} state={{ songDataResults }}>Read More</Link>
      </li>
    </div>
  )
}
