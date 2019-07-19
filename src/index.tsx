import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button onClick={() => alert("Hello World!")}>Hello this is David</button>
      <SecretComponent message="I am bob" />
    </div>
  );
}

const SecretComponent = (props: { message?: string }) =>
  props.message ? (
    <p>
      {props.message.substring(0, props.message.length - 3)}
      {"*".repeat(3)}
    </p>
  ) : (
    <p />
  );

const rootElement = document.getElementById("root");
render(<App />, rootElement);
