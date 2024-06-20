import { Link } from "react-router-dom";

function Signup() {
  // ig this button will submit the user to create the account
  const submit = () => {};
  return (
    <>
      {" "}
      <div className="flex flex-col justify-center items-center p-8 gap-4">
        <h2 className="text-lg">Welcome!</h2>
        <div className="flex flex-col justify-center items-center p-8 gap-4 bg-[#212020] rounded-xl">
          <h1 className="text-2xl font-semibold">Sign Up</h1>
          <form
            className="text-black flex flex-col justify-center items-center p-8 gap-6"
            action=""
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-full bg-[#D9D9D9]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-full bg-[#D9D9D9]"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="p-3 rounded-full bg-[#D9D9D9]"
            />
            <button
              className="bg-[#4F7EC3] hover:text-white rounded-3xl px-6 py-3"
              type="submit"
              onClick={submit}
            >
              Sign Up
            </button>
          </form>
          <Link to="/signin">already have an account?</Link>
          <h3>OR</h3>
          <Link>
            <img
              className="bg-white rounded-3xl w-[8rem] h-[4rem] hover:bg-gray-300"
              src="hiveLogo.png"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
