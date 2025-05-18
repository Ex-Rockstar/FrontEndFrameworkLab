import React from "react";
import Student from "./Student";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Student Info (Vite + React)</h1>
      <Student name="Alice" age="20" course="B.Tech" />
      <Student name="Bob" age="21" course="B.Sc" />
      <Student name="Charlie" age="22" course="B.Com" />
    </div>
  );
}

export default App;
