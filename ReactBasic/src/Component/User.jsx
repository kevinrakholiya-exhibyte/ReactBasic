import React, { useContext } from 'react'
import { UserContext } from '../ContextAPI/UserContext';

const User = ({ age, uid }) => {
    const { name } = useContext(UserContext);
    return (
        <>
            <div>
                <h1>User ID :{uid}</h1>
                <h2>User Name :{name}</h2>
                <h3>User Age :{age}</h3>
            </div>
        </>
    )
}

export default User