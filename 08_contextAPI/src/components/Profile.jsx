import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="text-center">
        <p className="text-slate-500">
          No user logged in yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
      <h2 className="text-lg font-semibold text-slate-800">
        Welcome 👋
      </h2>

      <p className="mt-2 text-green-700 font-medium">
        {user.Username}
      </p>
    </div>
  );
}

export default Profile;