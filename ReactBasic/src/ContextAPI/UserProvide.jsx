import React, { useState } from 'react'
import { UserContext } from './UserContext';

const UserProvide = ({ children }) => {
    const [name, setName] = useState("Kevin");

    return (
        <UserContext.Provider value={{ name }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvide