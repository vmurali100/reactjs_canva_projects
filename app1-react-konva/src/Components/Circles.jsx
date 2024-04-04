import React from 'react';
import { Stage, Layer, Circle } from 'react-konva';

function Circles() {
  return (
    <Stage width={window.innerWidth} height={300}>
      <Layer>
        <Circle
          x={100}
          y={100}
          radius={50}
          fill="blue"
        />
        <Circle
          x={250}
          y={150}
          radius={80}
          fill="orange"
        />
      </Layer>
    </Stage>
  );
}

export default Circles;
