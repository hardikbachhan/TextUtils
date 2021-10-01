import React from "react";
import PropTypes from 'prop-types';

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   backgoundColor: "white", // : "#031a3c",
  //   color: "black"
  // });

  // if (props.mode === "light") {
  //   setMyStyle({backgoundColor: "white", color: "black"});
  // } else if (props.mode === "dark") {
  //   setMyStyle({backgoundColor: "black", color: "white"});
  // }

  // const [btnText, setBtnText] = useState("Enable Light Mode")
  // const toggleStyle = () => {
  //   const textColor = (myStyle.color === "black") ? "white" : "black";
  //   const bgColor = (myStyle.backgroundColor === "black") ? "white" : "black";
  //   setmyStyle({
  //       color: textColor,
  //       backgroundColor: bgColor
  //   });
  //   if (myStyle.color === "white"){
  //       setBtnText("Enable Dark Mode");
  //   }else{
  //       setBtnText("Enable Light Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#0c2b58",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it hard count, character count or anything in
                between.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                TextUtils is a free character counter tool that provides instant
                character count and word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Campatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired
};

About.defaultProps = {
  mode: "light"
};
