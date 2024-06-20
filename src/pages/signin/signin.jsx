import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 gap-4">
        <h2 className="text-lg">Welcome Back!</h2>
        <div className="flex flex-col justify-center items-center p-8 gap-4 bg-[#212020] rounded-xl">
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <form
            className="flex flex-col justify-center items-center p-8 gap-6"
            action=""
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 rounded-full"
            />
            <input
              type="text"
              placeholder="Enter your password"
              className="p-3 rounded-full"
            />
            <Link to="/forgot">Forgot Password</Link>
            <button type="submit">Sign In</button>
          </form>
          <Link to="/signup">Don&apos;t have an account?</Link>
          <h3>OR</h3>
          <Link>Hive</Link>
        </div>
      </div>
    </>
  );
}

export default Signin;
