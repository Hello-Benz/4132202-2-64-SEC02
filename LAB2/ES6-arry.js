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


//itteration
let text ="";
for(value of rname){
    text += value + ":"
}
console.log(text);

//forEach
const number = [10,20,30];
number.forEach(addNum);

function addNum(value, index, array){
    console.log(value += 2);
}

//.map****ใช้บ่อย*****
const ns = number.map(addNumMap);
console.log(ns);
function addNumMap(value){
    return value * 2
}

//filter****ใช้ในตรวจสอบต่า****
const over10 = number.filter(over10fn);
console.log(over10);
function over10fn(value){
    return value > 10;
}

//reduce****ใช้สะดวกมากกว่า forEach****
const reOver10 = number.reduce(over10fn)
console.log(reOver10);

//every & some***ตรวจสอบค่าทุกตัว และ บางตัว*****
const everOver10 = number.every(over10fn);
console.log(everOver10);
const someOver10 = number.some(over10fn)
console.log(someOver10);

//find & indexOf****
const resFind = number.find(over10fn);
console.log(resFind);
const resFindIndex = number.indexOf(over10fn);
console.log(resFindIndex);

//****สร้าง อาร์เรย์ใช้ในการแยกขอ้ความตัวอักษร เช็คข้อความได้
let alpha = Array.from("Aorkamon123");
console.log(alpha);