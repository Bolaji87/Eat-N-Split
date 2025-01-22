import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({
  selectedFriend,
  setSelctedFriend,

  setFriends,
}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleBillChange(e) {
    setBill(Number(e.target.value));
  }

  function handleUserChange(e) {
    setPaidByUser(
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
    );
  }

  function handleWhoIsPayingChange(e) {
    setWhoIsPaying(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance:
                whoIsPaying === "user"
                  ? friend.balance + paidByFriend
                  : friend.balance - paidByUser,
            }
          : friend
      )
    );
    setSelctedFriend(null);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="number" value={bill} onChange={handleBillChange} />

      <label>🧍 Your expense</label>
      <input type="number" value={paidByUser} onChange={handleUserChange} />

      <label>👨🏽‍🤝‍👨🏾 {selectedFriend.name}'s expense</label>
      <input type="number" value={paidByFriend} disabled />

      <label>Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={handleWhoIsPayingChange}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button type="submit">Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
