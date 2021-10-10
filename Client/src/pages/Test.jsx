import React, { useState } from 'react';
import LineSelection from './LineSelection';
import Question from './Question';

const Test = () => {
  const [line, setLine] = useState('');
  console.log(line);
  return line === '' ? (
    <LineSelection line={line} setLine={setLine} />
  ) : (
    <Question number={2} />
  );
};

export default Test;
