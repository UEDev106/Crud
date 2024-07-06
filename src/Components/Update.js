import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
    setPassword(localStorage.getItem("password") || "");
    setId(localStorage.getItem("id") || "");
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://665d7af7e88051d60406c944.mockapi.io/crud/crud-operation/${id}`, {
      name: name,
      email: email,
      password: password,
    })
    .then(() => {
      navigate('/read'); // Navigate to the read page after successful update
    })
    .catch((error) => {
      console.error('Error updating data:', error);
    });
  };

  return (
    <>
      <h1>Update</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We shall never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mx-2">
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2">
            Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
