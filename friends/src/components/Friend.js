import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Friend(props) {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    console.log(props);
    axiosWithAuth()
      .get(props.match.url)
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
}
