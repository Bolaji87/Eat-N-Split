import React, { useState } from "react";
import { initialFriends } from "./utils";
import Friends from "./components/Friends";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
// import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          {friends.map(function (friend) {
            return <Friends key={friend.id} friend={friend} />;
          })}
        </ul>
      </div>

      <FormSplitBill />
      {friends && <FormAddFriend onAddFriend={handleAddFriend} />}
    </div>
  );
}

export default App;
