import react, { useRef } from "react";

function ProblemTwo() {
  const inputOne = useRef(0);
  const inputTwo = useRef(0);
  const result = useRef(0);
  const inputOneHandler = () => {
    let x = parseInt(inputOne.current.value);
    inputTwo.current.value = x + 1;
    result.current.value = inputTwo.current.value - x;
  };
  const inputTwoHandler = () => {
    let x = parseInt(inputTwo.current.value);
    inputOne.current.value = x - 1;
    result.current.value = x - inputOne.current.value;
  };
  return (
    <>
      <input type="number" ref={inputOne} onChange={inputOneHandler} />
      <input type="number" ref={inputTwo} onChange={inputTwoHandler} />
      <input type="number" ref={result} value={result.current.value} disabled />
    </>
  );
}
export default ProblemTwo;