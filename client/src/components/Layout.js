import React from 'react'
import Navbar from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main  style={{ minHeight: "auto", backgroundColor:'#f0f2f5',
                 color: 'black' }}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout