import React from 'react'

const ChildComponent = ({ increaseCount }) => {
    return (
        <button onClick={increaseCount}>
            Increase Count from Child
        </button>
    )
}

export default ChildComponent