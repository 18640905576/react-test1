import React from "react";
// import "./App.css";
import logo from "./assets/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <div className={styles.appHeader}>
        <img src={logo} alt='' />
      </div>
      <ShoppingCart />

      <ul className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </ul>
    </div>
  );
}

export default App;
