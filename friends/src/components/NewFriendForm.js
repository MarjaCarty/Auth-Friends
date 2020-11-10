import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFriendValues = {
  name: "",
  age: "",
  email: "",
};

export default function NewFriendForm(props) {
  const [newFriend, setNewFriend] = useState(initialFriendValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFriend({ ...newFriend, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        props.getData();
        setNewFriend(initialFriendValues);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="New Friend's Name"
        value={newFriend.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="New Friend's Age"
        value={newFriend.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="New Friend's Email"
        value={newFriend.email}
        onChange={handleChange}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
}
