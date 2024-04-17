import React, { useRef } from "react";
import circle from "../assets/circle.jpeg";
import cross from "../assets/cross.jpeg";
import { useState } from "react";
let data = ["", "", "", "", "", "", "", "", ""];
function Tictactoe() {
  let [count, setcount] = useState(0);
  let [lock, setlock] = useState(false);
  let titleref = useRef(null)
  const toggle = (e, num) => {
    if (!lock) { // Check if the game is not locked
      if (count % 2 === 0) {
        e.target.innerHTML = `<img src='${cross}' width="80px" height='80px'/>`;
        data[num] = "x";
        setcount(++count);
      } else {
        e.target.innerHTML = `<img src='${circle}' width="80px" height='80px'/>`;
        data[num] = "o";
        setcount(++count);
      }
      checkwin();
    }
  };
  
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  
  const won = (winner) => {
    setlock(true)
    console.log(lock);
    if (winner === "x") {
        titleref.current.innerHTML = "X won "
    }
    else{
        titleref.current.innerHTML = "O won "
    }
  };
  return (
    <div>
      <div className="container">
        <h2 className="" ref={titleref}>tictactoe in react.js</h2>
        <div className="board">
          <div className="row1">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button className="reset">reset</button>
      </div>
    </div>
  );
}

export default Tictactoe;
