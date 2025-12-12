import React from 'react'
import CounterFunction from '../Component/CounterFunction'
import User from '../Component/User'
import UseState from '../Hooks/UseState'
import UseRef from '../Hooks/UseRef'
import UseMemo from '../Hooks/UseMemo'
import UserProvide from '../ContextAPI/UserProvide'
import Wrapper from '../Component/Wrapper'
import MenuContainer from '../Component/MenuContainer'


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
            <Wrapper>
                <h3>Hello World</h3>
                <p>This is From Inside the wrapper</p>
            </Wrapper>
            <MenuContainer />
        </div>

    )
}

export default Home