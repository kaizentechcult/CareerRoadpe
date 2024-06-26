import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col justify-center items-center p-8 gap-6 bg-[#212020] rounded-xl py-20">
        <form
          action=""
          className="text-white text-center flex flex-col gap-6 w-5/6"
        >
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <Input name="email" id="email" placeholder="Enter your email" />
          <Input
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button
            className="bg-[#4F7EC3] hover:text-white rounded-3xl px-6 py-3"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="signin-link-container flex flex-col justify-center items-center gap-4">
          <Link to="/signup">Don&apos;t have an account?</Link>
          <span>OR</span>
          <Link to="/signup">
            <img
              className="bg-white rounded-3xl w-[8rem] h-[4rem] hover:bg-gray-300"
              src="hiveLogo.png"
              alt="Sign in with Hive"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
