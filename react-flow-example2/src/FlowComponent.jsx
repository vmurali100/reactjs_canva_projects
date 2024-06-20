import React, { useRef, useState, useLayoutEffect } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 400, y: 100 },
  },
];

const FlowComponent = () => {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState(initialNodes);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setSize({ width: clientWidth, height: clientHeight });

      const handleMouseMove = (event) => {
        const rect = containerRef.current.getBoundingClientRect();
        setCoordinates({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      };

      containerRef.current.addEventListener('mousemove', handleMouseMove);

      return () => {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px', background: 'rgba(255, 255, 255, 0.7)', zIndex: 10 }}>
        X: {coordinates.x}, Y: {coordinates.y}
      </div>
      {nodes.length > 0 && (
        <ReactFlow nodes={nodes} onNodesChange={setNodes}>
          {/* You can also manage edges if necessary */}
          <Background />
          <Controls />
        </ReactFlow>
      )}
      <div>
        Canvas size: {size.width} x {size.height}
      </div>
    </div>
  );
};

export default FlowComponent;
