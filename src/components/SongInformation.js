import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './styles/SongInformation.css';


export default function SongInformation() {
//State to set and save data from the API Call
const [songData, setSongData] = useState([]);

//Use location to get the song data from the Link element in the Song component.
const location = useLocation();
const data = location.state.songDataResults;

  //Use effect to only call the API once.
  useEffect(() => {
    const fetchData = () => {
      /*axios
        .get(`https://api.genius.com${data.api_path}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
        .then(response => {
          setSongData(response.data.response.song);
        })
        .catch(error => {
          console.error(error);
        });
        console.log(songData)*/

        //Dummy data to prevent spamming the api.
        const dummyData = require("../dummyData");
        setSongData(dummyData.getSpecificSongInformation());
        console.log(dummyData.getSpecificSongInformation())
    };

    fetchData();
  }, []);

  function renderDescription() {
    const extractText = (children) => {
      if (typeof children === 'string') {
        return children;
      } else if (Array.isArray(children)) {
        return children.map((child, index) => extractText(child));
      } else if (children && children.children) {
        return extractText(children.children);
      }
      return '';
    };
  
    if(songData.description?.dom.children[0].children[0] == '?'){
      return <div>No description found for this song.</div>
    }
    else {
      return songData.description?.dom.children.map((element, index) => (
        <div className =" information-text" key={index}>{extractText(element)} <br/></div>
      ));
    }
  }

  return (
    <div className ="song-information">
        <h1>Reading about: {data.title} by {data.artist_names}</h1>
        {renderDescription()}
        < iframe  className ="song-player"   width="400" height="200" src={songData.apple_music_player_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
