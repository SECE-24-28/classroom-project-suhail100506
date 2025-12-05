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

// //for loop
// for (let i = 2; i < 21; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// //while loop
// let j = 2
// while (j <= 20) {
//     console.log(j)
//     j += 2;
// }

// //array

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'car', 'bike'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

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

// //higher order function
// function a(arg, a, c) {
//     console.log("sbbiu", a);
//     arg(c);
// }
// function b(x) {
//     console.log("Hello from function b", x);
// }

// a(b, 10, 20);

// //closure
// function multiply(factor) {
//     return function (x) {
//         return x * factor;
//     }
// }

// const res = multiply(2);
// console.log(res(5));

// //forEach
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = [];
// arr1.forEach((element) => {
//     newArr.push(element * 2);

// })
// console.log(newArr);

// const re = arr1.map((element) => element * 3);
// console.log(re);
//filter
// const arr20 = [1, 2, 3, 4, 5];
// const r = arr20.filter((element) => {
//     return element % 2 === 0;
// })

// console.log(r);
// students = [
//     { name: "Alice", grade: 9 },
//     { name: "Bob", grade: 7 },
//     { name: "Charlie", grade: 10 }
// ];
// const res = students.filter((student) => student.grade > 8);
// const names = res.map((student) => student.name);
// console.log(`${names.join(", ")}`);

// const firstName = "John";
// const lastName = "Doe";

// const fullName = "Fullname: " + firstName + " " + lastName;
// // template literals / string interpolation
// const fullName = `Fullname: ${firstName} ${lastName}`;
// console.log(fullName);

// Accessing DOM
// const heading = document.getElementById("lk");
// console.log(heading);
// heading.style.color = "red";

// const btnelement = document.getElementsByClassName("m");
// btnelement.addEventListener("click", () => {
//     heading.innerHTML = "hovered";
//     heading.style.color = "pink";
// });

// Counter functions
// const incElement = document.getElementById("inc");
// const addElement = document.getElementById("add");
// const subElement = document.getElementById("sub");
// addElement.addEventListener("click", () => {
//     incElement.innerHTML = parseInt(incElement.innerHTML) + 1;

// });
// subElement.addEventListener("click", () => {
//     incElement.innerHTML = parseInt(incElement.innerHTML) - 1;
// });
// const inputEl = document.getElementById("name");
// const submit = document.querySelector("form button");
// const errorEl = document.getElementById("error");
// const passwordEl = document.getElementById("password");
// const passwordErrorEl = document.getElementById("password-error");

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(inputEl.value);
//     if (inputEl.value.length < 3) {
//         errorEl.innerHTML = "Name must have 3 letters";
//     } else {
//         errorEl.innerHTML = "";
//     }
// });
// submit.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(passwordEl.value);
//     if (passwordEl.value == inputEl.value) {
//         passwordErrorEl.innerHTML = "Password and Name cannot be same";
//     } else {
//         passwordErrorEl.innerHTML = "";
//     }
// });

// //hoisting - moving declaration to the top
// console.log(hoistVar);
// var hoistVar = "This variable is hoisted";

const questions = [
    {
        text: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2
    },
    {
        text: "Which method is used to log to the console?",
        options: ["print()", "log()", "console()", "console.log()"],
        correctIndex: 3
    },
    {
        text: "Which of these is NOT a JavaScript data type?",
        options: ["number", "string", "boolean", "character"],
        correctIndex: 3
    }
];

let currentQuestionIndex = 0
let score = 0
let selectedAnswer = null

const questionnumelement = document.getElementById('question-no')
const questionelement = document.getElementById('question')
const optionelement = document.getElementsByClassName('option')
const buttonelement = document.getElementById('btn')
console.log(questionelement)

questionelement.innerHTML = questions[0]["text"]
questionnumelement.innerHTML = `Question ${currentQuestionIndex + 1} of 3`
questions[0].options.forEach((optn, i) => {
    optionelement[i].innerHTML = optn
    optionelement[i].addEventListener('click', () => {
        for (let j = 0; j < optionelement.length; j++) {
            optionelement[j].classList.remove('bg-slate-900')
            optionelement[j].classList.add('bg-slate-600')
        }
        optionelement[i].classList.remove('bg-slate-600')
        optionelement[i].classList.add('bg-slate-900')
        selectedAnswer = i
    })
})


buttonelement.addEventListener('click', (e) => {
    e.preventDefault()

    if (selectedAnswer !== null && selectedAnswer === questions[currentQuestionIndex].correctIndex) {
        score++
    }

    currentQuestionIndex = currentQuestionIndex + 1

    if (currentQuestionIndex >= 3) {
        questionelement.innerHTML = `Quiz Complete!`
        questionnumelement.innerHTML = `Your Score: ${score} out of 3`

        for (let i = 0; i < optionelement.length; i++) {
            optionelement[i].style.display = 'none'
        }

        buttonelement.style.display = 'none'
    } else {
        selectedAnswer = null
        questionelement.innerHTML = questions[currentQuestionIndex]["text"]
        questionnumelement.innerHTML = `Question ${currentQuestionIndex + 1} of 3`
        questions[currentQuestionIndex].options.forEach((optn, i) => {
            optionelement[i].innerHTML = optn
            optionelement[i].classList.remove('bg-slate-900')
            optionelement[i].classList.add('bg-slate-600')
        })
    }

})