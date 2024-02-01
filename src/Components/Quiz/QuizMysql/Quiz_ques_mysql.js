const questions = [
    [],

    [
        // Hard Questions
        {
            question: "Easy : What does SQL stand for?",
            answers: [
                { text: "Structured Language", correct: false },
                { text: "Sequential Query Language", correct: false },
                { text: "Structured Query Language", correct: true },
                { text: "Sequential Language", correct: false }
            ]
        },
        {
            question: "Easy : How do you select all columns from a table named 'employees'?",
            answers: [
                { text: "SELECT * FROM employees", correct: true },
                { text: "SELECT ALL FROM employees", correct: false },
                { text: "SELECT COLUMNS FROM employees", correct: false },
                { text: "SELECT employees", correct: false }
            ]
        },
        {
            question: "Easy : Which keyword is used to retrieve unique records from a table?",
            answers: [
                { text: "DISTINCT", correct: true },
                { text: "UNIQUE", correct: false },
                { text: "DIFFERENT", correct: false },
                { text: "UNIQUEROWS", correct: false }
            ]
        },
        {
            question: "Easy : What is the purpose of the 'WHERE' clause in a SQL query?",
            answers: [
                { text: "To specify the columns to retrieve", correct: false },
                { text: "To join two tables", correct: false },
                { text: "To filter records based on a condition", correct: true },
                { text: "To order the result set", correct: false }
            ]
        },
        {
            question: "Easy : How do you comment out a line in MySQL?",
            answers: [
                { text: "// This is a comment", correct: false },
                { text: "-- This is a comment", correct: true },
                { text: "# This is a comment", correct: false },
                { text: "/* This is a comment */", correct: false }
            ]
        }
    ],

    [

    // Medium Questions
    {
        question: "Medium : What does SQL stand for?",
        answers: [
            { text: "Structured Language", correct: false },
            { text: "Sequential Query Language", correct: false },
            { text: "Structured Query Language", correct: true },
            { text: "Sequential Language", correct: false }
        ]
    },
    {
        question: "Medium : How do you select all columns from a table named 'employees'?",
        answers: [
            { text: "SELECT * FROM employees", correct: true },
            { text: "SELECT ALL FROM employees", correct: false },
            { text: "SELECT COLUMNS FROM employees", correct: false },
            { text: "SELECT employees", correct: false }
        ]
    },
    {
        question: "Medium : Which keyword is used to retrieve unique records from a table?",
        answers: [
            { text: "DISTINCT", correct: true },
            { text: "UNIQUE", correct: false },
            { text: "DIFFERENT", correct: false },
            { text: "UNIQUEROWS", correct: false }
        ]
    },
    {
        question: "Medium : What is the purpose of the 'WHERE' clause in a SQL query?",
        answers: [
            { text: "To specify the columns to retrieve", correct: false },
            { text: "To join two tables", correct: false },
            { text: "To filter records based on a condition", correct: true },
            { text: "To order the result set", correct: false }
        ]
    },
    {
        question: "Medium : How do you comment out a line in MySQL?",
        answers: [
            { text: "// This is a comment", correct: false },
            { text: "-- This is a comment", correct: true },
            { text: "# This is a comment", correct: false },
            { text: "/* This is a comment */", correct: false }
        ]
    }
    ],

    [
        // Hard Questions
        {
            question: "Hard : What is a subquery in MySQL?",
            answers: [
                { text: "A query that joins three or more tables", correct: false },
                { text: "A query that is executed first before the main query", correct: false },
                { text: "A query nested inside another query", correct: true },
                { text: "A query that retrieves data from multiple databases", correct: false }
            ]
        },
        {
            question: "Hard : Explain the difference between UNION and UNION ALL.",
            answers: [
                { text: "There is no difference", correct: false },
                { text: "UNION returns all rows, eliminating duplicates, while UNION ALL returns all rows, including duplicates", correct: true },
                { text: "UNION ALL returns only common rows between two tables", correct: false },
                { text: "UNION returns all rows from the first table and only unique rows from the second table", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'TRIGGER' statement in MySQL?",
            answers: [
                { text: "To modify the structure of a table", correct: false },
                { text: "To perform an action automatically when a specified event occurs", correct: true },
                { text: "To create a temporary table", correct: false },
                { text: "To define a new stored procedure", correct: false }
            ]
        },
        {
            question: "Hard : What is a stored procedure in MySQL?",
            answers: [
                { text: "A query that retrieves data from multiple tables", correct: false },
                { text: "A query that is executed only once", correct: false },
                { text: "A set of SQL statements that can be executed as a single unit", correct: true },
                { text: "A query that combines data from two or more tables", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the 'TRANSACTION' statement in MySQL?",
            answers: [
                { text: "To perform arithmetic operations", correct: false },
                { text: "To retrieve data from a database", correct: false },
                { text: "To group SQL statements into a single unit of work", correct: true },
                { text: "To declare a variable", correct: false }
            ]
        }
    ]
];

export default questions;
