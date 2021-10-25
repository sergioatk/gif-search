import './App.css';
import React, { useEffect, useState } from 'react'
import getGifs from './services/getGifs';




const apiKEY = 'DqrVmz0le6WToYStFbcZHDk2RJl86gCg';

function App() {

  const [gifs, setGifs] = useState([]);

  useEffect(() => {

    getGifs(apiKEY, 'daft punk').then(gifs => setGifs(gifs));
  }, [])





  return (
    <div className="App">
      {
        gifs.map(gif => (
          <section key="gif.url">
            <img
              src={gif.url}
              alt={''}
            ></img>
            <p>{gif.title}</p>
          </section>
        )
        )
      }
    </div>
  );
}

export default App;
