import React from "react";
import Analyzer from "./components/Analyzer";
import { Link, Route, Routes } from "react-router-dom";
import Tab from "./components/Tab";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Analyzer />} />
        <Route path="/tab" element={<Tab />} />
      </Routes>
    </div>
  );
};

export default App;
