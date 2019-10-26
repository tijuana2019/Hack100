import React, { useState } from "react";
import "../styles/Signup.css";
import { useHistory } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleSubmit = e => {
    // Need to hook up to backend.
    history.push("/Preferences");
    console.log("Submitted :) ");
  };
  const handleChange = e => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="Signup">
      <div className="userProfile">
        <label className="usernameInput">
          USERNAME:
          <input
            placeholder="Enter your Username..."
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>

        <label className="passwordInput">
          PASSWORD:
          <input
            placeholder="Enter your Password..."
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Signup;
