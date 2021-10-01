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
    props.showAlert("Converted to Uppercase!", "success");
  };

  const onLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const onPunctuationClick = () => {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = text.replace(regex, "");
    setText(result);
    props.showAlert("Puntuations removed!", "success");
  };

  const onClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
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
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed!", "success");
  };

  const textWordCount = () => {
    let wordArr = text.split(" ");
    wordArr = wordArr.filter((word) => word.length !== 0);
    // console.log(wordArr);
    return wordArr.length;
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
        <button className="btn btn-primary mx-1 my-1" onClick={onUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={onLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={onPunctuationClick}>
          Remove Punctuation
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={onClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
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
          {textWordCount()} words and {text.length} characters.
        </p>
        <p>{0.008 * textWordCount()} minutes read.</p>
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
