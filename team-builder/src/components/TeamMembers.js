import React from "react";

const TeamMember = props => {
  console.log(props);
  return (
    <div className="members">
      {props.name.map(item => {
        return (
          <div className="person" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMember;
