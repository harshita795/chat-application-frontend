import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Chat } from "./components/Chat";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <h1>Chat App</h1>
      {!user ? (
        <div className="container mt-5 text-center">
          <div className="row">
            <div className="col-md-6">
              <Register setUser={setUser} />
            </div>
            <div className="col-md-6">
              <Login setUser={setUser} />
            </div>
          </div>
        </div>
      ) : (
        <Chat user={user} />
      )}
    </div>
  );
};

export default App;
