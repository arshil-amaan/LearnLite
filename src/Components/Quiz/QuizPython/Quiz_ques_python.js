const questions = [
    [],
    
    [
        {
            question: "Easy : What is the output of 'print(5 / 2)' in Python?",
            answers: [
                { text: "2.5", correct: false },
                { text: "2", correct: true },
                { text: "2.0", correct: false },
                { text: "5 / 2", correct: false }
            ]
        },
        {
            question: "Easy : How do you declare a constant in Python?",
            answers: [
                { text: "const", correct: false },
                { text: "var", correct: false },
                { text: "final", correct: false },
                { text: "No keyword, use uppercase variable name", correct: true }
            ]
        },
        {
            question: "Easy : What is the largest integer data type in Python?",
            answers: [
                { text: "short", correct: false },
                { text: "int", correct: true },
                { text: "long", correct: false },
                { text: "byte", correct: false }
            ]
        },
        {
            question: "Easy : What is the symbol for the logical AND operator in Python?",
            answers: [
                { text: "&&", correct: false },
                { text: "||", correct: false },
                { text: "and", correct: true },
                { text: "&", correct: false }
            ]
        },
        {
            question: "Easy : How do you declare a character variable in Python?",
            answers: [
                { text: "char c;", correct: false },
                { text: "String c;", correct: false },
                { text: "character c;", correct: false },
                { text: "c = 'a'", correct: true }
            ]
        }
    ],

    [
        {
            question: "Medium : What is a reference variable in Python?",
            answers: [
                { text: "A variable that cannot be changed", correct: false },
                { text: "A variable that stores the address of another variable", correct: false },
                { text: "Python does not have reference variables", correct: true },
                { text: "A variable that is not used in Python", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'break' statement used for in Python?",
            answers: [
                { text: "To end a loop or switch statement", correct: true },
                { text: "To create a new line in the console", correct: false },
                { text: "To declare a new variable", correct: false },
                { text: "To define a function", correct: false }
            ]
        },
        {
            question: "Medium : How do you create a class in Python?",
            answers: [
                { text: "class = MyClass { };", correct: false },
                { text: "class : MyClass { };", correct: false },
                { text: "class MyClass:", correct: true },
                { text: "create class MyClass { };", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'sizeof' operator used for in Python?",
            answers: [
                { text: "To find the size of a data type or variable", correct: false },
                { text: "To check if a variable is empty", correct: false },
                { text: "Python does not have a 'sizeof' operator", correct: true },
                { text: "To round a floating-point number", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'self' parameter in Python?",
            answers: [
                { text: "A parameter to reference another object", correct: false },
                { text: "A parameter to represent the class instance", correct: true },
                { text: "A parameter for defining private variables", correct: false },
                { text: "A parameter for handling exceptions", correct: false }
            ]
        }
    ],

    [
        {
            question: "Hard : What is a lambda function in Python?",
            answers: [
                { text: "A function that takes no arguments", correct: false },
                { text: "A function that can be called only once", correct: false },
                { text: "An anonymous inline function", correct: true },
                { text: "A recursive function", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'isinstance' function in Python?",
            answers: [
                { text: "To check the data type of a variable", correct: true },
                { text: "To convert a string to a numerical value", correct: false },
                { text: "To declare a new class", correct: false },
                { text: "To compare two objects", correct: false }
            ]
        },
        {
            question: "Hard : What is a decorator in Python?",
            answers: [
                { text: "A design pattern for creating objects", correct: false },
                { text: "A function that adds functionality to another function", correct: true },
                { text: "A way to format code for readability", correct: false },
                { text: "A built-in module for handling dates and times", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'global' keyword in Python?",
            answers: [
                { text: "To define a constant variable", correct: false },
                { text: "To indicate that a member function does not modify the object", correct: false },
                { text: "To allow a variable to be modified outside of its local scope", correct: true },
                { text: "To create a new class", correct: false }
            ]
        },
        {
            question: "Hard : What is a generator in Python?",
            answers: [
                { text: "A function that generates random numbers", correct: false },
                { text: "A function that creates instances of a class", correct: false },
                { text: "A special type of iterable that allows lazy evaluation", correct: true },
                { text: "A function for creating graphical user interfaces", correct: false }
            ]
        }
    ]
];

export default questions;
