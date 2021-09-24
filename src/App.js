import './App.css';

function App() {

  //let name = "Hardik";
  //let info = "<b>I am an Engineer.</b>";  // will be printed as it is without implementing 
  // html code as react does not allow external html. Not a bug, but a preventive measure,
  // so that if this variable stores input from user, no one is able to drop malware js into
  // the website. Can be overcome by using dangerouslysetinnerhtml but not recommended. 

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
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
