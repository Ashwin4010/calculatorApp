"use client"
import { useState } from "react";
import Functions from "./components/Functions";

export default function Home() {

  const [value, setValue] = useState("0")

  return (
    <div>
      <Functions value={value} setValue={setValue} />
    </div>
  );
}
