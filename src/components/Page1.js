import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page1() {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST' ,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: login, password: password })
    };
    fetch('/login', requestOptions)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then(data => {
        setData(data);
        toast.success(`Welcome ${login}!`);
      })
      .catch(error => {
        console.error(error);
        toast.error("Login failed");
      });
  };

  useEffect(() => {
    // Obsługa żądania GET /
    fetch('/name', { method: 'GET' })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then(data => {
        console.log("Running on server:", data.server_name); // Dodana linijka kodu
      })
      .catch(error => {
        console.error(error);
        toast.error("Failed to fetch data");
      });
  }, []);
  

  return (
    <div className="container">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Login"
          onChange={e => setLogin(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {data.length ? (
        <div>
          <p>Welcome {data.username}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
      <ToastContainer />
    </div>
  );
}


export default Page1;
