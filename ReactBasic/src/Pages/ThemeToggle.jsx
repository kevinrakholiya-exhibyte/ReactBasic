import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../Redux/themeSlice';

const ThemeToggle = () => {

    const mode = useSelector(state => state.theme.mode);
    const dispatch = useDispatch();

    return (
        <div style={{
            background: mode === "light" ? "#fff" : "#333",
            color: mode === "light" ? "#000" : "#fff",
            height: "200px",
            padding: "20px"
        }}>
            <h1>Current Theme: {mode}</h1>
            <button onClick={() => dispatch(toggleTheme())}>
                Toggle Theme
            </button>
        </div>
    )
}

export default ThemeToggle