import React, { useState } from "react";

import Toggle from "./Toggle";
import "./App.css";
import ToggleContext from "./ToggleContext";
function App() {
  const activeArr = useState([]);
  return (
    <div className="app">
      <ToggleContext.Provider value={activeArr}>
        <Toggle name="GOOD" />
        <Toggle name="FAST" />
        <Toggle name="CHEAP" />
      </ToggleContext.Provider>
    </div>
  );
};
export default App;
