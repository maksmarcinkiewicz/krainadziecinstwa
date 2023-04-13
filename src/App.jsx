import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
