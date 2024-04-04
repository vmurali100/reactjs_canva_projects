import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

function Rectangles() {
  return (
    <Stage width={window.innerWidth} height={200}>
      <Layer>
        <Rect
          x={20}
          y={20}
          width={100}
          height={50}
          fill="red"
        />
        <Rect
          x={150}
          y={100}
          width={120}
          height={80}
          fill="green"
        />
      </Layer>
    </Stage>
  );
}

export default Rectangles;
