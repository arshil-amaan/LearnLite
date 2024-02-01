const questions = [
    [],
    
    [
        {
            question: "Easy : What is the output of 'System.out.println(5 / 2);' in Java?",
            answers: [
                { text: "2.5", correct: false },
                { text: "2", correct: true },
                { text: "2.0", correct: false },
                { text: "5 / 2", correct: false }
            ]
        },
        {
            question: "Easy : How do you declare a constant in Java?",
            answers: [
                { text: "const", correct: false },
                { text: "var", correct: false },
                { text: "final", correct: true },
                { text: "constant", correct: false }
            ]
        },
        {
            question: "Easy : What is the largest integer data type in Java?",
            answers: [
                { text: "short", correct: false },
                { text: "int", correct: true },
                { text: "long", correct: false },
                { text: "byte", correct: false }
            ]
        },
        {
            question: "Easy : What is the symbol for the logical AND operator in Java?",
            answers: [
                { text: "&&", correct: true },
                { text: "||", correct: false },
                { text: "!", correct: false },
                { text: "&", correct: false }
            ]
        },
        {
            question: "Easy : How do you declare a character variable in Java?",
            answers: [
                { text: "char c;", correct: true },
                { text: "String c;", correct: false },
                { text: "character c;", correct: false },
                { text: "c char;", correct: false }
            ]
        }
    ],

    [
        {
            question: "Medium : What is a reference variable in Java?",
            answers: [
                { text: "A variable that cannot be changed", correct: false },
                { text: "A variable that stores the address of another variable", correct: true },
                { text: "A variable that is declared with 'ref' keyword", correct: false },
                { text: "A variable that is not used in Java", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'break' statement used for in Java?",
            answers: [
                { text: "To end a loop or switch statement", correct: true },
                { text: "To create a new line in the console", correct: false },
                { text: "To declare a new variable", correct: false },
                { text: "To define a function", correct: false }
            ]
        },
        {
            question: "Medium : How do you create a class in Java?",
            answers: [
                { text: "class MyClass { };", correct: true },
                { text: "class = MyClass { };", correct: false },
                { text: "class : MyClass { };", correct: false },
                { text: "create class MyClass { };", correct: false }
            ]
        },
        {
            question: "Medium : What is the 'sizeof' operator used for in Java?",
            answers: [
                { text: "To find the size of a data type or variable", correct: false },
                { text: "To check if a variable is empty", correct: false },
                { text: "To round a floating-point number", correct: false },
                { text: "Java does not have a 'sizeof' operator", correct: true }
            ]
        },
        {
            question: "Medium : What is the 'this' keyword in Java?",
            answers: [
                { text: "A reference to the current object", correct: true },
                { text: "A reference to the next object", correct: false },
                { text: "A reference to the previous object", correct: false },
                { text: "A reference to the main function", correct: false }
            ]
        }
    ],

    [
        {
            question: "Hard : What is a lambda expression in Java?",
            answers: [
                { text: "A function that takes no arguments", correct: false },
                { text: "A function that can be called only once", correct: false },
                { text: "An anonymous inline function", correct: true },
                { text: "A recursive function", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'instanceof' operator in Java?",
            answers: [
                { text: "To check the data type of a variable", correct: true },
                { text: "To convert a string to a numerical value", correct: false },
                { text: "To declare a new class", correct: false },
                { text: "To compare two objects", correct: false }
            ]
        },
        {
            question: "Hard : What is a generic in Java?",
            answers: [
                { text: "A pre-defined class", correct: false },
                { text: "A blueprint for creating generic classes or functions", correct: true },
                { text: "A standard library function", correct: false },
                { text: "A data type for storing dates and times", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'volatile' keyword in Java?",
            answers: [
                { text: "To define a constant variable", correct: false },
                { text: "To indicate that a member function does not modify the object", correct: false },
                { text: "To allow a member variable to be modified in a 'final' member function", correct: true },
                { text: "To create a new class", correct: false }
            ]
        },
        {
            question: "Hard : What is a weak reference in Java?",
            answers: [
                { text: "A reference that is not used in Java", correct: false },
                { text: "A reference that is automatically deallocated when no longer needed", correct: true },
                { text: "A reference to a weak object", correct: false },
                { text: "A reference to a function", correct: false }
            ]
        }
    ]
];

export default questions;