import  { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    const userDetails = { name, email, password };
    try {
      const response = await axios.post('http://localhost:8080/api/login', userDetails);
      console.log('User details submitted:', response.data);
    } catch (error) {
      console.error('There was an error submitting the user details!', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onClickHandler}>
        <label htmlFor='name'>Name</label>
        <input type="text" placeholder='Name' onChange={nameHandler} value={name} id="name" />

        <label htmlFor='email'>Email</label>
        <input type="email" placeholder='Email' onChange={emailHandler} value={email} id="email" />

        <label htmlFor='password'>Password</label>
        <input type="password" placeholder='Password' onChange={passwordHandler} value={password} id="password" />

        <button type='submit'>
          Submit
        </button>
      </form>
      <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
