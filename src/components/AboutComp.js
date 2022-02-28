import React from 'react'


const AboutComp = (props) => {

  window.scroll({
    top: 0,
    behavior: "smooth"
  })

  return (
    <div className='mx-4 sm:mx-12 lg:mx-32 2xl:mx-64 duration-500  mt-10 xl:mt-32 2xl:mt-60 pb-20 md:pb-48 2xl:mb-96 '>

      <div className={`${props.theme.bg} absolute h-44 top-0 left-0 w-screen -z-10  md:hidden`}></div>
      <img src={props.theme.wave} alt="An SVG" className='absolute top-32 md:top-0 left-0 -z-10' />
      <div className="text-4xl  md:text-7xl mt-20 uppercase font-bold text-white">Design Heist </div>
      <ul className='text-xl md:text-3xl mt-10 font-light fadeInDown'>
        <li className='font-bold text-3xl md:text-5xl mb-4'>Kushal Kanungo</li>
        <li className='mt-4'>Team Name: Kushal</li>
        <li className='mt-4'>Used React JS (Single Page Website)</li>
        <li className='mt-4'>Used Tailwind Css</li>
        <li className='mt-4'>Created Two Navbars one for Mobile Device and Other for Big Devices </li>
        <li className='mt-4'>Try <span className='font-semibold'> Dark</span> Theme If bright colors hurting your eyes :)</li>
        <li className='mt-4'>Some Custom Css animations</li>
        <li className='mt-4'>In Doctors Page you can click on cards to go to doctor profile page </li>
        <li className='mt-4'>Created Two Theme Light & Dark (Bulb Icon on Navbar)</li>
        <li className='mt-4'>Your Theme Prefrence saving in local storage</li>

        <li className='mt-4'>Deploying On Vercel</li>
        <li className='mt-4'>Only Frontend</li>
        <li className='mt-4'>Footer is Not Completed</li>
        <li className='mt-4'>Links In navbar are just to show pages, In actual website all links will not be there </li>
      </ul>
    </div>
  )
}

export default AboutComp