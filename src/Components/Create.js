import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("https://665d7af7e88051d60406c944.mockapi.io/crud/crud-operation", {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        console.log("Data created successfully");
        navigate('/read');
      })
      .catch((error) => {
        console.error("Error creating data:", error);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Create Data</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
               placeholder="Enter Your Email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
               placeholder="Enter Your Password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <Link to="/read">
            <button type="button" className="btn btn-secondary">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
