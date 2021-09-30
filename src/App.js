import "./App.css";
import React, { useState } from 'react';
// import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";

function App() {
  //let name = "Hardik";
  //let info = "<b>I am an Engineer.</b>";  // will be printed as it is without implementing
  // html code as react does not allow external html. Not a bug, but a preventive measure,
  // so that if this variable stores input from user, no one is able to drop malware js into
  // the website. Can be overcome by using dangerouslysetinnerhtml but not recommended.

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);      // Alert is an object.

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#031a3c";
      showAlert("Dark mode enabled", "success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text below to analyze: " mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}
export default App;

// return (    // Everything inside these parenthesis is JSX.
//   <>
//   <h1>This is me.</h1>
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React with Hardik
//       </a>
//     </header>
//   </div>
//  </> // called JSX fragment, used to wrap everything in a single element.
//  );  // returns only one element otherwise gives error.
// JSX is enclosed in () as JS automatically adds ; at the end which will
// cause errors as ; is not used in JSX (if parenthesis are absent, ; gets added at
// the end of JSX.)
