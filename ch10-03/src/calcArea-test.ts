import { calcArea } from "./calcArea";
import { ICircle, IRectangle, ISquare } from "./IShanpe";

const sqaure: ISquare = { tag: "sqaure", size: 10 };
const rectangle: IRectangle = { tag: "rectangle", width: 4, height: 5 };
const circle: ICircle = { tag: "circle", radius: 10 };

console.log(calcArea(sqaure), calcArea(rectangle), calcArea(circle));
