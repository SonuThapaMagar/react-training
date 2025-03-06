import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <button className="menu-toggle" onClick={toggleSidebar}>
                <IoMenu />
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>

                <div className="sidebar-header">
                    {/* Close Button */}
                    <button className="close-btn" onClick={closeSidebar}>
                        <IoClose />
                    </button>
                </div>

                <ul>
                    <li className='menu-items'>
                        <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'active' : '')} end>
                            <span>
                                <MdDashboard />
                                Dashboard
                            </span>
                        </NavLink>
                    </li>
                    <li className='menu-items'>
                        <NavLink to="/admin/users" className={({ isActive }) => (isActive ? 'active' : '')} end>
                            <span>
                                <FaUser />
                                Users
                            </span>
                        </NavLink>
                    </li>
                    <li className='menu-items'>
                        <NavLink to="/admin/setting" className={({ isActive }) => (isActive ? 'active' : '')} end>
                            <span>
                                <IoSettings />
                                Setting
                            </span>
                        </NavLink>
                    </li>
                    <li className='menu-items'>
                        <NavLink to="/admin/login">
                            <span>
                                <IoIosLogOut />
                                Logout
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
