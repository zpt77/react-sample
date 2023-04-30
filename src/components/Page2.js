import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page2() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState(true);
  const [bankAccount, setBankAccount] = useState(0);

  const handleRegister = event => {
    event.preventDefault();
    const requestOptions = {
      method:'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        name: name,
        surname: surname,
        gender: gender,
        bank_account: bankAccount
      })
    }
    console.log('User registered:', { username, email, password, name, surname, gender, bank_account: bankAccount });
    
    fetch('/add_user', requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Registration failed');
      }
    })
    .then(data => {
      setData(data);
      toast.success(data.message);
    })
    .catch(error => {
      console.error(error);
      toast.error(data.message);
    });  
  };  
    
  return (
    <div className="container">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Surname"
          onChange={e => setSurname(e.target.value)}
        />
        <div className="radio-wrapper">
          <span className="radio-label">Gender:</span>
            <label>
              <input
                className="radio"
                type="radio"
                name="gender"
                value="true"
                checked={gender}
                onChange={() => setGender(true)}
              />
              Male
            </label>
            <label>
              <input
                className="radio"
                type="radio"
                name="gender"
                value="false"
                checked={!gender}
                onChange={() => setGender(false)}
              />
              Female
            </label>
        </div>

        <input
          className="input"
          type="number"
          placeholder="Bank account"
          onChange={e => setBankAccount(e.target.value)}
        />
        <button className="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      {/* Wykorzystanie zmiennej "data" w celu wyświetlenia potwierdzenia rejestracji */}
      {data ? (
        <div>
          <p>Registration successful for {data.username}!</p>
        </div>
      ) : (
        <p>Please register</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default Page2;
