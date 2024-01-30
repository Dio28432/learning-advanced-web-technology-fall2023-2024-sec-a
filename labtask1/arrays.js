let numbers =[1,2,3,4,5];
let fruits = ['apple','banana','orange'];
let mixedArray = [1,'two',{name: 'Alice'},[7,8,9]];

let firstNumber = number[0];
let secondFruit = fruits[1];
let thirdElement = mixedArray[2];

numbers.push(6);
fruits.pop();
fruits.unshift('pear');
numbers.shift();

numbers.forEach(function(number){
    console.log(number);
})

let doubledNumbers = numbers.map(function(number){
    return number * 2;
});

const numberss = [1,2,3,4,5,6];

const evenNumbers = numbers.filter(function(num){
    return num % 2 == 0;
});
console.log(evenNumbers);