import React from 'react'
import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className='menu-items'>
                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <span>
                            <MdDashboard />
                            Dashboard
                        </span>
                    </NavLink>
                </li>
                <li className='menu-items'>
                    <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <span>
                            <FaUser />
                            Users
                        </span>
                    </NavLink>
                </li>
                <li className='menu-items'>
                    <NavLink to="/setting" className={({ isActive }) => (isActive ? 'active' : '')} end>
                        <span>
                            <IoSettings />
                            Setting
                        </span>
                    </NavLink></li>
                <li className='menu-items'>
                    <span>
                        <IoIosLogOut />
                        Logout
                    </span></li>
            </ul>
        </div>
    )
}

export default Sidebar
