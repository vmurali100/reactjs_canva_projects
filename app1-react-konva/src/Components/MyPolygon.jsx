import React from 'react';
import { Stage, Layer, Shape } from 'react-konva';

function MyPolygon() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(200, 100); // Starting point
            context.lineTo(300, 100); // Line to point 1
            context.lineTo(350, 150); // Line to point 2
            context.lineTo(300, 200); // Line to point 3
            context.lineTo(200, 200); // Line to point 4
            context.closePath(); // Close the path to complete the polygon
            context.fillStrokeShape(shape); // Fill and stroke the polygon
          }}
          fill="red" // Fill color
          stroke="black" // Stroke color
          strokeWidth={4} // Stroke width
        />
      </Layer>
    </Stage>
  );
}

export default MyPolygon;
