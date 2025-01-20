import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, friends, setFriends }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendExpense = bill - expense;

  function handleBillChange(e) {
    setBill(Number(e.target.value));
  }

  function handleExpenseChange(e) {
    setExpense(Number(e.target.value));
  }

  function handleWhoIsPayingChange(e) {
    setWhoIsPaying(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance:
                whoIsPaying === "user"
                  ? selectedFriend.balance + friendExpense
                  : selectedFriend.balance - expense,
            }
          : friend
      )
    );
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="number" value={bill} onChange={handleBillChange} />

      <label>🧍 Your expense</label>
      <input type="number" value={expense} onChange={handleExpenseChange} />

      <label>👨🏽‍🤝‍👨🏾 {selectedFriend.name}'s expense</label>
      <input type="number" value={friendExpense} disabled />

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
