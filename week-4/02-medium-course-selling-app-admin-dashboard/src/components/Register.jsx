import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    }
  };

  return (
    <div>
      <h1>Sign Up for an Account</h1>
      <br />
      Username - <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      Password - <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSignup}>Sign Up</button>
      <br />
      <p>{message}</p>
      Already have an account? <a href="/login">Login</a>
    </div>
  );
}

export default Signup;
