import React from "react";
import "./styles.css";
import logo from "/images/bday.svg";

var bgColor = {
  purple: "#C7D2FE",
  lightPurple: "#EEF2FF"
};

export default function App() {
  return (
    // Textarea code
    <div className="App">
      <h1>How Luck Is your Birthday?</h1>
      <div style={{ backgroundColor: bgColor.purple }}>
        <p className="details">Enter Your Birthday below</p>
        <textarea className="textStyle" placeholder="DD/MM/YYYY"></textarea>
      </div>

      {/* Adding Image */}
      <div style={{ backgroundColor: bgColor.lightPurple }}>
        <img className="imageSize" src={logo} alt="Logo" />
      </div>
    </div>
  );
}
