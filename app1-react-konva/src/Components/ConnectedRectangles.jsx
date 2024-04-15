import React, { useEffect, useRef } from 'react';

function ConnectedRectangles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Rectangle properties (adjust as needed)
    const rect1 = { x: 50, y: 50, width: 100, height: 75 };
    const rect2 = { x: 200, y: 100, width: 150, height: 50 };

    // Draw rectangles
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
    ctx.fillStyle = 'lightyellow';
    ctx.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);

    // Draw connecting line
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    const lineStartX = rect1.x + rect1.width / 2;
    const lineStartY = rect1.y + rect1.height;
    const lineEndX = rect2.x + rect2.width / 2;
    const lineEndY = rect2.y;
    ctx.moveTo(lineStartX, lineStartY);
    ctx.lineTo(lineEndX, lineEndY);
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width={500} height={300} />;
}

export default ConnectedRectangles;
