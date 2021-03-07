import React from 'react';

export default function Body({ quizQuestions, Counter, onSubmitForm, score }) {
  let selectedOption;

  const handleChange = (e) => {
    selectedOption = e.target.value;
    console.log(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption) {
      onSubmitForm(Counter, selectedOption);
    } else {
      alert('please select one option!');
      return;
    }

    if (quizQuestions.length - 1 == Counter) {
      alert(`Your final score is ${score} out of ${Counter + 1}`);
      return;
    }

    e.target.reset();
    selectedOption = '';
  };

  return (
    <div className='container questions-div'>
      <h5>{quizQuestions[Counter].question}</h5>
      <form onSubmit={handleSubmit}>
        <fieldset id='fieldset' onChange={handleChange}>
          <input type='radio' name='myRadioInput' value='Option a' />
          <label className='span'>{quizQuestions[Counter].opt1}</label>
          <br></br>
          <input type='radio' name='myRadioInput' value='Option b' />
          <label className='span'>{quizQuestions[Counter].opt2}</label>
          <br></br>
          <input type='radio' name='myRadioInput' value='Option c' />
          <label className='span'>{quizQuestions[Counter].opt3}</label>
          <br></br>
          <input type='radio' name='myRadioInput' value='Option d' />
          <label className='span'>{quizQuestions[Counter].opt4}</label>
          <br></br>
        </fieldset>
        {quizQuestions.length - 1 == Counter ? (
          <input className='btn btn-secondary' type='submit' value='Finish' />
        ) : (
          <input className='btn btn-secondary' type='submit' value='Submit' />
        )}

        <br></br>
        <p className='scoreCard'>Score {score} </p>
      </form>
    </div>
  );
}
