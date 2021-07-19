import { IShape } from "./IShanpe";

export const calcArea = (shape: IShape): number => {
  switch (shape.tag) {
    case "sqaure":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
  }
  return 0;
};
