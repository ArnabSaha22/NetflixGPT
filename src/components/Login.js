import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background Img"
          className="absolute"
        ></img>{" "}
      </div>
      <form className="absolute w-2/12 bg-black my-48 mx-auto right-0 left-0 h-96 w-96 m-5 p-5 text-white rounded-lg bg-opacity-70">
        <h3 className="text-2xl py-4 font-sans">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h3>
        {isSignInForm ? (
          <input
            type="text"
            placeholder="Name"
            className="p-1 m-1 w-full rounded-lg font-sans text-black"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="p-1 m-1 w-full rounded-lg font-sans text-black"
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="p-1 m-1 w-full rounded-lg text-black"
        />
        {isSignInForm ? (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-1 m-1 w-full rounded-lg text-black"
          />
        ) : null}
        <br></br>
        <button className="p-2 m-2 bg-red-700 rounded-lg">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <h4 className="pt-3 text-sm">
          {!isSignInForm ? (
            <>
              <span className="font-extralight text-gray-400">
                New to Netflix?
              </span>{" "}
              <Link to="/" onClick={toggleSignInForm}>
                SignUp now
              </Link>
            </>
          ) : (
            <>
              <span className="font-extralight text-gray-400">
                Already have an Account?
              </span>{" "}
              <Link to="/" onClick={toggleSignInForm}>
                SignIn
              </Link>
            </>
          )}
        </h4>
        <h4 className="font-extralight text-gray-400 text-xs">
          Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
        </h4>
      </form>
    </div>
  );
};
export default Login;
