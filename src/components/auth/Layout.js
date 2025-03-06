import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <div className="main_wrapper">
                <Sidebar />
                <div className="main_body">
                    <div className="body">
                        <Outlet/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
