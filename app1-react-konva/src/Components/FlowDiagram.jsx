import React from 'react';
import { Stage, Layer, Rect, Circle, Line, Text, Ellipse, RegularPolygon } from 'react-konva';

const Rectangle = () => {
  return (
    <Rect x={50} y={50} width={100} height={50} fill="lightblue" stroke="black" strokeWidth={1} />
  );
};

const CircleShape = () => {
  return (
    <Circle x={200} y={150} radius={50} fill="lightgreen" stroke="black" strokeWidth={1} />
  );
};

const Diamond = () => {
  return (
    <Line points={[350, 50, 400, 100, 350, 150, 300, 100, 350, 50]} fill="lightyellow" stroke="black" strokeWidth={1} closed />
  );
};

const Triangle = () => {
  return (
    <RegularPolygon x={500} y={150} sides={3} radius={50} fill="lightcoral" stroke="black" strokeWidth={1} />
  );
};

const Arrow = () => {
  return (
    <Line points={[100, 200, 150, 200]} stroke="black" strokeWidth={2} />
  );
};

const Icon = () => {
  return (
    <Text text="⚙️" x={650} y={125} fontSize={30} />
  );
};

const TextLabel = () => {
  return (
    <Text text="Process" x={50} y={125} fontSize={14} />
  );
};

const EllipseShape = () => {
  return (
    <Ellipse x={200} y={300} radiusX={75} radiusY={40} fill="lightpink" stroke="black" strokeWidth={1} />
  );
};

const Pentagon = () => {
  return (
    <RegularPolygon x={400} y={300} sides={5} radius={50} fill="lightblue" stroke="black" strokeWidth={1} />
  );
};

const Hexagon = () => {
  return (
    <RegularPolygon x={600} y={300} sides={6} radius={50} fill="lightgreen" stroke="black" strokeWidth={1} />
  );
};

const Octagon = () => {
  return (
    <RegularPolygon x={800} y={300} sides={8} radius={50} fill="lightyellow" stroke="black" strokeWidth={1} />
  );
};

const Star = () => {
  return (
    <RegularPolygon x={1000} y={300} sides={5} radius={50} fill="lightcoral" stroke="black" strokeWidth={1} rotation={-90} />
  );
};

const CurvedLine = () => {
  return (
    <Line
      points={[100, 450, 150, 475, 200, 425, 250, 450]}
      stroke="black"
      strokeWidth={3}
      tension={0.5} // Adjust this value to change the curve
    />
  );
};

const FlowDiagram = () => {
  return (
    <Stage width={1200} height={500}>
      <Layer>
        <Rectangle />
        <hr />
        <CircleShape />
        <br />
        <Diamond />
        <br />
        <Triangle />
        <Arrow />
        <Icon />
        <TextLabel />
        <EllipseShape />
        <Pentagon />
        <Hexagon />
        <Octagon />
        <Star />
        <CurvedLine />
      </Layer>
    </Stage>
  );
};

export default FlowDiagram;
