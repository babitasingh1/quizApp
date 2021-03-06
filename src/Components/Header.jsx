import React from 'react';
import Body from './Body';

export default function Header({
  quizQuestions,
  CounterNo,
  onSubmitForm,
  initialScore,
}) {
  return (
    <header className='container'>
      <h1>It's Quiz Time!</h1>
      <h3>Show off how smart you are with this awesome quiz.</h3>
      <Body
        quizQuestions={quizQuestions}
        Counter={CounterNo}
        onSubmitForm={onSubmitForm}
        score={initialScore}
      />
    </header>
  );
}
