import React from "react";
import Header from "../layouts/Header";
import Admin from "./Admin";
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios
          .get("http://localhost:3000/me", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setUser(res.data.username);
            console.log("hello");
          });
      }, []);
  return (
    <div>
        {user ? (<><Admin/> </>
        )
        : (<div> <h1>Welcome to course selling website!</h1>
        <p className="text-3xl">hii tailwind check</p></div>)}
    
    </div>
  );
}

export default Landing;
