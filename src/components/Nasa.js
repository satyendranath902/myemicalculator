import React, { useState } from 'react';

const Nasa = () =>  {
  const [data, setData] = useState(null);

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    xhr.onload = function() {
      if (xhr.status === 200) {        
        setData(JSON.parse(xhr.responseText));        
        console.log(xhr.response);
      } else {
        console.error('Error fetching data:', xhr.response.statusText);
      }
    };
    xhr.send();
  }

  return (
    <div>
      <button onClick={handleClick}>Nasa Today</button>
      {data ? <div>{data.copyright} <img className='photo' src={data.hdurl} alt="app-logo" /></div> : <div>Loading..</div>}     
      {data ? <div>{data.explanation}</div> : <div></div>}            
    </div>

  );
}

export default Nasa;