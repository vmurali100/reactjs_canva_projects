import { fabric } from "fabric";
import { grid } from "./constants";

export const defaultLineOptions = {
  stroke: "black",
  hasControls: true,
  hasBorders: false,
  // lockMovementX: true,
  // lockMovementY: true,
  hoverCursor: "default",
  selectable: true,
  padding: 10,
  lockSkewingX: true,
  lockSkewingY: true,
  snapAngle: 45,
  snapThreshold: 45
};

export const onDrawLine = (canvas: fabric.Canvas) => {
  var line = null;
  let points;

  function addListener() {
    // eslint-disable-next-line no-use-before-define
    canvas.on("mouse:down", onMouseDown);
    // canvas.on("mouse:dblclick", onDblClick);
    // eslint-disable-next-line no-use-before-define
    canvas.on("mouse:move", onMouseMove);
  }

  function removeListener() {
    canvas.off("mouse:down", onMouseDown);
    // canvas.off("mouse:dblclick", onDblClick);
    canvas.off("mouse:move", onMouseMove);
  }

  // enable/disable click/drag selection box
  function setSelectable(value) {
    canvas.forEachObject(function (object) {
      object.selectable = value;
      object.setCoords();
    });
    canvas.selection = value;
  }

  function onMouseDown(options) {
    var pointer = canvas.getPointer(options.e);
    points = [pointer.x, pointer.y, pointer.x, pointer.y];
    if (line) {
      // make sure we can only make the line longer/shorter
      // console.log(line.x1, line.y1, line.x2, line.y2);
      if (line.x1 !== line.x2) {
        line.lockScalingY = true;
      } else {
        line.lockScalingX = true;
      }
      // now end the draw mode
      line.setCoords();
      line = null;
      removeListener();
      // re-enable click/drag selection
      setSelectable(true);
    } else {
      // start 'draw mode'
      line = new fabric.Line(points, defaultLineOptions);
      canvas.add(line);
    }
  }

  function onMouseMove(o) {
    if (line == null) return;
    var pointer = canvas.getPointer(o.e);

    var startX = points[0];
    var startY = points[1];
    var x2 = pointer.x - startX;
    var y2 = pointer.y - startY;

    // snap line length to grid size
    x2 = Math.round(x2 / grid) * grid;
    y2 = Math.round(y2 / grid) * grid;

    var r = Math.sqrt(x2 * x2 + y2 * y2);
    var angle = (Math.atan2(y2, x2) / Math.PI) * 180;

    angle = (angle % 360) + 180;

    if (angle <= 22.5 || angle >= 337.5) {
      angle = 0;
    } else if (angle <= 67.5) {
      angle = 45;
    } else if (angle <= 112.5) {
      angle = 90;
    } else if (angle <= 157.5) {
      angle = 135;
    } else if (angle <= 202.5) {
      angle = 180;
    } else if (angle <= 247.5) {
      angle = 225;
    } else if (angle <= 292.5) {
      angle = 270;
    } else if (angle < 337.5) {
      angle = 315;
    }
    angle -= 180;

    var cosx = r * Math.cos((angle * Math.PI) / 180);
    var sinx = r * Math.sin((angle * Math.PI) / 180);

    line.set({
      x2: cosx + startX,
      y2: sinx + startY
    });
    canvas.requestRenderAll();
  }

  addListener();
  setSelectable(false);
};
