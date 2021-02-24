import React from "react";
import "./styles.css";
import logo from "/images/bday.svg";
import { useState } from "react";

let bgColor = {
    purple: "#C7D2FE",
    lightPurple: "#EEF2FF"
};

export default function App() {
  let [userInput, setUserInput] = useState("7th?");

  const inputChangeHandler = (event) => setUserInput(event.target.value);

  let [newNumberFetch, setNumberFetch] = useState("7?");

  const numberFetch = (event) => setNumberFetch(event.target.value);

  let [output, setOutput] = useState("");

  const calculate = (event) => {
    let newNum = Math.random();
    if (newNum === newNumberFetch) {
      setOutput("Your Birhday is the true defination of LUCK");
    } else {
      setOutput("Not all can be lucky, unfortunately you're one of them ;)");
    }
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
        <p className="outputDiv">
          According to you, your Birthday is on{" "}
          <span className="output">{userInput}</span> and your lucky number is{" "}
          <span className="output">{newNumberFetch}</span>
        </p>
        <p className="outputDiv">{output}</p>
      </div>
    </div>
  );
}
