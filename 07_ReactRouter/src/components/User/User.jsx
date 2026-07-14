import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { name } = useParams();

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          User Profile
        </h1>

        <div className="inline-block bg-orange-100 px-4 py-2 rounded-lg">
          <span className="text-gray-700 font-medium">
            User's Name:
          </span>{' '}
          <span className="text-orange-700 font-bold text-lg capitalize">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default User;