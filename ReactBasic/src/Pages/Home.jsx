import React from 'react'
import CounterFunction from '../Component/CounterFunction'
import User from '../Component/User'
import UseState from '../Hooks/UseState'
import UseRef from '../Hooks/UseRef'
import UseMemo from '../Hooks/UseMemo'
import UserProvide from '../ContextAPI/UserProvide'


const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <CounterFunction />
            <UseState />
            <UseRef />
            <UseMemo />
            <UserProvide>
                <User age={21} uid={101} />
            </UserProvide>
        </div>

    )
}

export default Home