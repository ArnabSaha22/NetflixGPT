import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validData, validData2 } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false); //State variable used to toggle between SignIn and SignUp on the same page.
  //useRef used below to reference the input fields and access the data (can be done via useState as well)
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [errorMsg, setErrorMsg] = useState(null); //State variable to set the error message on incorrect data entry
  const toggleSignInForm = () => {
    //Function to toggle between SignIn and SignUp
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data for Sign In part (Validation function written in utils folder)
    const msg = validData(email.current.value, password.current.value);
    setErrorMsg(msg);
  };

  const handleButtonClick2 = () => {
    //Validate the form data for Sign Up part (Validation function written in utils folder)
    const msg2 = validData2(
      email.current.value,
      password.current.value,
      confirmPassword.current.value
    );
    setErrorMsg(msg2);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black my-48 mx-auto right-0 left-0 h-96 w-96 m-5 p-5 text-white rounded-lg bg-opacity-70"
      >
        <h3 className="text-2xl py-4 font-sans">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h3>
        {isSignInForm ? (
          <input
            type="text"
            placeholder="Name"
            className="p-1 m-1 w-full rounded-lg font-sans text-black"
            required
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="p-1 m-1 w-full rounded-lg font-sans text-black"
          ref={email}
          required
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="p-1 m-1 w-full rounded-lg text-black"
          ref={password}
          required
        />
        {isSignInForm ? (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-1 m-1 w-full rounded-lg text-black"
            ref={confirmPassword}
            required
          />
        ) : null}
        <br></br>
        <p>{errorMsg}</p>
        {isSignInForm ? (
          <button
            className="p-2 m-2 bg-red-700 rounded-lg"
            onClick={handleButtonClick2}
          >
            Sign Up
          </button>
        ) : (
          <button
            className="p-2 m-2 bg-red-700 rounded-lg"
            onClick={handleButtonClick}
          >
            Sign In
          </button>
        )}
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
