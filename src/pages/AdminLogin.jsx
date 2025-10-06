// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Tailwind.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Attempt Firebase login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const loggedInUser = userCredential.user;

      // Restrict to a single admin email
      const adminEmail = "fahmeetwalib@fadaktours.com";
      if (loggedInUser.email !== adminEmail) {
        await signOut(auth); // immediately sign out unauthorized user
        setError("Unauthorized: This account is not allowed to access admin.");
        return;
      }

      // Navigate to admin dashboard
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials or network issue");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-lg p-6 w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md p-2 mb-3"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-md p-2 mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
