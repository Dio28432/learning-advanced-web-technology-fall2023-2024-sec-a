function greet(name){
    console.log(`Hello,${name}!`);
}
greet("Alice");

function sum(a,b){
    return a + b;
}
let result = sum(1,2);
console.log(result);

greet = name => console.log(`Hello, ${name}!`);
greet("Bob");

const greet = function(name){
    console.log(`Hello,${name}!`);
};
greet("Alice");

function operateOnNumbers(a, b, operation){
    return operation(a,b);
}

function add(x,y){
    return x + y;
}
function multiply(x,y){
    return x * y;
}

let resultAddition = operateOnnumbers(5,3,add);
let resultMultiplication = operateOnNumbers(5, 3, multiply);