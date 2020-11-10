import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriendForm from "./NewFriendForm";
import axios from "axios";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
      <NewFriendForm />
    </div>
  );
}
