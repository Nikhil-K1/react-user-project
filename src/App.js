import React from "react";
import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [list, setList] = useState([]);
  const setUserList = (value) => {
    setList((prevState) => {
      return [...prevState, value];
    });
  };

  return (
    <div>
      <AddUser onAdd={setUserList} />
      <UserList data={list} />
    </div>
  );
}

export default App;
