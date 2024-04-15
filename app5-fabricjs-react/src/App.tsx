import React from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "./styles.css";
import { onDrawLine } from "./fabric-extensions/drawLine";
import { onGroup, ungroup } from "./fabric-extensions/group";
import { deleteSelection } from "./fabric-extensions/delete";
import { setupSnapGrid } from "./fabric-extensions/snapGrid";
import {
  addCustomSvgWithParemter,
  updateCustomSvgWithParemter
} from "./fabric-extensions/dynamicSvg";

export default function App() {
  const { editor, onReady } = useFabricJSEditor();
  const canvas = editor?.canvas;

  const onAddRectangle = () => {
    editor.addRectangle();
  };

  const onCanvasReady = (canvas: fabric.Canvas) => {
    onReady(canvas);
    setupSnapGrid(canvas);
  };

  return (
    <div className="App">
      <h1>FabricJS React Sample</h1>
      <button onClick={onDrawLine.bind(null, canvas)}>Draw line</button>
      <button onClick={onAddRectangle.bind(null, canvas)}>Add Rectangle</button>
      <button onClick={onGroup.bind(null, canvas)}>Group</button>
      <button onClick={ungroup.bind(null, canvas)}>Un-group</button>
      <button onClick={deleteSelection.bind(null, canvas)}>Delete</button>
      <button
        onClick={addCustomSvgWithParemter.bind(null, canvas, "initial", {
          scale: 0.2
        })}
      >
        Add custom svg
      </button>
      <button onClick={updateCustomSvgWithParemter.bind(null, canvas)}>
        Update custom SVG paramter
      </button>
      <button onClick={() => canvas.setZoom(canvas.getZoom() + 0.1)}>
        Zoom in
      </button>
      <button onClick={() => canvas.setZoom(canvas.getZoom() - 0.1)}>
        Zoom out
      </button>
      <FabricJSCanvas className="sample-canvas" onReady={onCanvasReady} />
    </div>
  );
}
