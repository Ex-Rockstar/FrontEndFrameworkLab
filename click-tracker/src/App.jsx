import React, { useState } from "react";

// ClickTracker component
const ClickTracker = () => {
  // Step 4: State to store the click count
  const [count, setCount] = useState(0);

  // Step 5: Function to handle click inside the box
  const handleClick = () => {
    setCount(count + 1);
  };

  // Step 6 & 7: Return a clickable box that displays the count
  return (
    <div style={styles.container} onClick={handleClick}>
      <h2>Click inside this box</h2>
      <p>Click count: {count}</p>
    </div>
  );
};

// Step 8: Styling for the clickable element
const styles = {
  container: {
    width: "300px",
    height: "200px",
    border: "3px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    fontSize: "20px",
    fontWeight: "bold",
    userSelect: "none",
    margin: "20px auto",
  },
};

// Step 9: Render the ClickTracker component
export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mouse Click Tracker</h1>
      <ClickTracker />
    </div>
  );
}
