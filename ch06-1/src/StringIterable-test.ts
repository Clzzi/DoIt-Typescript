import { StringIterable } from "./StringIterable";

for (let value of new StringIterable(["hello", "!"])) {
  console.log(value);
}
