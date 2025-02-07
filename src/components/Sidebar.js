import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h4>Sidebar</h4>

            <div className="menu">
                <ul className='menus'>
                    <li className='menu-items'>Dashboard</li>
                    <li className='menu-items'>Users</li>
                    <li className='menu-items'>Setting</li>
                    <li className='menu-items'>Information</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
