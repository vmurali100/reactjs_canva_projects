import { grid } from "./constants";

export const setupSnapGrid = (canvas: fabric.Canvas) => {
  canvas.on("object:moving", function (options) {
    options.target
      .set({
        left: Math.round(options.target.left / grid) * grid,
        top: Math.round(options.target.top / grid) * grid
      })
      .setCoords();
  });
  canvas.on("object:scaling", function (options) {
    var target = options.target;
    var w = target.width * target.scaleX,
      h = target.height * target.scaleY,
      snap = {
        // Closest snapping points
        top: Math.round(target.top / grid) * grid,
        left: Math.round(target.left / grid) * grid,
        bottom: Math.round((target.top + h) / grid) * grid,
        right: Math.round((target.left + w) / grid) * grid
      },
      threshold = grid,
      dist = {
        // Distance from snapping points
        top: Math.abs(snap.top - target.top),
        left: Math.abs(snap.left - target.left),
        bottom: Math.abs(snap.bottom - target.top - h),
        right: Math.abs(snap.right - target.left - w)
      },
      attrs = {
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        top: target.top,
        left: target.left
      };

    switch (target.__corner) {
      case "tl":
        if (dist.left < dist.top && dist.left < threshold) {
          attrs.scaleX = (w - (snap.left - target.left)) / target.width;
          attrs.scaleY = (attrs.scaleX / target.scaleX) * target.scaleY;
          attrs.top = target.top + (h - target.height * attrs.scaleY);
          attrs.left = snap.left;
        } else if (dist.top < threshold) {
          attrs.scaleY = (h - (snap.top - target.top)) / target.height;
          attrs.scaleX = (attrs.scaleY / target.scaleY) * target.scaleX;
          attrs.left = attrs.left + (w - target.width * attrs.scaleX);
          attrs.top = snap.top;
        }
        break;
      case "mt":
        if (dist.top < threshold) {
          attrs.scaleY = (h - (snap.top - target.top)) / target.height;
          attrs.top = snap.top;
        }
        break;
      case "tr":
        if (dist.right < dist.top && dist.right < threshold) {
          attrs.scaleX = (snap.right - target.left) / target.width;
          attrs.scaleY = (attrs.scaleX / target.scaleX) * target.scaleY;
          attrs.top = target.top + (h - target.height * attrs.scaleY);
        } else if (dist.top < threshold) {
          attrs.scaleY = (h - (snap.top - target.top)) / target.height;
          attrs.scaleX = (attrs.scaleY / target.scaleY) * target.scaleX;
          attrs.top = snap.top;
        }
        break;
      case "ml":
        if (dist.left < threshold) {
          attrs.scaleX = (w - (snap.left - target.left)) / target.width;
          attrs.left = snap.left;
        }
        break;
      case "mr":
        if (dist.right < threshold)
          attrs.scaleX = (snap.right - target.left) / target.width;
        break;
      case "bl":
        if (dist.left < dist.bottom && dist.left < threshold) {
          attrs.scaleX = (w - (snap.left - target.left)) / target.width;
          attrs.scaleY = (attrs.scaleX / target.scaleX) * target.scaleY;
          attrs.left = snap.left;
        } else if (dist.bottom < threshold) {
          attrs.scaleY = (snap.bottom - target.top) / target.height;
          attrs.scaleX = (attrs.scaleY / target.scaleY) * target.scaleX;
          attrs.left = attrs.left + (w - target.width * attrs.scaleX);
        }
        break;
      case "mb":
        if (dist.bottom < threshold)
          attrs.scaleY = (snap.bottom - target.top) / target.height;
        break;
      case "br":
        if (dist.right < dist.bottom && dist.right < threshold) {
          attrs.scaleX = (snap.right - target.left) / target.width;
          attrs.scaleY = (attrs.scaleX / target.scaleX) * target.scaleY;
        } else if (dist.bottom < threshold) {
          attrs.scaleY = (snap.bottom - target.top) / target.height;
          attrs.scaleX = (attrs.scaleY / target.scaleY) * target.scaleX;
        }
        break;
    }
    target.set(attrs);
  });
};
