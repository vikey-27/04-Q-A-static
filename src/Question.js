import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {

  const [buttontoggle, setbuttontoggle] = useState(false);
  const showAnswer = () => {
    setbuttontoggle(!buttontoggle);
  };
  return (
    <article className='question'>
      <header>
        <h4>{props.title}</h4>
        {buttontoggle?<button className='btn' onClick={showAnswer}><AiOutlineMinus /></button>
        :<button className='btn' onClick={showAnswer}><AiOutlinePlus /></button>}
      </header>
      <p>{buttontoggle && props.info}</p>
    </article>
  );
};

export default Question;
