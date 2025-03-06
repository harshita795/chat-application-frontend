import React, { useState } from "react";
import axios from "axios";

const Register = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerationSuccess, setRegistrationSuccess] = useState(null);

  const handleRegister = async () => {
    try {
      const { data } = await axios.post(
        "https://chat-application-backend-0nwz.onrender.com/auth/register",
        {
          username,
          password,
        }
      );

      setRegistrationSuccess(
        "You are registered successfully. Proceed to login."
      );
      setUser(data);
    } catch (error) {
      console.error(error.response?.data?.message || "Error registering user");
      setRegistrationSuccess(
        error.response?.data?.message || "Error registering user"
      );
    } finally {
      setTimeout(() => setRegistrationSuccess(null), 2000);
    }
  };

  return (
    <div className="card py-5 text-center">
      <div className="card-body px-5">
        <h2>Register</h2>
        <p>Not a user yet? Register here</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="form-control form-control-lg mt-3"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="form-control form-control-lg mt-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-success btn-lg mt-3"
          onClick={handleRegister}
        >
          Register
        </button>
        {registerationSuccess && <p>{registerationSuccess}</p>}
      </div>
    </div>
  );
};

export default Register;
