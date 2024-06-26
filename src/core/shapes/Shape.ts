import { ShapeType } from "../enums";
import { Point } from "../math/Point";
import { GlobalTransform } from "../types";

export abstract class Shape {
  public globalTransform: GlobalTransform
  public type: ShapeType; // shape 的类型
  public name: string; // shape 的name
  constructor() {}
  public abstract contains(point: Point): boolean;
  public abstract setPosition(x: number, y: number): void 
  public transformPoint(p: Point) {
    const { translate, scale } = this.globalTransform;
    p = p.clone()
    p.x = p.x - translate.x 
    p.y = p.y - translate.y
    p.x = p.x / scale
    p.y = p.y / scale
    return p
  }
}
