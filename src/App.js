import React from "react";
import "./styles.css";
import logo from "/images/bday.svg";
import { useState } from "react";

var bgColor = {
  purple: "#C7D2FE",
  lightPurple: "#EEF2FF"
};

export default function App() {
  var [userInput, setUserInput] = useState("7th?");

  function inputChangeHandler(event) {
    setUserInput(event.target.value);
  }

  var [newNumberFetch, setNumberFetch] = useState("7?");

  function numberFetch(event) {
    setNumberFetch(event.target.value);
  }

  function calculate() {
    console.log(userInput);
    console.log(newNumberFetch);
  }

  return (
    // Textarea code
    <div className="App">
      <h1>How Lucky are you?</h1>
      <div style={{ backgroundColor: bgColor.purple }}>
        <p className="details">Enter Your Birthday below</p>
        <input
          onChange={inputChangeHandler}
          type="date"
          className="textStyle"
        ></input>
        <div>
          <p className="details">Enter Your Fav Number</p>
          <input
            onChange={numberFetch}
            type="number"
            className="textStyle"
            placeholder="Input a number"
          ></input>
        </div>
      </div>

      <div style={{ backgroundColor: "#C7D2FE" }}>
        <button onClick={calculate} className="myButton">
          Let's go
        </button>
      </div>

      {/* Adding Image */}
      <div style={{ backgroundColor: bgColor.lightPurple }}>
        <img className="imageSize" src={logo} alt="Logo" />
      </div>

      {/* Showing Output */}
      <div>
        <p>
          According to you, your Birthday is on{" "}
          <span className="output">{userInput}</span> and your lucky number is{" "}
          <span className="output">{newNumberFetch}</span>
        </p>
      </div>
      <div>{}</div>
    </div>
  );
}
