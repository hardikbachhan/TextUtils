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
  }

  const onUpChange = (event) => {
    // console.log("Text area contents changed.")
    let newText = event.target.value;
    setText(newText);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
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
      </div>
      <div className="container my-3">
        <h1>Your Text Details: </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview:</h2>
        <p>{text}</p>
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
