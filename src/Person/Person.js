import React from "react";

const person = props => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p> {props.children} </p>
    </div>
  );
};

// class Person extends React.Component {
//   render() {
//     return <h1>Hello, {this.props}</h1>;
//   }
// }

export default person;
