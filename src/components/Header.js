import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened. (Build an error page)
      });
  };
  return (
    <div className="absolute px-3 bg-gradient-to-b from-black z-10 w-screen flex">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="h-30 w-40"
      ></img>
      {user && (
        <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 py-2">
          <h3 className="py-2 text-white font-serif p-2">Hi User</h3>
          <button
            className="h-10 w-20 bg-red-900 rounded-lg text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
