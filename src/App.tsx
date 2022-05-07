import React from "react";
// import "./App.css";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";

function App() {
  return (
    <div>
      <ul className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </ul>
    </div>
  );
}

export default App;
