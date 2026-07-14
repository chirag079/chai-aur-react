import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    // iss Context k through kya kya cheejo ka access mai dena chahta hu Read/Write k liye
    const [user, setUser]=useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider