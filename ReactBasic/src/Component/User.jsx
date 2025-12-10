import React from 'react'

const User = ({ name, age, uid }) => {
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