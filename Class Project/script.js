// Basic function declaration
function add(a, b) {
    return a + b
}
console.log(add(2, 3));
// Function Anonymous
var sub = function (a, b) {
    return a - b;
}
console.log(sub(5, 2));

//ECMA Script ES6
// Arrow function
var multi = (a, b) => {
    return a * b;
}
console.log(multi(2, 4));

var div = (a, b) => a / b;
console.log(div(10, 2));

var sum = a => a + 10;
console.log(sum(5));

//for loop
for (let i = 2; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//while loop
let j = 2
while (j <= 20) {
    console.log(j)
    j += 2;
}

//array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'car', 'bike'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//array methods
arr.push(10);
console.log(arr);
arr.unshift(-2);
console.log(arr);
arr.unshift(100);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

//higher order function
function a(arg, a, c) {
    console.log("sbbiu", a);
    arg(c);
}
function b(x) {
    console.log("Hello from function b", x);
}

a(b, 10, 20);

//closure
function multiply(factor) {
    return function (x) {
        return x * factor;
    }
}

const res = multiply(2);
console.log(res(5));

//forEach
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];
arr1.forEach((element) => {
    newArr.push(element * 2);

})
console.log(newArr);

const re = arr1.map((element) => element * 3);
console.log(re);