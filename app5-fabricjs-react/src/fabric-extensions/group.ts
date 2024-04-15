export const onGroup = (canvas: fabric.Canvas) => {
  var activeObj = canvas.getActiveObject();
  var activegroup = activeObj.toGroup();
  var objectsInGroup = activegroup.getObjects();
  activegroup.clone(function (newgroup) {
    canvas.remove(activegroup);
    objectsInGroup.forEach(function (object) {
      canvas.remove(object);
    });
    newgroup.lockScalingX = true;
    newgroup.lockScalingY = true;
    newgroup.snapAngle = 45;
    canvas.add(newgroup);
  });
};

export const ungroup = (canvas: fabric.Canvas) => {
  var activeObject = canvas.getActiveObject();
  if (activeObject.type == "group") {
    var items = activeObject._objects;
    activeObject._restoreObjectsState();
    canvas.remove(activeObject);
    for (var i = 0; i < items.length; i++) {
      canvas.add(items[i]);
    }

    canvas.requestRenderAll();
  }
};
