import React, { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <BsDash /> : <BsPlus />}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
