import React, { useState } from 'react'

const UseState = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter a Password"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"} Password
            </button>
        </div>
    )
}

export default UseState