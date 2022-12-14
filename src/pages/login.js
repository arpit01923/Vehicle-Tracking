import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GrLogin } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setLoggedIn, setToken } from "../redux/slices/auth-slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { ...login };
      const response = await axios.post(
        "https://staging-api.tracknerd.io/v1/auth/login",
        data
      );
      console.log(response.data);
      dispatch(setLoggedIn());
      dispatch(setToken(response.data.token));
      setLogin({
        username: "",
        password: "",
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-[rgba(0,0,0,0.1)] w-screen h-screen flex items-center justify-center">
      <section className="w-500 h-400 bg-white p-5">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <GrLogin className="text-4xl my-5 mx-auto" />
        <form onSubmit={submitHandler}>
          <label className="text-lg block mt-5">Username</label>
          <input
            type="text"
            className="border-b-2 border-primary p-1 outline-none w-full"
            value={login.username}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, username: e.target.value }))
            }
            required
          />
          <label className="text-lg block mt-5">Password</label>
          <div className="relative">
            {showPassword ? (
              <AiFillEye
                onClick={() => setShowPassword(false)}
                className="text-xl absolute right-0"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setShowPassword(true)}
                className="text-xl absolute right-0"
              />
            )}
            <input
              type={showPassword ? "text" : "password"}
              className="border-b-2 border-primary p-1 outline-none w-full"
              value={login.password}
              onChange={(e) =>
                setLogin((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
          </div>
          <button className="w-full bg-primary my-5 py-2 rounded text-white">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
