import { Outlet, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const isLogin = localStorage.getItem('is_login');
        if (isLogin !== '1') {
            navigate('/login');
        }
    }, []);
    
    return (
        <>
            <Header />
            <div className="main_wrapper">
                <Sidebar />
                <div className="main_body">
                    <div className="body">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
