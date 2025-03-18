import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";
import { createStyles } from 'antd-style';
import { LogoutOutlined } from '@ant-design/icons';

const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
      &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
        > span {
          position: relative;
        }
  
        &::before {
          content: '';
          background: linear-gradient(135deg, #6253e1, #04befe);
          position: absolute;
          inset: -1px;
          opacity: 1;
          transition: all 0.3s;
          border-radius: inherit;
        }
  
        &:hover::before {
          opacity: 0;
        }
      }
    `,
}));

const Sidebar = () => {
    const { styles } = useStyle();

    const [size, setSize] = useState('large'); // default is 'middle'

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        localStorage.setItem('is_login', 0);
        navigate('/login');
    }

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
                        <button type="button" onClick={handleLogoutClick} className={({ isActive }) => (isActive ? 'active' : '')} end>
                            <span>
                                <LogoutOutlined />
                                Logout
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
