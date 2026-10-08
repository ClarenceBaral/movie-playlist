import './style.css';
import avengers from './assets/avengers.png';
import spiderman from './assets/spiderman.png';
import avatar from './assets/avatar.png';
function App() {

  return (

<div>
  <nav> 
    <h1>NETFLUX</h1>
    <a href="#">Home</a>
    <a href="#">Movies</a>
    <a href="#">My playlist</a>
  </nav>

  <div className="Banner"> 
    <h2>Movie Night</h2>
    <p>Watch your favorite netflux here!</p>
    <button>Play</button>
  </div>

  <section>
    <h2>My fav list</h2>

    <div className="Movies">
      <img src={avengers} alt="Avengers" />
      <img src={spiderman} alt="Spiderman" />
      <img src={avatar} alt="Avatar" />
    </div>
  </section>

</div>

  )
}

export default App;

