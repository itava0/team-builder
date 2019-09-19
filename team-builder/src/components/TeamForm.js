import React, { useState } from "react";

const TeamForm = props => {
  console.log(props);
  const [person, setPerson] = useState({
    name: "",
    email: "",
    role: ""
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
        placeholder="Type your name"
        value={person.name}
        required
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Type your email"
        value={person.email}
        required
        onChange={changeHandler}
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        placeholder="Type your role"
        value={person.role}
        required
        onChange={changeHandler}
      />
      <button type="submit">Add Information</button>
    </form>
  );
};
export default TeamForm;
