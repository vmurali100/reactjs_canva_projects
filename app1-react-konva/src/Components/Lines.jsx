import React from 'react';
import { Stage, Layer, Line, Rect, RegularPolygon } from 'react-konva';

function Lines() {
  return (
    <>
     <Stage width={window.innerWidth} height={200}>
      <Layer>
        <Line
          points={[20, 20, 220, 20, 220, 100]}
          stroke="black"
          strokeWidth={2}
        />
        <Line
          points={[50, 50, 150, 50, 150, 200]}
          stroke="red"
          strokeWidth={5}
        />
      </Layer>
    </Stage>
    <RegularPolygon x={400} y={400} sides={6} radius={50} fill="orange" />

    </>
   
  );
}

export default Lines;
