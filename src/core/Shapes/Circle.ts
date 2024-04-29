import { ShapeType } from "..";
import { Point } from "../math";
import { Shape } from "./Shape";

export class Circle extends Shape {
  public x: number;
  public y: number;
  public offsetX: number;
  public offsetY: number;
  public radius: number;
  public readonly type = ShapeType.Circle;

  constructor(x = 0, y = 0, radius = 0) {
    super();
    this.offsetX = x;
    this.offsetY = y;

    this.x = 0;
    this.y = 0;
    this.radius = radius;
  }

  public setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public contains(p: Point): boolean {
    const { translate } = this.globalTransform;
    const _x = this.x + this.offsetX + translate.x;
    const _y = this.y + this.offsetY + translate.y;
    if (
      (p.x - _x) * (p.x - _x) + (p.y - _y) * (p.y - _y) <
      this.radius * this.radius
    ) {
      return true;
    } else {
      return false;
    }
  }
}
