const questions = [
    [],
    
    [
        {
            question: "Easy : What does HTML stand for?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "High Tech Multi-Language", correct: false },
                { text: "Home Tool Management Language", correct: false },
                { text: "Hyperlink and Text Management Language", correct: false }
            ]
        },
        {
            question: "Easy : Which HTML tag is used for creating a hyperlink?",
            answers: [
                { text: "<a>", correct: true },
                { text: "<h1>", correct: false },
                { text: "<p>", correct: false },
                { text: "<div>", correct: false }
            ]
        },
        {
            question: "Easy : What is the purpose of the HTML <head> tag?",
            answers: [
                { text: "To define the main content of the HTML document", correct: false },
                { text: "To include JavaScript code", correct: false },
                { text: "To define the header of the HTML document", correct: true },
                { text: "To create a new section in the document", correct: false }
            ]
        },
        {
            question: "Easy : Which HTML tag is used for creating an unordered list?",
            answers: [
                { text: "<ul>", correct: true },
                { text: "<ol>", correct: false },
                { text: "<li>", correct: false },
                { text: "<dl>", correct: false }
            ]
        },
        {
            question: "Easy : What does the HTML <br> tag represent?",
            answers: [
                { text: "Break", correct: true },
                { text: "Bold", correct: false },
                { text: "Bullet", correct: false },
                { text: "Body", correct: false }
            ]
        }
    ],

    [
        {
            question: "Medium : Which HTML attribute is used to define inline styles?",
            answers: [
                { text: "style", correct: true },
                { text: "class", correct: false },
                { text: "format", correct: false },
                { text: "design", correct: false }
            ]
        },
        {
            question: "Medium : What is the purpose of the HTML <meta> tag?",
            answers: [
                { text: "To create a clickable area inside an image map", correct: false },
                { text: "To define metadata about an HTML document", correct: true },
                { text: "To include external JavaScript files", correct: false },
                { text: "To define the structure of an HTML document", correct: false }
            ]
        },
        {
            question: "Medium : How do you create a hyperlink that opens in a new tab?",
            answers: [
                { text: "<a href='url' target='_blank'>Link</a>", correct: true },
                { text: "<a href='url' newtab>Link</a>", correct: false },
                { text: "<a href='url' target='_new'>Link</a>", correct: false },
                { text: "<a href='url' openinnewtab>Link</a>", correct: false }
            ]
        },
        {
            question: "Medium : Which HTML tag is used to define the structure of an HTML document?",
            answers: [
                { text: "<html>", correct: true },
                { text: "<body>", correct: false },
                { text: "<structure>", correct: false },
                { text: "<document>", correct: false }
            ]
        },
        {
            question: "Medium : What is the purpose of the HTML <figcaption> tag?",
            answers: [
                { text: "To define the caption for a <figure> element", correct: true },
                { text: "To create a new section in the document", correct: false },
                { text: "To include JavaScript code", correct: false },
                { text: "To define a footer for a document", correct: false }
            ]
        }
    ],

    [
        {
            question: "Hard : What is the HTML DOM?",
            answers: [
                { text: "A new HTML tag for creating dynamic elements", correct: false },
                { text: "HTML Document Object Model, representing the structure of a document", correct: true },
                { text: "A programming language for web development", correct: false },
                { text: "A technique for creating responsive web designs", correct: false }
            ]
        },
        {
            question: "Hard : How do you embed an audio file in HTML?",
            answers: [
                { text: "<audio src='audio.mp3' controls></audio>", correct: true },
                { text: "<sound src='audio.mp3'></sound>", correct: false },
                { text: "<music src='audio.mp3' play></music>", correct: false },
                { text: "<mp3 src='audio.mp3' autoplay></mp3>", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the HTML <canvas> element?",
            answers: [
                { text: "To create a 3D effect in web pages", correct: false },
                { text: "To draw graphics, animations, or other visual images on the fly", correct: true },
                { text: "To include external stylesheets in an HTML document", correct: false },
                { text: "To define a container for external plugins", correct: false }
            ]
        },
        {
            question: "Hard : How do you create a responsive web design in HTML?",
            answers: [
                { text: "By using the <responsive> tag", correct: false },
                { text: "By setting fixed widths for elements", correct: false },
                { text: "By using media queries in CSS", correct: true },
                { text: "By including JavaScript code for responsiveness", correct: false }
            ]
        },
        {
            question: "Hard : What is the purpose of the HTML <progress> element?",
            answers: [
                { text: "To define a progress bar for loading web pages", correct: true },
                { text: "To create a list of tasks to be completed", correct: false },
                { text: "To include external scripts in an HTML document", correct: false },
                { text: "To define a footer for a document", correct: false }
            ]
        }
    ]
];

export default questions;
