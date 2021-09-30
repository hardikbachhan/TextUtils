import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const onUpClick = () => {
    // console.log("Button is clicked.");
    // setText("You have clicked on onUpClicked.")
    let newText = text.toUpperCase();
    setText(newText);
  };

  const onLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const onPunctuationClick = () => {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = text.replace(regex, "");
    setText(result);
  };

  const onClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const onUpChange = (event) => {
    // console.log("Text area contents changed.")
    let newText = event.target.value;
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgoundColor: props.mode === "light" ? "white" : "#031a3c",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="my-3" >
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode==="light"?"white":"black", color: props.mode==="light"?"black":"white"}}
            value={text}
            id="myBox"
            rows="8"
            onChange={onUpChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={onUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={onLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={onPunctuationClick}>
          Remove Punctuation
        </button>
        <button className="btn btn-primary mx-1" onClick={onClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgoundColor: props.mode === "light" ? "white" : "#031a3c",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Details: </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in box above to show it here...."}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Text goes below:",
};
