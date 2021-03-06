import React, { useState } from 'react';
import Header from './Components/Header';

import './App.css';
const Questions = [
  {
    question: 'What does HTML stand for?',
    opt1: 'Home tool Markup Language',
    opt2: 'Hyperlink and Text Markup Language',
    opt3: 'Hyper Text Markup Language',
    opt4: 'None of the above',
    correct: 'Option c',
  },
  {
    question:
      'which of the following tag is used to mark a begining of paragraph ?',
    opt1: '<TD>',
    opt2: '<br>',
    opt3: '<P>',
    opt4: '<TR>',
    correct: 'Option c',
  },
  {
    question: 'From which tag descriptive list starts ?',
    opt1: '<LL>',
    opt2: '<DD>',
    opt3: '<DL>',
    opt4: '<DS>',
    correct: 'Option c',
  },
  {
    question: 'Correct HTML tag for the largest heading is?',
    opt1: '<head>',
    opt2: '<h6>',
    opt3: '<heading>',
    opt4: '<h1>',
    correct: 'Option d',
  },
  {
    question: 'The attribute of <form> tag',
    opt1: 'Method',
    opt2: 'Action',
    opt3: 'Both (a)&(b)',
    opt4: 'None of these',
    correct: 'Option b',
  },

  {
    question: 'The correct sequence of HTML tags for starting a webpage is',
    opt1: 'Head, Title, HTML, body',
    opt2: 'HTML, Body, Title, Head',
    opt3: 'HTML, Head, Title, Body',
    opt4: 'HTML, Head, Title, Body',
    correct: 'Option d',
  },

  {
    question: 'How to create a hyperlink in HTML?',
    opt1: '<a href = "www.javatpoint.com"> javaTpoint.com </a>',
    opt2: '<a url = "www.javatpoint.com" javaTpoint.com /a>',
    opt3: '<a link = "www.javatpoint.com"> javaTpoint.com </a>',
    opt4: '<a> www.javatpoint.com <javaTpoint.com /a>',
    correct: 'Option a',
  },

  {
    question: 'How to insert an image in HTML?',
    opt1: '<img href = "jtp.png" />',
    opt2: '<img url = "jtp.png" />',
    opt3: '<img link = "jtp.png" />',
    opt4: '<img src = "jtp.png" />',
    correct: 'Option d',
  },

  {
    question: 'How to add a background color in HTML?',
    opt1: '<marquee bg color: "red">',
    opt2: '<marquee bg-color = "red">',
    opt3: '<marquee bgcolor = "red">',
    opt4: '<marquee color = "red">',
    correct: 'Option c',
  },
];

export default function App() {
  const [Counter, setCounter] = useState(0);
  const [Score, setScore] = useState(0);

  const handleSubmit = (id, option) => {
    console.log(option);
    console.log('increase counter');
    console.log(id);
    setCounter(id + 1);
    console.log(Counter);

    if (option == Questions[id].correct) {
      setScore(Score + 1);
      console.log(Score);
    }

    option = '';
  };

  return (
    <div>
      <Header
        quizQuestions={Questions}
        CounterNo={Counter}
        onSubmitForm={handleSubmit}
        initialScore={Score}
      />
     
    </div>
  );
}
