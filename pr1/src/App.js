import React from 'react'
import './styles/App.css';
import Full from './components/Full';
import Video from './assets/1.mp4';

function App() {
 


  return (
    <div className="App">
      <video autoPlay loop muted
      className='z bgz'
      id='myvid'
      style={{
        position: 'absolute',
        width: '-1000%',
        top:'0%',
        margin:'auto',
        bottom:'0%',
        height:'-100%',
        objectFit:'cover',
        transform:'translate(-50%, -50%),',
        zIndex: '-1', 
        position:'fixed'
      }}
      className='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <Full id="bar" />
    </div>
  );
}

export default App;
