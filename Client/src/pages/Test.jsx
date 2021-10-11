import React, { useState } from 'react';
import LineSelection from './LineSelection';
import Question from './Question';
import Result from './Result';

const Test = () => {
  const sessionLine = window.sessionStorage.getItem('line');
  const sessionIndex = window.sessionStorage.getItem('index');
  const [line, setLine] = useState(sessionLine);
  const [index, setIndex] = useState(sessionIndex ? parseInt(sessionIndex) : 0);
  return !line ? (
    <LineSelection line={line} setLine={setLine} />
  ) :  (
    index < 12 ? <Question index={index} setIndex={setIndex} /> : <Result/>
  );
};

export default Test;
