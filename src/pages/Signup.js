import React from "react";
import { useState } from "react";
import { signup } from "../controllers/authController";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = async () => {
    const formdata = {
      email,
      name,
      username,
      phoneNo,
      password,
      confirmPassword,
    };
    if ((await signup(formdata)) === 1) navigate("/home");
  };
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img
        className="absolute h-full opacity-90 -z-30 -ml-40 mr-96"
        src="./assets/blob3.svg"
        alt="blob"
      />
      <div className="flex w-full h-full justify-around items-center ">
        <div className="w-1/2">
          <form className="bg-[rgba(0,0,0,0.8)] shadow-md rounded-xl border-1 border-white px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 px-2">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(el) => {
                  setName(el.target.value);
                }}
              />
            </div>
            <div className="flex justify-between p-2 gap-3 items-center xs:flex-col sm:flex-row ">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phoneNo"
                >
                  Contact
                </label>
                <input
                  className="shadow appearance-none bg-white border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNo"
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  value={phoneNo}
                  onChange={(el) => {
                    setPhoneNo(el.target.value);
                  }}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow bg-white  rounded w-full py-2  text-gray-700  focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(el) => {
                    setUsername(el.target.value);
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="mb-3 px-2">
                <label
                  className="block text-gray-700 text-sm font-bold "
                  htmlFor="email"
                >
                  Email ID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                  id="email"
                  type="text"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(el) => {
                    setEmail(el.target.value);
                  }}
                />
              </div>

              <div className="flex p-2 gap-3 justify-between items-center">
                <div className="">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={(el) => {
                      setPassword(el.target.value);
                    }}
                  />
                  {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
                </div>
                <div className="">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                    id="confirmpassword"
                    type="password"
                    placeholder="******************"
                    value={confirmPassword}
                    onChange={(el) => {
                      setConfirmPassword(el.target.value);
                    }}
                  />
                  {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col justify-between">
              <button
                className="bg-blue-500 w-1/2 text-center hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitHandler}
              >
                Register
              </button>
              <a
                className="inline-block mt-3 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/login"
              >
                Already Have an account ?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
