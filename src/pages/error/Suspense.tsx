import { Suspense } from "react";

export default function SuspensePage(props) {
  return (
    <div>
      <h3>suspense page</h3>
      <Suspense fallback={<h1>loading </h1>}></Suspense>
    </div>
  );
}
