import React, { useState } from "react";
import Input from "../../components/Input/Input";
// import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  useState();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  console.log(username, password);
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col justify-center items-center p-4 gap-6 bg-[#212020] rounded-xl py-10 w-5/6 md:w-[25%]">
        <form
          action=""
          className="text-white text-center flex flex-col gap-6 w-5/6"
        >
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <Input
            name="email"
            id="email"
            placeholder="Enter your email"
            value={username}
            onchange={handleUsernameChange}
          />
          <Input
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onchange={handlePasswordChange}
          />
          <button
            className="bg-[#4F7EC3] hover:text-white rounded-3xl px-6 py-3"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="signin-link-container flex flex-col justify-center items-center gap-4">
          <a href="https://signup.hive.io/">Don&apos;t have an account?</a>
          <span>OR</span>
          <a href="https://signup.hive.io/">
            <img
              className="bg-white rounded-3xl w-[8rem] h-[4rem] hover:bg-gray-300"
              src="hiveLogo.png"
              alt="Sign in with Hive"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
