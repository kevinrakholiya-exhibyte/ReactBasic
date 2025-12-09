import React from 'react'
import CounterFunction from '../Component/CounterFunction'
import User from '../Component/User'
import UseState from '../Hooks/UseState'

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <CounterFunction />
            <UseState/>
            <User name="Kevin" age={21} uid={101}/>
        </div>

    )
}

export default Home