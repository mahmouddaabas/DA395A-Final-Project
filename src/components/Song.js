import React from 'react'

export default function Song(props) {
    console.log(props)
  return (
    <div>
        <li className='list-group-item'>
            {props.songData.result.artist_names}
            {props.songData.result.full_title}
            <img src={props.songData.result.header_image_url} alt=''></img>
        </li>
    </div>
  )
}
