import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./component/card/Card";
import Navbar from "./component/navbar/Navbar";
import { post } from "./data";
import { io } from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:5000");
    console.log(socket);
  }, []);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {post.map((item) => (
            <Card key={item.id} post={item} />
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
