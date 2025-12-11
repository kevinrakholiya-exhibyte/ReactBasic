import React, { useEffect, useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.style.color = "red"
        inputRef.current.placeholder = "Enter the Comments"
    }, [])



    return (
        <div>
            <div className="App">
                <label htmlFor="comment">comments</label>
                <br />
                {/* Attaching the ref to an element */}
                <textarea ref={inputRef} name="comment" rows={4} cols={20} ></textarea>
            </div>
        </div>
    )
}

export default UseRef