import { fabric } from "fabric";

const buildSvg = (text: string) => {
  return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
            <g>
            <title>Layer 1</title>
            <rect stroke="#000" id="svg_1" height="584" width="776.00002" y="7" x="8.99999" fill="#fff"/>
            <text transform="matrix(5.07029 0 0 5.07029 -923.956 -748.934)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_2" y="220.58095" x="212.79964" stroke-width="0" fill="#000000">${text}</text>
            <ellipse stroke="#000" ry="39" rx="38" id="svg_3" cy="69" cx="718" stroke-width="0" fill="#000000"/>
            </g>
          </svg>`;
};

let svgObjects: fabric.Object[] = [];

export const addCustomSvgWithParemter = (
  canvas: fabric.Canvas,
  text: string,
  options: any
) => {
  fabric.loadSVGFromString(buildSvg(text), function (result, _options) {
    var obj = fabric.util.groupSVGElements(result, _options);
    // fixed options
    obj.setControlsVisibility({
      mt: false,
      ml: false,
      mr: false,
      mb: false,
      mtr: false
    });
    obj.lockRotation = true;
    obj.lockScalingFlip = true;
    obj.minScaleLimit = 0.1;

    if (options.scale) {
      obj.scale(options.scale);
    }
    obj.setOptions(options);
    svgObjects.push(obj);
    canvas.add(obj);
  });
};

export const updateCustomSvgWithParemter = (canvas: fabric.Canvas) => {
  canvas.discardActiveObject();
  const old = [...svgObjects];
  svgObjects = [];
  for (let i = 0; i < old.length; i++) {
    const obj = old[i];
    // @ts-ignore
    let { updateCount } = obj.customData ?? { updateCount: 0 };
    const { left, top, width, height, scale } = obj;
    canvas.remove(obj);
    addCustomSvgWithParemter(canvas, `update ${++updateCount}`, {
      left,
      top,
      width,
      height,
      scale,
      customData: { updateCount }
    });
  }
};
