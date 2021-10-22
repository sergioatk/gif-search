import logo from './logo.svg';
import './App.css';
import { computeHeadingLevel } from '@testing-library/dom';
import React from 'react'


const API_KEY = 'DqrVmz0le6WToYStFbcZHDk2RJl86gCg';

const apiCall = async (key, term) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${term}&limit=10`);

  const json = response.json();
  return json;
}

const GifImage = ({url}) => {
  <img
    src={url}
  ></img>
}




function App() {

  const [gifs, setGifs] = React.useState([]);
  const [search, setSearch] = React.useState('');


  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
      onClick={async () => {
        const res = await apiCall(API_KEY, search)
        const gifArray = res.data;
        setGifs([gifArray]);
        console.log(gifs)
      }}
      >SEARCH</button>
      <h3>{search} gifs.</h3>
      <ul>
      {
        <li>
        gifs && gifs.map(gif => {
          
           return <img src={gif.images.original.url}/>
          
        })
        </li>
      }
      </ul>
    </div>
  );
}

export default App;
