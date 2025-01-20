import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/48?");

  function handleChangeFriendName(e) {
    setFriendName(e.target.value);
  }

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!friendName) return;

    const id = crypto.randomUUID();
    const addNewFriend = {
      name: friendName,
      image: `${avatar}/${id}`,
      id,
    };
    console.log(addNewFriend);
    onAddFriend(addNewFriend);

    setFriendName("");
    setFriendName("https://i.pravatar.cc/48");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👭 Friend Name</label>
      <input
        type="text"
        value={friendName}
        onChange={handleChangeFriendName}
        id="name"
      />
      <label htmlFor="image">🎞️ Avatar</label>
      <input
        type="text"
        id="image"
        value={avatar}
        onChange={handleChangeAvatar}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
