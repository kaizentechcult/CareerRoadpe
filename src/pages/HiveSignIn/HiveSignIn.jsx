import React, { useState } from "react";
import Input from "../../components/Input/Input";
import logoHive from "/hiveLogo.png"
function HiveSignIn() {
  useState();
  const [username, setUsername] = React.useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col my-20 justify-center items-center p-4 gap-6 bg-[#212020] rounded-xl py-10 w-5/6 md:w-[25%]">
      <div className="w-[8rem] h-[8rem] bg-white rounded-full flex justify-center items-center">

      <img src={logoHive} alt="" />
      </div>
        <form
          action=""
          className="text-white text-center flex flex-col gap-6 w-5/6"
        >
          <h1 className="text-2xl font-semibold">Log in with HIVE</h1>
          <Input
            name="user name"
            id="username"
            placeholder="Enter your username"
            value={username}
            onchange={handleUsernameChange}
          />
          <button
            className="bg-[#4F7EC3] hover:text-white rounded-3xl px-6 py-3"
            type="submit"
          >
            Log in
          </button>
        </form>
        <div className="signin-link-container flex flex-col justify-center items-center gap-4">
          <a href="https://signup.hive.io/">Don&apos;t have an account?</a>
        </div>
      </div>
    </div>
  );
}

export default HiveSignIn;
