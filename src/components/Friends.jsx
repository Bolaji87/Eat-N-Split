import React from "react";
import Button from "./Button";

function Friends({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map(function (friend) {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        );
      })}
    </ul>
  );
}

function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="" />
      <div>
        <h3>{friend.name}</h3>
        <p className={`${friend.balance < 0 ? "red" : ""}`}>
          {friend.balance < 0 &&
            `you owe ${friend.name} ${Math.abs(friend.balance)}`}
        </p>

        <p className={`${friend.balance > 0 ? "green" : ""}`}>
          {friend.balance > 0 && `${friend.name} owes you ${friend.balance}`}
        </p>

        <p>{friend.balance === 0 && `You and ${friend.name} are even`}</p>
      </div>

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
export default Friends;
