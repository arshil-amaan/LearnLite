const questions = [
    [],
    
    [
        {
            question: "Easy : What is the output of 'cout << 5 / 2;' in C++?",
            answers: [
                { text: "2.5", correct: false },
                { text: "2", correct: true },
                { text: "2.0", correct: false },
                { text: "5 / 2", correct: false }
            ]
        },
        {
            question: "Easy : How do you declare a constant in C++?",
            answers: [
                { text: "const", correct: true },
                { text: "var", correct: false },
                { text: "let", correct: false },
                { text: "constant", correct: false }
            ]
        },
        {
            question: "Easy : What is the largest integer data type in C++?",
            answers: [
                { text: "short", correct: false },
                { text: "int", correct: true },
                { text: "long", correct: false },
                { text: "byte", correct: false }
            ]
        },
        {
            question: "Easy : What is the symbol for the logical AND operator in C++?",
            answers: [
                { text: "&&", correct: true },
                { text: "||", correct: false },
                { text: "!", correct: false },
                { text: "&", correct: false }
            ]
        },
        {
            question: "Easy : How do you declare a character variable in C++?",
            answers: [
                { text: "char c;", correct: true },
                { text: "string c;", correct: false },
                { text: "character c;", correct: false },
                { text: "c char;", correct: false }
            ]
        }
    ],

    [
        {
            question: "Medium : What is a reference variable in C++?",
            answers: [
                { text: "A variable that cannot be changed", correct: false },
                { text: "A variable that stores the address of another variable", correct: true },
                { text: "A variable that is declared with 'ref' keyword", correct: false },
                { text: "A variable that is not used in C++", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'break' statement used for in C++?",
            answers: [
                { text: "To end a loop or switch statement", correct: true },
                { text: "To create a new line in the console", correct: false },
                { text: "To declare a new variable", correct: false },
                { text: "To define a function", correct: false }
            ]
        },
        {
            question: "Medium : How do you create a class in C++?",
            answers: [
                { text: "class MyClass { };", correct: true },
                { text: "class = MyClass { };", correct: false },
                { text: "class : MyClass { };", correct: false },
                { text: "create class MyClass { };", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'sizeof' operator used for in C++?",
            answers: [
                { text: "To find the size of a data type or variable", correct: true },
                { text: "To check if a variable is empty", correct: false },
                { text: "To round a floating-point number", correct: false },
                { text: "To convert a string to an integer", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'this' pointer in C++?",
            answers: [
                { text: "A pointer to the current object", correct: true },
                { text: "A pointer to the next object", correct: false },
                { text: "A pointer to the previous object", correct: false },
                { text: "A pointer to the main function", correct: false }
            ]
        }
    ],

    [
        {
            question: "Hard : What is a lambda function in C++?",
            answers: [
                { text: "A function that takes no arguments", correct: false },
                { text: "A function that can be called only once", correct: false },
                { text: "An anonymous inline function", correct: true },
                { text: "A recursive function", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'typeid' operator in C++?",
            answers: [
                { text: "To check the data type of a variable", correct: true },
                { text: "To convert a string to a numerical value", correct: false },
                { text: "To declare a new class", correct: false },
                { text: "To compare two objects", correct: false }
            ]
        },
        {
            question: "Hard : What is a template in C++?",
            answers: [
                { text: "A pre-defined class", correct: false },
                { text: "A blueprint for creating generic classes or functions", correct: true },
                { text: "A standard library function", correct: false },
                { text: "A data type for storing dates and times", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'mutable' keyword in C++?",
            answers: [
                { text: "To define a constant variable", correct: false },
                { text: "To indicate that a member function does not modify the object", correct: false },
                { text: "To allow a member variable to be modified in a 'const' member function", correct: true },
                { text: "To create a new class", correct: false }
            ]
        },
        {
            question: "Hard : What is a smart pointer in C++?",
            answers: [
                { text: "A pointer that is not used in C++", correct: false },
                { text: "A pointer that is automatically deallocated when no longer needed", correct: true },
                { text: "A pointer to a smart object", correct: false },
                { text: "A pointer to a function", correct: false }
            ]
        }
    ]
];

export default questions;
