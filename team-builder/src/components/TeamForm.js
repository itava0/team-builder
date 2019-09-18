import React, { useState } from "react";

const TeamForm = props => {
  console.log(props);
  const [person, setPerson] = useState({
    name: "",
    email: ""
  });

  const changeHandler = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
    console.log(event.target.name);
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...person,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setPerson({ name: "", email: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">New Member</label>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Type your email"
        value={person.email}
        onChange={changeHandler}
      />
      <button type="submit">Add Information</button>
    </form>
  );
};
export default TeamForm;
