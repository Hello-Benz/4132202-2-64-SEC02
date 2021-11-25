let cars = ["Toyota", "Honda", "Mazda"];

let fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";

let rname = new Array("Win", "John", "James");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kobota");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1, 0, "Honda", "Kobota");
console.log(cars);

const carSlie = cars.slice(1,2);
console.log(carSlie);

const newArry = cars.concat(rname);
console.log(newArry);
const newArry2 = [...cars,...rname]; //spred operator
console.log(newArry2);

console.log(newArry.toString());