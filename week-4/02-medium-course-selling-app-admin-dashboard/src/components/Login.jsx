import React from "react";
import { useNavigate } from "react-router-dom"; 

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          username: username,  // Sending username in header
          password: password   // Sending password in header
        }
      });

      if (response.ok) {
        const data = await response.json();
        // You can handle the successful login here, like storing the token in state or localStorage.
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        // Handle login error here
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div>
      <h1>Login to admin dashboard</h1>
      <br />
      Username - <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      Password -{" "}
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      New here? <a href="/register">Register</a>
    </div>
  );
}

export default Login;
