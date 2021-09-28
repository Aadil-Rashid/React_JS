import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // setUserList(...userList, {'username':uName, 'age':uAge});
    setUserList((previousList) => {
      return [...previousList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <h2 className="quoteSec">
        A person who never made a mistake never tried anything new...
      </h2>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
