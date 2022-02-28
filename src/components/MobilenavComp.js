import React from 'react'
import { Link, useLocation } from 'react-router-dom'



const MobilenavComp = (props) => {
  const location = useLocation()
  const userPage = location.pathname.split('/')[1]

  return (
    <div className={`${props.theme.mobilenav} w-screen h-16  fixed bottom-0 block md:hidden z-10`} style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
      <div className="flex w-full h-full px-6 items-center justify-between text-3xl font-thin">
        <Link to="/about" className={`${userPage === "/about" ? "active-link" : ""} nav-links text-2xl`}><i class="fa-solid fa-address-card text-themegreen "></i></Link>
        <Link to="/dashboard" className={`${userPage === "/dashboard" ? "active-link" : ""} nav-links text-2xl`}><i className="fa-solid fa-border-all text-themegreen "></i></Link>
        <Link to="/" className={`${userPage === "" ? "active-link" : ""} nav-links text-2xl`}><i className="fas fa-home text-themegreen "></i></Link>
        <Link to="/login" className={`${userPage === "/login" ? "active-link" : ""} nav-links text-2xl`}><i className="fa-solid fa-arrow-right-to-bracket text-themegreen "></i></Link>
        <Link to="/doctors" className={`${userPage === "/doctors" ? "active-link" : ""} nav-links text-2xl`}><i className="fa-solid fa-magnifying-glass text-themegreen "></i></Link>

      </div>
    </div>
  )
}

export default MobilenavComp