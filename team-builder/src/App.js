import React, { useState } from "react";
import ReactDOM from "react-dom";
import Data from "./data";
import TeamMember from "./components/TeamMembers";

function App() {
  const [person, setPerson] = useState(Data);
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamMember name={person}/>
    </div>
  );
}

export default App;
