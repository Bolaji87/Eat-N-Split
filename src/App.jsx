import React from "react";
import { initialFriends } from "./utils";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          {initialFriends.map(function (friend) {
            return <Friends key={friend.id} friend={friend} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
