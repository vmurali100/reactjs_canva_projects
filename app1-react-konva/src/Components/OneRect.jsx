import React, { useState, useRef } from 'react';
import { Stage, Layer, Rect, Arrow } from 'react-konva';

const OneRect = () => {
  const [selectedRect, setSelectedRect] = useState(null);
  const connectorRefs = useRef([]); // Array to store connector refs

  const handleClick = (e) => {
    // Optional chaining to handle potential non-standard event objects
    e?.stopPropagation();
    setSelectedRect(e.target);
  };

  return (
    <Stage width={500} height={500}>
      <Layer>
        <Rect
          x={100}
          y={100}
          width={100}
          height={100}
          fill="red"
          draggable
          onClick={handleClick}
        />

        {selectedRect && (
          <>
            {/* Define 4 connectors (one on each side) */}
            <Arrow
              ref={connectorRefs.current.push} // Add ref to array
              points={[
                selectedRect.x(),
                selectedRect.y() - 10, // Top connector - adjust Y position
                selectedRect.x() + selectedRect.width() / 2,
                selectedRect.y() - 10,
              ]}
              strokeWidth={2}
              stroke="black"
              headWidth={10}
              headLength={10}
              visible={selectedRect !== null} // Show only when rectangle clicked
            />
            <Arrow
              ref={connectorRefs.current.push}
              points={[
                selectedRect.x() + selectedRect.width() + 10, // Right connector - adjust X position
                selectedRect.y(),
                selectedRect.x() + selectedRect.width() + 10,
                selectedRect.y() + selectedRect.height() / 2,
              ]}
              strokeWidth={2}
              stroke="black"
              headWidth={10}
              headLength={10}
              visible={selectedRect !== null} // Show only when rectangle clicked
            />
            <Arrow
              ref={connectorRefs.current.push}
              points={[
                selectedRect.x(),
                selectedRect.y() + selectedRect.height() + 10, // Bottom connector - adjust Y position
                selectedRect.x() + selectedRect.width() / 2,
                selectedRect.y() + selectedRect.height() + 10,
              ]}
              strokeWidth={2}
              stroke="black"
              headWidth={10}
              headLength={10}
              visible={selectedRect !== null} // Show only when rectangle clicked
            />
            <Arrow
              ref={connectorRefs.current.push}
              points={[
                selectedRect.x() - 10, // Left connector - adjust X position
                selectedRect.y(),
                selectedRect.x() - 10,
                selectedRect.y() + selectedRect.height() / 2,
              ]}
              strokeWidth={2}
              stroke="black"
              headWidth={10}
              headLength={10}
              visible={selectedRect !== null} // Show only when rectangle clicked
            />
          </>
        )}
      </Layer>
    </Stage>
  );
};

export default OneRect;
