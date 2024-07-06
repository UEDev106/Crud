import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://665d7af7e88051d60406c944.mockapi.io/crud/crud-operation")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://665d7af7e88051d60406c944.mockapi.io/crud/crud-operation/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.error('Error deleting data:', err);
      });
  };

  const setToLocalStorage = (id, name, email, password) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Read Operation</h1>
        <Link to="/create">
          <button className="btn btn-secondary">Create Data</button>
        </Link>
      </div>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="toggleDarkMode"
          checked={tableDark}
          onChange={() => setTableDark(!tableDark)}
        />
        <label className="form-check-label" htmlFor="toggleDarkMode">
          Dark Mode
        </label>
      </div>
      <table className= {`table ${tableDark ? 'table-dark' : 'table-light'}` }>
        <thead>
          <tr style={{marginLeft:"3px"}}>
            <th scope="col">#</th>
            <th scope="col" style={{marginLeft:"3px"}}>Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <Link to="/update">
                  <button className="btn btn-success" onClick={() => setToLocalStorage(item.id, item.name, item.email, item.password)}>
                    Edit
                  </button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
