import React from 'react'
import { NavLink } from "react-router";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="menu">
                <ul className='menus'>
                    <li className='menu-items'>
                        <NavLink to="/dashboard" end>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className='menu-items'>
                        <NavLink to="/users" end>
                            Users
                        </NavLink>
                    </li>
                    <li className='menu-items'>
                        <NavLink to="/setting" end>
                            Setting
                        </NavLink></li>
                    <li className='menu-items'>Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
