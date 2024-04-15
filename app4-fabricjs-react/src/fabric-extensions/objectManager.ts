const objectStore = () => {
  let svgObjects: fabric.Object[] = [];

  return {
    add: (obj) => svgObjects.push,
    delete: (obj) => (svgObjects = svgObjects.filter((o) => o !== obj)),
    clear: () => (svgObjects = []),
    get: () => [...svgObjects]
  };
};

export const objects = objectStore();
