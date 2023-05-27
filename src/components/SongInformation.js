import React from 'react'
import { useLocation } from 'react-router-dom';

export default function SongInformation() {

//Use location to get the song data from the Link element in the Song component.
const location = useLocation();
console.log(location.state.songDataResults)

  return (
    <div>SongInformation</div>
  )
}
