import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validData, validData2 } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { netflix_BgImage } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false); //State variable used to toggle between SignIn and SignUp on the same page.
  //useRef used below to reference the input fields and access the data (can be done via useState as well)
  const email = useRef(null);
  const userName = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null); //State variable to set the error message on incorrect data entry
  const toggleSignInForm = () => {
    //Function to toggle between SignIn and SignUp
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data for Sign In part (Validation function written in utils folder)
    const msg = validData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg === null) {
      //Validate an existing user(for SignIn form) if there is no error message
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleButtonClick2 = () => {
    //Validate the form data for Sign Up part (Validation function written in utils folder)
    const msg2 = validData2(
      email.current.value,
      password.current.value,
      confirmPassword.current.value
    );
    setErrorMsg(msg2);

    if (msg2 === null) {
      //Create a new user (for SignUp form) only if there is no error message
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //console.log(userName);
          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src={netflix_BgImage}
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
            ref={userName}
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
                New to Dummy Netflix?
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
