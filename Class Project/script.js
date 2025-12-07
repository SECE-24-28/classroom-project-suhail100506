// // Basic function declaration
// function add(a, b) {
//     return a + b
// }
// console.log(add(2, 3));
// // Function Anonymous
// var sub = function (a, b) {
//     return a - b;
// }
// console.log(sub(5, 2));

// //ECMA Script ES6
// // Arrow function
// var multi = (a, b) => {
//     return a * b;
// }
// console.log(multi(2, 4));

// var div = (a, b) => a / b;
// console.log(div(10, 2));

// var sum = a => a + 10;
// console.log(sum(5));

//---------------------------------------------
// //for loop
// for (let i = 2; i < 21; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//---------------------------------------------
// //while loop
// let j = 2
// while (j <= 20) {
//     console.log(j)
//     j += 2;
// }

//---------------------------------------------
// //array

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'car', 'bike'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//---------------------------------------------V

// //array methods
// arr.push(10);
// console.log(arr);
// arr.unshift(-2);
// console.log(arr);
// arr.unshift(100);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

//---------------------------------------------v
// //higher order function
// function a(arg, a, c) {
//     console.log("sbbiu", a);
//     arg(c);
// }
// function b(x) {
//     console.log("Hello from function b", x);
// }

// a(b, 10, 20);

//---------------------------------------------
// //closure
// function multiply(factor) {
//     return function (x) {
//         return x * factor;
//     }
// }

// const res = multiply(2);
// console.log(res(5));

//---------------------------------------------
// //forEach
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = [];
// arr1.forEach((element) => {
//     newArr.push(element * 2);

// })
// console.log(newArr);

//--------------------------------------------

// const re = arr1.map((element) => element * 3);
// console.log(re);
//filter
// const arr20 = [1, 2, 3, 4, 5];
// const r = arr20.filter((element) => {
//     return element % 2 === 0;
// })

//---------------------------------------------
// console.log(r);
// students = [
//     { name: "Alice", grade: 9 },
//     { name: "Bob", grade: 7 },
//     { name: "Charlie", grade: 10 }
// ];
// const res = students.filter((student) => student.grade > 8);
// const names = res.map((student) => student.name);
// console.log(`${names.join(", ")}`);

//---------------------------------------------
// const firstName = "John";
// const lastName = "Doe";

// const fullName = "Fullname: " + firstName + " " + lastName;
// // template literals / string interpolation
// const fullName = `Fullname: ${firstName} ${lastName}`;
// console.log(fullName);

//---------------------------------------------
// Accessing DOM
// const heading = document.getElementById("lk");
// console.log(heading);
// heading.style.color = "red";

//---------------------------------------------
// //hoisting - moving declaration to the top
// console.log(hoistVar);
// var hoistVar = "This variable is hoisted";

//---------------------------------------------
// const arr = [1, 2, 3, 4, 5];
// const [a, ...c] = arr;
// console.log(c);

//---------------------------------------------
// const obj = {
//     name: "Suhail",
//     age: 18,
//     city: "Mumbai",
//     weight: 70
// }
// //
// const {
//     name,
//     age = 17,// default value
//     weight: w //alias name
// } = obj;
// console.log(obj);

//---------------------------------------------

// const obj = {
//     name: "Suhail",
//     age: 18,
//     city: "Mumbai",
//     weight: 70
// }
// //
// const {
//     name,
//     age,
//     ...rest
// } = obj;
// console.log(obj);

//---------------------------------------------
// //modules
// import print, { add, num } from './math.js';

// console.log(add(2, 3));
// console.log(num);

// const name = "Suhail";
// const age = 18;

// const obj = { name, age };

// console.log(obj);//output: {name: "Suhail", age: 18}

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(100)
//     }, 1000);
// });
// console.log('START');
// setTimeout(() => {
//     console.log('INSIDE');
// }, 0);
// console.log('END')


// let a = 9;
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (a % 2 === 0) {
//             resolve('Even Number');
//         } else {
//             reject('Odd Number');
//         }
//     }, 3000)
// });
// p1.then((result) => {
//     console.log('result', result);
// }).catch((error) => {
//     console.log('Caught', error);
// });

// let b = 9
// const checkLessThan10 = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a < 10) {
//                 resolve(' and Less than 10');
//             } else {
//                 reject('Greater than or equal to 10');
//             }
//         }, 2000);
//     });
// }
//what are the two object deconstruring
//rest

// checkLessThan10().then((result) => {
//     console.log('result', result);
// }).catch((error) => {
//     console.log('Caught', error);
// });
// const checkEven = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a % 2 === 0) {
//                 resolve('Even Number');
//             } else {
//                 reject('Odd Number');
//             }
//         }, 3000);
//     });
// }
//two arguments of settimeout are function and time in milliseconds and 


// checkEven(b).then((result) => {
//     console.log('result', result);
//     return checkLessThan10(b);
// }).catch((error) => {
//     console.log('Caught', error);
//     return checkLessThan10(b);
// }).then((result) => {
//     console.log('result', result);
// }).catch((error) => {
//     console.log('ERROR', error);
// });

//async await
// const checkConditions = async () => {
//     let a = 12;
//     console.log('Starting...');
//     try {
//         const res = await checkEven(a);
//         console.log('Result:', res);
//         const res2 = await checkLessThan10(a);
//         console.log('Result 2:', res2);
//         console.log('Finished');
//     } catch (error) {
//         console.log('Caught', error);
//     }
//     finally {
//         console.log('Finihed');
//     }
// }
// checkConditions();

//----------------------------------------------
// Fetch API
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => {
//         console.log(res);
//         return res.json();
//     }).then(json => {
//         console.log(json);
//     }).catch((err) => {
//         console.log('Error', err);
//     });

const fetchData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json = await res.json();
        console.log(json);
        document.getElementById('lk').innerHTML = `
            <div><strong>Name:</strong> ${json.name}</div>
            <div><strong>Email:</strong> ${json.email}</div>
            <div><strong>Phone:</strong> ${json.phone}</div>
            <div><strong>Website:</strong> ${json.website}</div>
            <div><strong>Company:</strong> ${json.company.name}</div>
            <div><strong>address:</strong> ${json.address.street}, ${json.address.city}, ${json.address.zipcode}</div>
        `;
    } catch (err) {
        console.log('Error', err);
    }
}
fetchData();



