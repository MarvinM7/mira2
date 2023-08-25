"use client";

import { useState } from "react";

export default function Home() {
  console.log('tese');
  const [state, setState] = useState("");

  const handleInput = (e: any) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleInput} value={state} />
    </>
  );
}