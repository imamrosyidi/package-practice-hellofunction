import { SayHelloProps } from "./function.type";

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
  console.log("Helle this is my seyHello function");
  console.log(`my first name : ${firstName}`);
  if (lastName) console.log(`my last name : ${lastName}`);
  if (age) console.log(`my age : ${age}`);
}
