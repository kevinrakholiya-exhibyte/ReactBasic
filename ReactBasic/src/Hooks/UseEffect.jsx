import React, { useEffect } from 'react'

const UseEffect = () => {

    // Runs On Every Render
    useEffect(() => {
        console.log("Component rendered!");
    });

    // Runs Only One Time When Component Mount
    useEffect(() => {
        console.log("Runs once when page Mount");
    }, []);

    // Runs When Specific State Or Props Change
    useEffect(() => {
        console.log("State changed!");
    }, [count]);

    return (
        <div></div>
    )
}

export default UseEffect