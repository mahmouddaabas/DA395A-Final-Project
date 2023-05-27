import React from 'react'
import Song from './Song'

export default function SongList(props) {

    //Get the songs from the props.
    const songs = props.data.response.hits;

    return (
        <div>
            <ul id="song-list">
                {songs.map((song, index) => <Song key={index} songData={song} />)}
            </ul>
        </div>
    )
}
