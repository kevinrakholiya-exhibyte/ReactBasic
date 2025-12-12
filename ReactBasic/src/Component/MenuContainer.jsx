import React, { useEffect, useState } from 'react'
import MenuList from '../Pages/MenuList';

const MenuContainer = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("/api/menu")
            .then(res => res.json())
            .then(data => setMenu(data));
    }, []);

    return (
        <div>
            <MenuList items={menu} />
        </div>
    )
}

export default MenuContainer