import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here...");

    const onUpClick = () => {
        // console.log("Button is clicked.");
        // setText("You have clicked on onUpClicked.")
        let upCaseText = text.toUpperCase();
        setText(upCaseText);
    }

    const onUpChange = (event) => {
        // console.log("Text area contents changed.")
        let newText = event.target.value;
        setText(newText);
    }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={onUpChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={onUpClick}>Convert to Uppercase</button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Text goes below:",
};
