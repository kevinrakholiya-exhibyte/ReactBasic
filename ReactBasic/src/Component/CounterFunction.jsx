import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent';

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

    const increaseCountFuncion = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Count: {count}</h2>
            {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
            <ChildComponent increaseCount={increaseCountFuncion} />
        </div>
    )
}

export default CounterFunction