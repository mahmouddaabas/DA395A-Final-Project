import React from 'react'
import { useLocation } from 'react-router-dom';

export default function SongInformation() {

//Use location to get the song data from the Link element in the Song component.
const location = useLocation();
const data = location.state.songDataResults;
console.log(location.state.songDataResults)

  return (
    <div>
        <h1>Reading about: {data.title} by {data.artist_names}</h1>
    </div>
  )
}
