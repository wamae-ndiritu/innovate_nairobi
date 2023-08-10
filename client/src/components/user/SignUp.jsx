import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./user.css";
import { register } from "../../redux/actions/userActions";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  register({ username, email, password }, dispatch);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(username);
  return (
    <form id="signup-form" className="form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button type="submit" id="signup-button">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
