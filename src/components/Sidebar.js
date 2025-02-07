import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="menu">
                <ul className='menus'>
                    <li className='menu-items'>Dashboard</li>
                    <li className='menu-items'>Users</li>
                    <li className='menu-items'>Setting</li>
                    <li className='menu-items'>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
