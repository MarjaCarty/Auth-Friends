import React, { useState } from "react";

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

export default function NewFriendForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="New Friend's Name"
        value={formValues.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="New Friend's Age"
        value={formValues.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="New Friend's Email"
        value={formValues.email}
        onChange={handleChange}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
}
