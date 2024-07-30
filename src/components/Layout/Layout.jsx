import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function () {
    return <>
        <Navbar />
        <div className="pt-[70px]">
            <Outlet></Outlet>
        </div>
        <Footer />
    </>
}
