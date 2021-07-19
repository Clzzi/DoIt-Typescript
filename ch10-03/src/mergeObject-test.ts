import { mergeobjects } from "./mergeObjects";

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeobjects(
  { name: "Jack" },
  { age: 23 }
);
console.log(nameAndAge);
