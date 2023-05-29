import React from 'react'

export default function SavedArtistItem(props) {
  return (
    <div>
        <li className='list-group-item'>
        <img src={props.songData.songImage}></img>
          {props.songData.songName}
        </li>
    </div>
  )
}
