import React, { useState } from "react";

export default function Operations() {
  const [list, setList] = useState([]);
  let [count, setCount] = useState(1);
  const add = () => {
    console.log(count + 1);
    setCount(count + 1);
    setList([...list, count]);
  };

  const square = (event) => {
    let num = event.target.id;
    let value = list[num];
    console.log(list[num]);
    let result = value * value;
    console.log(result);
    let arr = [...list];
    arr[num] = result;
    setList(arr);
  };

  return (
    <>
      <div>
        <button onClick={add}>Add</button>
        <button
          onClick={() => {
            setList([]), setCount(1);
          }}
        >
          Clear
        </button>
        {list.map((data, index) => {
          return (
            <div>
              <label>{data}</label>
              <button onClick={square} id={index}>
                Square
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
