import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();

    setUser({
      Username: username,
      Password: password,
    });
  };

  return (
    <form onSubmit={handleClick} className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
      >
        Sign In
      </button>
    </form>
  );
}

export default Login;