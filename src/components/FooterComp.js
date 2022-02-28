import React from 'react'

const FooterComp = (props) => {
  return (
    <div className={`${props.theme.footer} w-full pt-20 px-6`}>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-32'>
        <div className="text-4xl text-white font-semibold">HEALTHER
          <span className='text-lg font-light'><br />Your Health, Our Duty</span>
        </div>
        <div className="text-2xl text-white ">Links
          <ul className='text-lg font-light pt-5'>
            <li>Home</li>
            <li>Dashboard</li>
            <li>About</li>
            <li>Doctors</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className="text-2xl text-white ">Office
          <div className='text-lg font-light'>Vaishali Nagar <br /> Jaipur Raj. <br /> 302021</div></div>
        <div className="text-2xl text-white ">Follow Us</div>
      </div>
      <div className='text-center mt-8 pb-8 text-white'> Copyright 2022 Made by Kushal</div>
    </div>
  )
}

export default FooterComp