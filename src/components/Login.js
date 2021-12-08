import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "./../reducers/login.js";
import { useSelector, useDispatch } from "react-redux";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const state = useSelector((state) => {
    return {
      login: state,
    };
  });
  // console.log(state, "state");
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const [role, setRole] = useState("61a5fa9876f9a6e781a67319");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const result = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      // console.log(result.data.token);
      // setToken(result.data.token);
      // localStorage.setItem("token", token);
      const data = {
        user: result.data.result,
        token: result.data.token,
      };

      dispatch(login(data));
      navigate("/home");

    } catch (error) {
      console.log(error);
    }
  };

  // if the user does not have an account
  const toRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <h2>Please Login</h2>
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
      <hr />
      <br />
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
      <h3>You don't have account yet?</h3>
      <button onClick={toRegister}>Sign Up Now</button>
    </>
  );
};

export default Login;