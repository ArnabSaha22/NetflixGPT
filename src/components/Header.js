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
import { toggleGptSearchView } from "../utils/gptSlice";
import { setLanguageHindi } from "../utils/languageSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptEnabled = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    //Toggle the GPT search
    dispatch(toggleGptSearchView());
  };

  //Handle the language dropdown and set the language accordingly
  const handleLanguageChange = (e) => {
    dispatch(setLanguageHindi(e.target.value));
  };

  return (
    <div>
      {user && (
        <div className="absolute px-3 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
          {/* <img
            src={netflix_Logo}
            alt="Netflix Logo"
            className="h-30 w-40 flex jus"
          ></img> */}
          <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 py-2">
            <h3 className="py-2 text-white font-thin p-2">
              Hi {user.displayName},
            </h3>
            {gptEnabled && (
              <select
                className="h-10 w-20 bg-red-900 rounded-lg text-white"
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="hindi">Hindi</option>
              </select>
            )}
            <button
              className="h-10 w-28 bg-red-900 rounded-lg text-white"
              onClick={handleGptSearchClick}
            >
              {!gptEnabled ? "GPT Search" : "Home Page"}
            </button>
            <button
              className="h-10 w-20 bg-red-900 rounded-lg text-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
