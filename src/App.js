import "./App.css";
import React, { useState } from "react";
import Card from "./component/card/Card";
import Navbar from "./component/navbar/Navbar";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          <Card />
          <span className="username">{username}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login </button>
        </div>
      )}
    </div>
  );
}

export default App;
