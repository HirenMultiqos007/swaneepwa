import React from 'react'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import { contactus, home } from '../../config/RoutingConsts'

const Layout = () => {
   const {pathname}= useLocation ();

    return (
        <>
            <Header />
            <div className={`main ${pathname === home?"homepage":"" || pathname ===contactus  ?"contactpage":""}`}>
                <Outlet />
            </div>
            <Footer />  
        </>
    )
}

export default Layout
