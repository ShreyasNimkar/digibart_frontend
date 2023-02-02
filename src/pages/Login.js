import React from "react";
import { useState } from "react";
import { login } from "../controllers/authController";
import { useNavigate } from "react-router-dom";
const Login = (reloader) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async () => {
    const formdata = {
      username,
      password,
    };
    if (await login(formdata)) navigate("/");
  };
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img
        className="absolute h-full opacity-90 -z-30 -ml-40 mr-96"
        src="./assets/blob3.svg"
        alt="blob"
      />
      <div className="flex w-screen h-full justify-around items-center ">
        <div className="w-full max-w-xs  ">
          <form className="bg-black shadow-md rounded-xl border-white border-1 px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(el) => {
                  setUsername(el.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(el) => {
                  setPassword(el.target.value);
                }}
              />
            </div>
            <div className="flex items-center flex-col justify-between">
              <button
                className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitHandler}
              >
                Log In
              </button>
              <a
                className="inline-block mt-3 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
