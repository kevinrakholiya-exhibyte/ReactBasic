import React from 'react'

const MenuList = ({ items }) => {
    return (
        <div className="grid">
            {items.map(i => (
                <div
                    key={i.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "8px"
                    }}>
                    <h3>{i.name}</h3>
                    <p>Price: ₹{i.price}</p>
                    <p>Category: {i.category}</p>
                </div>
            ))}
        </div>
    )
}

export default MenuList