import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SaasFeature from "./SaaS/SaasFeature";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SaasFeature />
    </>
  );
}

export default App;
