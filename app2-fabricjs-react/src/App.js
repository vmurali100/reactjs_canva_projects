import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';

const App = () => {
  const canvasRef = useRef(null);
  const { canvas } = useFabricJSEditor(canvasRef.current); // Get canvas instance outside useEffect

  useEffect(() => {
   if(canvas){
     // Create rectangles using the canvas object
     const rect1 = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 50,
      fill: 'red',
    });

    const rect2 = new fabric.Rect({
      left: 300,
      top: 100,
      width: 100,
      height: 50,
      fill: 'blue',
    });

    // Create connecting line
    const line = new fabric.Line([rect1.left + rect1.width / 2, rect1.top + rect1.height], [rect2.left + rect2.width / 2, rect2.top + rect2.height], {
      stroke: 'black',
      strokeWidth: 2,
    });

    // Add objects to canvas
    canvas.add(rect1, rect2, line);
   }
  }, [canvas]); // Include canvas as a dependency

  return <FabricJSCanvas ref={canvasRef} width={600} height={400} />;
};

export default App;
