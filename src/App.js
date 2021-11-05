import "./App.css";
import React, { useState } from "react";
import Card from "./component/card/Card";
import Navbar from "./component/navbar/Navbar";
import { post } from "./data";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {post.map((item) => (
            <Card id={item.id} post={item} />
          ))}
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
