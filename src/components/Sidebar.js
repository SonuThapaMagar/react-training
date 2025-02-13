import React from 'react'
import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
// import { FaUser } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className='menu-items'>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <MdDashboard />
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
                <li className='menu-items'>
                    Logout</li>
            </ul>
        </div>
    )
}

export default Sidebar
