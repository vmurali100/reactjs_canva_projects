import { fabric } from "fabric";
import { buildSvg } from "./svgs";

export class CustomObject extends fabric.Object {
  public constructor(_options: any) {
    const options: fabric.IObjectOptions = {
      selectable: true,
      hasControls: true
    };
    super(options);
  }

  public setText(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fabric.loadSVGFromString(buildSvg(text), (result, options) => {
        // const message = this.message;
        // Object.assign(this, fabric.util.groupSVGElements(result, options));
        this.obj = fabric.util.groupSVGElements(result, options);
        this.obj.scale(0.2);
        // this.message = message;
        resolve();
      });
    });
  }

  public render(ctx) {
    this.obj.render(ctx);
  }

  public onSelect(ctx) {
    return this.obj.onSelect(ctx);
  }

  private obj: fabric.Object | fabric.Group;
}
