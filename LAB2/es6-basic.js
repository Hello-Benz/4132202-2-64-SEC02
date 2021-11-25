var name = "";// global varriabel
sname = "vong"; // same declare by var

rname = "Benz";
console.log(rname);

{
    let rname = "John"; // only in scope global var
    console.log(rname);
}
console.log(rname);

{
    const number = 10; // const can't change var nuumber
    // number = 5;
}

//traditional function ES5
function add(a,b){
    let c = a+b ;
    return c
}

const addES5 = function (a,b) {
    return a+b;
}

//ES6
const addES6 = (a,b) => a+b;
const result = addES6(5,8);
console.log(result);

