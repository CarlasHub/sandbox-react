import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

console.log(element);

function to(name) {
  return <h1> {name.toUpperCase()}</h1>;
}
ReactDOM.render(to("carla  Sofia"), rootElement);

//user fefined component props -> properties

//always start component names with captital letter
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name} you'are
      {Math.floor(Math.random() * 30)}
    </h1>
  );
}

const element2 = <Welcome name="Carla props" />;
const element3 = <Welcome name="Carla props" />;

ReactDOM.render(element2, rootElement);
