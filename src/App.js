import './App.css';
import React, { useEffect, useState } from 'react'
import getGifs from './services/getGifs';
import { Gif } from './components/Gif';




const apiKEY = 'DqrVmz0le6WToYStFbcZHDk2RJl86gCg';

function App() {

  const [gifs, setGifs] = useState([]);

  useEffect(() => {

    getGifs(apiKEY, 'pikachu').then(gifs => setGifs(gifs));
  }, [])





  return (
    <div className="App">
      {
        gifs.map(gif => (
          <Gif 
            title={gif.title}
            url={gif.url}
            key={gif.id}
          />
        )
        )
      }
    </div>
  );
}

export default App;
