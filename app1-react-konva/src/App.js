import logo from './logo.svg';
import './App.css';
import Rectangles from './Rectangles';
import Circles from './Components/Circles';
import Lines from './Components/Lines';
import MyPolygon from './Components/MyPolygon';

function App() {
  return (
    <div className="App">
     <Rectangles/>
     <Circles/>
     <Lines/>
     <MyPolygon/>
    </div>
  );
}

export default App;
