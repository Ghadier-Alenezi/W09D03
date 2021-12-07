import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "./../reducers/login.js";
import { useSelector, useDispatch } from "react-redux";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      login: state,
    };
  });

  const signIn = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      // console.log(result.data.token);
      const data = {
        token: result.data.token,
      };
      dispatch(login(data));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const toRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <h2>Login</h2>
      <hr />
      <br />
      <h3>Your Email</h3>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h3>Your Password</h3>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <hr />
      <br />
      <button onClick={signIn}> Sign in</button>
      <hr />
      <br />
      <h3>Register now if you haven't an account yet</h3>
      <button onClick={toRegister}>Sign Up Now</button>
    </>
  );
};

export default Login;
