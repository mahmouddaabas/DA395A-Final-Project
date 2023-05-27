import React from 'react'
import Song from './Song'

export default function SongList(props) {

    //Get the songs from the props.
    const songs = props.data.response.hits;

    return (
        <div>
            <ul id="song-list">
                {songs.map(song => <Song key={song.id} songData={song} />)}
            </ul>
        </div>
    )
}
