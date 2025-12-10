import React, { useState } from 'react'

const LoginPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }


    return (
        <div>
            {
                isLoggedIn ? (
                    <>
                        <h3>Welcome, User</h3>
                        <button onClick={handleLogout} style={{ background: "red", color: "#fff" }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={handleLogin} style={{ background: "green", color: "#fff" }}>
                            Login
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default LoginPage