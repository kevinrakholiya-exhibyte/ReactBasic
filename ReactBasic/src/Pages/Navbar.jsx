import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav style={{ display: "flex", gap: "20px" }}>
                <Link to='/'>Home</Link>
                <Link to='/Product'>Product</Link>
                <Link to='/Aboutus'>About us</Link>
            </nav>
        </div>
    )
}

export default Navbar