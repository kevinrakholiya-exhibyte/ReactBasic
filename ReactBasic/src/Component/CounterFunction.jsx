import React, { useEffect, useState } from 'react'

const CounterFunction = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {

        // Runs only one time when component is Mount 
        console.log("Component Is Mounted.....");

        return () => {
            // Runs when component unmounts
            console.log("Component unmounted");
        };
    }, [])

    // Runs When Count Value is changed
    useEffect(() => {
        console.log("Count updated:", count);
    }, [count])



    return (
        <div style={{ padding: "20px" }}>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default CounterFunction