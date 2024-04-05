import logo from './logo.svg';
import './App.css';
import Rectangles from './Rectangles';
import Circles from './Components/Circles';
import Lines from './Components/Lines';
import MyPolygon from './Components/MyPolygon';
import FlowDiagram from './Components/FlowDiagram';

function App() {
  return (
    <div className="App">
     {/* <Rectangles/>
     <Circles/>
     <Lines/>
     <MyPolygon/> */}
     <FlowDiagram/>
    </div>
  );
}

export default App;
