import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const addNewFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(addNewFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👭 Friend Name</label>
      <input type="text" value={name} onChange={handleChangeName} id="name" />
      <label htmlFor="image">🖼️ Image URL</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={handleChangeImage}
      />

      <Button type="submit">Add</Button>
    </form>
  );
}

export default FormAddFriend;
