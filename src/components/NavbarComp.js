import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavbarComp = (props) => {

  const location = useLocation()
  const userPage = location.pathname.split('/')[1]

  return (
    <nav>
      <div className={`${props.theme.bg} w-screen h-16  fixed top-0 flex justify-between pl-5 items-center z-10 shadow-smooth`} >
        <div className='text-xl md:text-5xl font-semibold text-white '>HEALTHER</div>
        <div className='text-3xl hover:scale-125 duration-300 p-4' onClick={props.changeTheme} ><i class="fa-solid fa-lightbulb"></i></div>
        <div className={`${props.theme.card} w-2/3 xl:w-1/2 h-12 float-right nav-round hidden md:block`}
          style={{ borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }}>
          <div className="flex mt-3 ml-8 font-normal">
            <Link to="/" className={`${userPage === "" ? "active-link" : ""}  nav-links mr-10 lg:mr-16 2xl:mr-20 cursor-pointer font-regular active:text-themegreen`}>Home</Link>
            <Link to="/dashboard" className={`${userPage === "dashboard" ? "active-link" : ""}  nav-links mr-10 lg:mr-16 2xl:mr-20 cursor-pointer font-regular active:text-themegreen`}>Dashboard</Link>
            <Link to="/doctors" className={`${userPage === "doctors" ? "active-link" : ""}  nav-links mr-10 lg:mr-16 2xl:mr-20 cursor-pointer font-regular active:text-themegreen`}>Doctors</Link>
            <Link to="/about" className={`${userPage === "about" ? "active-link" : ""}  nav-links mr-10 lg:mr-16 2xl:mr-20 cursor-pointer font-regular active:text-themegreen`}>About</Link>
            <Link to="/login" className={`${userPage === "login" ? "active-link" : ""}  nav-links mr-10 lg:mr-16 2xl:mr-20 cursor-pointer font-regular active:text-themegreen`}>Login</Link>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComp