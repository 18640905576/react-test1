import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
// @ts-ignore
// import HomePage from "./pages/home/HomePage";
import Detail from "./pages/detail/Detail";

const HomePage = lazy(() => import("./pages/home/HomePage"));

function App() {
  // TODO suspense 的子组件怎么写？
  return (
    <Suspense fallback={<h1>加载中....</h1>}>
      <HomePage></HomePage>
    </Suspense>
  );
}

export default App;
