import React from "react";


const TeamMember = props => {
  console.log(props);
  return (
    <div>
      {props.name.map(item => {
        return (
          <div  key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMember;
