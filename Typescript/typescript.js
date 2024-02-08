var a = 10;
var b = "Hello";
var c = true;
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
var p = { id: 1, name: "John" };
console.log(p);
var y;
y = 10;
console.log(y);
var z;
z = "Red";
console.log(z);
var data;
data = 'Something';
console.log(data);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Green;
console.log(color);
var employee;
employee = [1, "Steve"];
console.log(employee);
var numbers = [1, 2, 3, 4, 5];
var firstElement = numbers[0];
var arrayLength = numbers.length;
numbers.push(6);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
var doubledNumbers = numbers.map(function (num) { return num * 2; });
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
var sum = numbers.reduce(function (prev, next) { return prev + next; });
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 20));
