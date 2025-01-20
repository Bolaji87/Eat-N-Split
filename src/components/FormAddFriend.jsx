import React from "react";
import Button from "./Button";

function FormAddFriend() {
  return (
    <form action="" className="form-add-friend">
      <label htmlFor="">👭 Friend Name</label>
      <input type="text" />
      <label htmlFor="">🎞️ Avatar</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
