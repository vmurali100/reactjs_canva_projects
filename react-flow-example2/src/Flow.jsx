// src/Flow.js

import React, { useState, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import useHelperLines from './useHelperLines';

const initialNodes = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Node A' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Node B' }, position: { x: 400, y: 100 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [helperLines, snapNode] = useHelperLines(nodes, setNodes);

  const onNodeDragStop = useCallback((_, node) => {
    snapNode(node);
  }, [snapNode]);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDragStop={onNodeDragStop}
      />
      {helperLines.map((line, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            background: 'rgba(0, 0, 255, 0.5)',
            ...(line.x
              ? { left: line.x, top: line.y1, height: line.y2 - line.y1, width: 1 }
              : { top: line.y, left: line.x1, width: line.x2 - line.x1, height: 1 }),
          }}
        />
      ))}
    </div>
  );
};

export default Flow;
