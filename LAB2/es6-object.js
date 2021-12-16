let cars = { 
    brand: "Toyota", 
    color: "red", 
    year: 2010,
    fullName: function(){
        return `${this.brand} : ${this.year}`;
    },
    fullNameA: () => {
        return `${cars.brand} : ${cars.year}`;
    }
};

cars.color = "blue";
console.log(cars.color);

const x = cars; //cars & x is object ค่าของ x และ cars ก็จะเปลี่ยนตามไปด้วย
x.year = 2020;
console.log(cars.year); //console.log(x.years);

console.log(cars.fullNameA());

//Destructuring****ดึงค่าเอาออกมาใช้งาน****
const number = [10,20,30];
const [a,b] = number;
console.log(b);

const {brand, color, year:y/*ย่อตัว year ใหเป็น y*/ , fullNameA} = cars;
console.log(y);
console.log(fullNameA());