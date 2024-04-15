import { objects } from "./objectManager";

export const deleteSelection = (canvas: fabric.Canvas) => {
  var activeObject = canvas.getActiveObject();

  const objs = activeObject.getObjects
    ? activeObject.getObjects()
    : [activeObject];
  for (var i = 0; i < objs.length; i++) {
    objects.delete(objs[i]);
    canvas.remove(objs[i]);
  }

  canvas.discardActiveObject();
};
