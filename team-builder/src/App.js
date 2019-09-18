import React, { useState } from "react";
import Data from "./data";
import TeamMember from "./components/TeamMembers";
import TeamForm from "./components/TeamForm";

function App() {
  const [person, setPerson] = useState(Data);
  const addNewMember = item => {
    setPerson([...person, item]);
  };
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamMember name={person} />
      <TeamForm addNewMember={addNewMember} />
    </div>
  );
}

export default App;
