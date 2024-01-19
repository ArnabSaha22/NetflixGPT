import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { netflix_Logo } from "../utils/Constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //useEffect placed in header as the navigation will work only inside the Route Provider  child components and --
  //-- Header is that child component that is present throughout our app.

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //We need to use it once so using it with useEffect hook
      if (user) {
        // If user is logged in for the first time or signs in we will the user details here and we can update the store from here
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse"); //Once the user is signed in navigate to browse page
      } else {
        // Once the user signs out we can update the store from here
        dispatch(removeUser());
        navigate("/"); //Once the user logs out navigate to the home page
      }
    });

    return () => unsubscribe(); //Unsubscribing to the onAuthStateChanged component when the component unmounts
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened. (Build an error page)
      });
  };
  return (
    <div className="absolute px-3 bg-gradient-to-b from-black z-10 w-screen flex">
      <img src={netflix_Logo} alt="Netflix Logo" className="h-30 w-40"></img>
      {user && (
        <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 py-2">
          <h3 className="py-2 text-white font-thin p-2">
            Hi {user.displayName},
          </h3>
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
