import './styles/App.css';
import Full from './components/Full';
import Video from './assets/5SecondsIntro.mp4'

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted
      style={{
        position: 'absolute',
        width: '-100%',
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
      <Full />
    </div>
  );
}

export default App;
