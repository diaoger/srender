import { ShapeType } from "../enums";
import { Point } from "../math";
import { Shape } from "./Shape";

export class Rectangle extends Shape {
  public x: number;
  public y: number;
  public offsetX: number
  public offsetY: number
  public width: number;
  public height: number;
  public type = ShapeType.Rectangle;
  constructor(x = 0, y = 0, width = 0, height = 0) {
    super();
    this.offsetX = x
    this.offsetY = y

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
  }

  public setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public contains(p: Point): boolean {
    if (
      p.x > this.x &&
      p.x < this.x + this.width &&
      p.y > this.y &&
      p.y < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
