import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import headshots from './headshots.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Samantha Wittig</h3>
      </header>
      <Carousel className="Carousel">
        {headshots.map((image) => (
          <div>
            <img alt="headshot" src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
