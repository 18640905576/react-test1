import React from "react";
import { Router, Route } from "react-router";
// @ts-ignore
import { HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <div>
      <Router location={""} navigator={undefined}>
        <Route path='/' component={HomePage}></Route>
      </Router>
    </div>
  );
};

export default App;
