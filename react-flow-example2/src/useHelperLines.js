// src/hooks/useHelperLines.js

import { useCallback, useEffect, useState } from 'react';

const useHelperLines = (nodes, setNodes) => {
  const [helperLines, setHelperLines] = useState([]);

  const snapNode = useCallback(
    (node) => {
      const snapThreshold = 15;
      const snappedPosition = { x: node.position.x, y: node.position.y };
      
      nodes.forEach((n) => {
        if (n.id !== node.id) {
          if (Math.abs(n.position.x - node.position.x) < snapThreshold) {
            snappedPosition.x = n.position.x;
          }
          if (Math.abs(n.position.y - node.position.y) < snapThreshold) {
            snappedPosition.y = n.position.y;
          }
        }
      });

      setNodes((nds) =>
        nds.map((n) =>
          n.id === node.id ? { ...n, position: snappedPosition } : n
        )
      );

      const lines = [];
      nodes.forEach((n) => {
        if (n.id !== node.id) {
          if (Math.abs(n.position.x - node.position.x) < snapThreshold) {
            lines.push({ x: n.position.x, y1: n.position.y, y2: node.position.y });
          }
          if (Math.abs(n.position.y - node.position.y) < snapThreshold) {
            lines.push({ y: n.position.y, x1: n.position.x, x2: node.position.x });
          }
        }
      });

      setHelperLines(lines);
    },
    [nodes, setNodes]
  );

  return [helperLines, snapNode];
};

export default useHelperLines;
