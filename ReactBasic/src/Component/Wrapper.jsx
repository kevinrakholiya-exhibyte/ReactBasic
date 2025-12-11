import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div style={{ border: "2px solid blue", padding: "20px", margin: "20px" }}>
            {children}
        </div>
    )
}

export default Wrapper