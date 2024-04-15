import { fabric } from "fabric";
import { buildSvg } from "./svgs";

export const makeCustomObj = async () => {
  let text = "initial";
  const initalObj = await new Promise<fabric.Object | fabric.Group>(
    (resolve, reject) => {
      fabric.loadSVGFromString(buildSvg(text), (result, options) => {
        const obj = fabric.util.groupSVGElements(result, options);
        obj.scale(0.2);
        resolve(obj);
      });
    }
  );
  const objContainer = {
    obj: initalObj
  };

  return {
    objContainer,
    setText: async (text: string) => {
      objContainer.obj = await new Promise((resolve, reject) => {
        fabric.loadSVGFromString(buildSvg(text), (result, options) => {
          const obj = fabric.util.groupSVGElements(result, options);
          obj.scale(0.2);
          resolve(obj);
        });
      });
    }
  };
};
