

// const btnelement = document.getElementsByClassName("m");
// btnelement.addEventListener("click", () => {
//     heading.innerHTML = "hovered";
//     heading.style.color = "pink";
// });

//Counter functions
const incElement = document.getElementById("inc");
const addElement = document.getElementById("add");
const subElement = document.getElementById("sub");
addElement.addEventListener("click", () => {
    incElement.innerHTML = parseInt(incElement.innerHTML) + 1;
    fetchData();

});
subElement.addEventListener("click", () => {
    incElement.innerHTML = parseInt(incElement.innerHTML) - 1;
    fetchData();
});

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



// const questions = [
//     {
//         text: "Which keyword declares a constant in JavaScript?",
//         options: ["var", "let", "const", "static"],
//         correctIndex: 2
//     },
//     {
//         text: "Which method is used to log to the console?",
//         options: ["print()", "log()", "console()", "console.log()"],
//         correctIndex: 3
//     },
//     {
//         text: "Which of these is NOT a JavaScript data type?",
//         options: ["number", "string", "boolean", "character"],
//         correctIndex: 3
//     }
// ];

// let currentQuestionIndex = 0
// let score = 0
// let selectedAnswer = null

// const questionnumelement = document.getElementById('question-no')
// const questionelement = document.getElementById('question')
// const optionelement = document.getElementsByClassName('option')
// const buttonelement = document.getElementById('btn')
// console.log(questionelement)

// questionelement.innerHTML = questions[0]["text"]
// questionnumelement.innerHTML = `Question ${currentQuestionIndex + 1} of 3`
// questions[0].options.forEach((optn, i) => {
//     optionelement[i].innerHTML = optn
//     optionelement[i].addEventListener('click', () => {
//         for (let j = 0; j < optionelement.length; j++) {
//             optionelement[j].classList.remove('bg-slate-900')
//             optionelement[j].classList.add('bg-slate-600')
//         }
//         optionelement[i].classList.remove('bg-slate-600')
//         optionelement[i].classList.add('bg-slate-900')
//         selectedAnswer = i
//     })
// })


// buttonelement.addEventListener('click', (e) => {
//     e.preventDefault()

//     if (selectedAnswer !== null && selectedAnswer === questions[currentQuestionIndex].correctIndex) {
//         score++
//     }

//     currentQuestionIndex = currentQuestionIndex + 1

//     if (currentQuestionIndex >= 3) {
//         questionelement.innerHTML = `Quiz Complete!`
//         questionnumelement.innerHTML = `Your Score: ${score} out of 3`

//         for (let i = 0; i < optionelement.length; i++) {
//             optionelement[i].style.display = 'none'
//         }

//         buttonelement.style.display = 'none'
//     } else {
//         selectedAnswer = null
//         questionelement.innerHTML = questions[currentQuestionIndex]["text"]
//         questionnumelement.innerHTML = `Question ${currentQuestionIndex + 1} of 3`
//         questions[currentQuestionIndex].options.forEach((optn, i) => {
//             optionelement[i].innerHTML = optn
//             optionelement[i].classList.remove('bg-slate-900')
//             optionelement[i].classList.add('bg-slate-600')
//         })
//     }

// })
const fetchData = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${incElement.innerHTML}`);
        const json = await res.json();
        console.log(json);
        document.getElementById('details').innerHTML = `
            <div class"text-2xl font-bold mb-4">USER DETAILS</div>
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

