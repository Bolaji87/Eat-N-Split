import React, { useState } from "react";

import Friends from "./components/Friends";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";
import { initialFriends } from "./utils";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelctedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showFriend) => !showFriend);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelctedFriend(friend);
    setSelctedFriend((prev) => (prev?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          friends={friends}
          setFriends={setFriends}
          setSelctedFriend={setSelctedFriend}
        />
      )}
    </div>
  );
}

export default App;
