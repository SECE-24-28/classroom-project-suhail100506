// Quiz Questions Database
const quizQuestions = {
    easy: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language"
            ],
            correct: 0
        },
        {
            question: "Which programming language is known as the 'language of the web'?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correct: 2
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets"
            ],
            correct: 1
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            correct: 1
        },
        {
            question: "What is the correct JavaScript syntax to change the content of an HTML element?",
            options: [
                "document.getElementById('demo').innerHTML = 'Hello'",
                "document.getElement('demo').innerHTML = 'Hello'",
                "#demo.innerHTML = 'Hello'",
                "document.querySelector.innerHTML = 'Hello'"
            ],
            correct: 0
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            options: ["<!-- -->", "/* */", "//", "Both b and c"],
            correct: 3
        },
        {
            question: "What is the correct HTML element for the largest heading?",
            options: ["<h6>", "<heading>", "<h1>", "<head>"],
            correct: 2
        },
        {
            question: "Which property is used to change the background color in CSS?",
            options: ["bgcolor", "color", "background-color", "bg-color"],
            correct: 2
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function myFunction()",
                "function:myFunction()",
                "create myFunction()",
                "def myFunction()"
            ],
            correct: 0
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: ["class", "style", "styles", "font"],
            correct: 1
        }
    ],
    medium: [
        {
            question: "What is the output of: typeof null in JavaScript?",
            options: ["'null'", "'undefined'", "'object'", "'number'"],
            correct: 2
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["text-size", "font-size", "text-style", "font-style"],
            correct: 1
        },
        {
            question: "What is the purpose of the 'use strict' directive in JavaScript?",
            options: [
                "To enable strict type checking",
                "To enforce stricter parsing and error handling",
                "To make code run faster",
                "To enable ES6 features"
            ],
            correct: 1
        },
        {
            question: "Which HTTP method is used to send data to a server to create a resource?",
            options: ["GET", "POST", "PUT", "DELETE"],
            correct: 1
        },
        {
            question: "What is the difference between '==' and '===' in JavaScript?",
            options: [
                "No difference",
                "'==' checks value, '===' checks value and type",
                "'==' is faster than '==='",
                "'===' is deprecated"
            ],
            correct: 1
        },
        {
            question: "Which CSS position property makes an element relative to the viewport?",
            options: ["absolute", "relative", "fixed", "static"],
            correct: 2
        },
        {
            question: "What does DOM stand for?",
            options: [
                "Document Object Model",
                "Data Object Model",
                "Document Oriented Model",
                "Digital Object Management"
            ],
            correct: 0
        },
        {
            question: "Which array method adds one or more elements to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correct: 0
        },
        {
            question: "What is the CSS Box Model?",
            options: [
                "A model for creating boxes",
                "Margin, Border, Padding, and Content",
                "A layout system",
                "A grid system"
            ],
            correct: 1
        },
        {
            question: "Which keyword is used to declare a constant in JavaScript?",
            options: ["var", "let", "const", "constant"],
            correct: 2
        }
    ],
    hard: [
        {
            question: "What is a closure in JavaScript?",
            options: [
                "A function that has access to variables in its outer scope",
                "A way to close browser windows",
                "A method to end loops",
                "A type of bracket"
            ],
            correct: 0
        },
        {
            question: "What is the purpose of the Virtual DOM in React?",
            options: [
                "To store virtual reality data",
                "To optimize rendering by minimizing direct DOM manipulation",
                "To create virtual components",
                "To simulate DOM operations"
            ],
            correct: 1
        },
        {
            question: "What is event bubbling in JavaScript?",
            options: [
                "Events moving from parent to child",
                "Events moving from child to parent",
                "Events creating bubbles",
                "Multiple events firing simultaneously"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of 'async/await' in JavaScript?",
            options: [
                "To make code run faster",
                "To handle asynchronous operations more cleanly",
                "To create multiple threads",
                "To pause code execution"
            ],
            correct: 1
        },
        {
            question: "What is CSS Grid Layout primarily used for?",
            options: [
                "Creating grids on paper",
                "Two-dimensional layout system for web pages",
                "Making tables",
                "Creating graph papers"
            ],
            correct: 1
        },
        {
            question: "What is the difference between 'call', 'apply', and 'bind' in JavaScript?",
            options: [
                "They are identical",
                "They change function context differently",
                "Only syntax differs",
                "They are deprecated"
            ],
            correct: 1
        },
        {
            question: "What is a Promise in JavaScript?",
            options: [
                "A guarantee that code will work",
                "An object representing eventual completion or failure of an async operation",
                "A way to make commitments",
                "A type of loop"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of webpack?",
            options: [
                "To pack web content",
                "A module bundler for JavaScript applications",
                "To create web packages",
                "To compress websites"
            ],
            correct: 1
        },
        {
            question: "What is prototype-based inheritance in JavaScript?",
            options: [
                "Inheriting from prototypes/templates",
                "Objects inheriting directly from other objects",
                "Class-based inheritance",
                "Interface-based inheritance"
            ],
            correct: 1
        },
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
                "To reference the current function",
                "To reference the execution context",
                "To create variables",
                "To point to DOM elements"
            ],
            correct: 1
        }
    ]
};
