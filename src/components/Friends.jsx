import React from "react";
import Button from "./Button";

function Friends({ friend }) {
  return (
    <li>
      <img src={friend.image} alt="" />
      <div>
        <h3>{friend.name}</h3>
        <p
          className={`${
            friend.balance < 1 && friend.balance !== 0 ? "red" : ""
          }`}
        >
          {friend.balance < 1 &&
            friend.balance !== 0 &&
            `you owe ${friend.name} ${friend.balance}`}
        </p>

        <p className={`${friend.balance >= 1 ? "green" : ""}`}>
          {friend.balance >= 1 && `${friend.name} owes you ${friend.balance}`}
        </p>

        <p>{friend.balance === 0 && `You and ${friend.name} are even`}</p>
      </div>

      <Button>Select</Button>
    </li>
  );
}

export default Friends;
