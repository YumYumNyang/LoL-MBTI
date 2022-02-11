import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LineSelection from "./LineSelection";
import Question from "./Question";
import Result from "./Result";

const Test = () => {
  const sessionLine = window.sessionStorage.getItem("line");
  const sessionIndex = window.sessionStorage.getItem("index");
  const [line, setLine] = useState(sessionLine);
  const [index, setIndex] = useState(sessionIndex ? sessionIndex : 0);

  return !line ? (
    <LineSelection line={line} setLine={setLine} />
  ) : (
    <Question index={index} setIndex={setIndex} />
  );
};

export default Test;
