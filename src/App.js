import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [Mode, setMode] = useState("dark");
  const [navmode, setnavmode] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toogleBar = () => {
    if (Mode === "light") {
      setMode("dark");
      setnavmode("Enable Light Mode");
      document.body.style.backgroundColor = "#111941";
      showAlert("Dark Mode has been enabled", "success");
      setInterval(() => {
        document.title = "textUtils-Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install textutils now";
      }, 1500);
    } else {
      setMode("light");
      setnavmode("Disable Light Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "textUtils-Light Mode";
    }
  };
  
  return (
    <>
      <Navbar
        titles="TextUtils"
        aboutText="About text"
        Mode={Mode}
        btnchange={toogleBar}
        navbarBtn={navmode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          Mode={Mode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
