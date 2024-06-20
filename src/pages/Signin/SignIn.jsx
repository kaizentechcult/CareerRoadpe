import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 gap-4">
        <h2 className="text-lg">Welcome Back!</h2>
        <div className="flex flex-col justify-center items-center p-8 gap-4 bg-[#212020] rounded-xl">
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <form
            className="text-black flex flex-col justify-center items-center p-8 gap-6"
            action=""
          >
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
            <Link className="text-white" to="/forgot">
              Forgot Password
            </Link>
            <button
              className="bg-[#4F7EC3] hover:text-white rounded-3xl px-6 py-3"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <Link to="/signup">Don&apos;t have an account?</Link>
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

export default Signin;
