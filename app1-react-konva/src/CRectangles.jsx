import React, { useState, useRef, useEffect } from 'react';

function DraggableRectangles() {
  const [rect1Pos, setRect1Pos] = useState({ x: 100, y: 100 });
  const [rect2Pos, setRect2Pos] = useState({ x: 300, y: 100 });
  const lineRef = useRef(null);

  const handleDragStart = (e, rectPosSetter) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'rect', pos: rectPosSetter }));
  };

  const handleDrop = (e, targetPosSetter) => {
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (data.type === 'rect') {
      targetPosSetter({ x: e.clientX - 50, y: e.clientY - 50 }); // Adjust for rectangle size
    }
    updateLine();
  };

  const updateLine = () => {
    if (lineRef.current) {
      const x1 = rect1Pos.x + 50; // Adjust for half rectangle width
      const y1 = rect1Pos.y + 50; // Adjust for half rectangle height
      const x2 = rect2Pos.x + 50;
      const y2 = rect2Pos.y + 50;
      lineRef.current.setAttribute('x1', x1);
      lineRef.current.setAttribute('y1', y1);
      lineRef.current.setAttribute('x2', x2);
      lineRef.current.setAttribute('y2', y2);
    }
  };

  useEffect(() => {
    updateLine();
  }, [rect1Pos, rect2Pos]);

  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      <svg ref={lineRef}>
        <line stroke="black" strokeWidth="2" />
      </svg>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, setRect1Pos)}
        style={{
          position: 'absolute',
          top: rect1Pos.y,
          left: rect1Pos.x,
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
      />
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, setRect2Pos)}
        onDrop={(e) => handleDrop(e, setRect2Pos)}
        style={{
          position: 'absolute',
          top: rect2Pos.y,
          left: rect2Pos.x,
          width: 100,
          height: 100,
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
}

export default DraggableRectangles;
