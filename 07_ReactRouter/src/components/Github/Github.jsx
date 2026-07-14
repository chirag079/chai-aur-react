import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
//   const [followers, setFollowers] = useState(0);
//   const username = "chirag079";

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => response.json())
//       .then((data) => setFollowers(data.followers))
//       .catch((error) => console.error(error));
//   }, []);
const username="chirag079"
const data=useLoaderData();
  return (
    <div className="bg-gray-700 text-white p-6 rounded-xl">
      <h1 className="text-2xl font-bold text-orange-700 mb-2">
        GitHub Profile
      </h1>
      <p>Username: {username}</p>
      <p>Followers: {data.followers}</p>
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
} 