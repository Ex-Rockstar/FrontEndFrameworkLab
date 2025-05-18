import React from "react";

const Student = (props) => {
  return (
    <div style={{ border: "2px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
};

export default Student;
