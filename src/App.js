import React, { useState } from "react";

import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

import "./App.css";

function App() {
  const [result, setResult] = useState("");

  let onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult({
        result: result + button,
      });
    }
  };

  let calculate = () => {
    var checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      setResult({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      setResult({
        result: "error",
      });
    }
  };

  let reset = () => {
    setResult({
      result: "",
    });
  };

  let backspace = () => {
    setResult({
      result: result.slice(0, -1),
    });
  };

  return (
    <div>
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
