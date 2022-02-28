import React from 'react'
import { Link } from 'react-router-dom'

// import person2 from '../img/person2.svg'
import person1 from '../img/person1.svg'






const Feedback = (props) => {
  return (


    <div className={`${props.theme.card} shadow-smooth p-4 relative rounded-br-3xl pt-10 h-36 md:h-52`} data-aos={props.animation} data-aos-delay="100" data-aos-duration="1200">
      <div className="absolute h-12 w-12 md:h-20 md:w-20 bg-themegreen  rounded-full -top-6  md:-top-10 overflow-hidden ">
        <img src={person1} className="w-full" alt="" srcset="" />


      </div>
      <div className="text-lg md:text-2xl text-themedark font-normal">{props.user}</div>
      <div className="text-sm md:text-xl font-light">{props.comment}</div>
      <span className='absolute bottom-4 '>★★★★★</span>
    </div>

  )
}

const Whycards = (props) => {
  return (
    <div
      data-aos={props.animation}
      data-aos-delay={props.delay}
      data-aos-duration="1000"
      className={`${props.theme.card} flex flex-col items-center justify-center rounded-2xl shadow-smooth w-full max-h-[300px] aspect-square`}>
      <div className='w-2/4 hover:scale-110 duration-700'>
        <img src={props.img} alt="" />
      </div>
      <div className={`${props.theme.text} text-sm sm:text-lg md:text-2xl font-light mt-2 `}> <span className='text-themegreen'>{props.nums}</span> {props.items}</div>
    </div>
  )
}


const HomeComp = (props) => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
  return (
    <div className='mx-4 sm:mx-12 lg:mx-20 2xl:mx-64 duration-500 pb-20 md:pb-48 2xl:mb-96 mt-10 xl:mt-32 2xl:mt-60 overflow-hidden'>
      <div className={`${props.theme.bg} absolute h-44 top-0 left-0 w-screen -z-10  md:hidden`}></div>
      <img src={props.theme.waveDoctor} alt="An SVG" className='absolute top-32 md:top-0 left-0 -z-10' />
      <div className="text-lg md:text-4xl xl:text-6xl float-right mt-32 font-bold text-white ">Your Health Our Duty</div>
      <div className=" text-3xl md:text-6xl  mt-72 xl:mt-[450px] mb-8 md:mb-20 font-thin">Register Now and get <span className="font-normal"> 50% discount </span>your first Appointment</div>
      <Link to="/login" className={`${props.theme.bg} text-3xl p-4 rounded-lg mr-6 text-white hover:bg-themegray shadow-xl`}>Login</Link>
      <Link to="/register" className={`${props.theme.bg} text-3xl p-4 rounded-lg text-white hover:bg-themegray shadow-xl`}>Register</Link>
      <div className=" text-3xl md:text-6xl  mt-40 mb-8 md:mb-20 font-thin">What are client says ?</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Feedback user="Ram" comment="This is a test comment" animation="fade-right" theme={props.theme} />
        <Feedback user="Mohan" comment="I really like this website" animation="fade-up" theme={props.theme} />
        <Feedback user="Mohan" comment="I really like this website" animation="fade-up" theme={props.theme} />
        <Feedback user="Vedic" comment="Oh this green accent color is just too refresing" animation="fade-left" theme={props.theme} />
      </div>
      <div className=" text-3xl md:text-6xl  mt-20 mb-6 md:mb-20 font-thin">Why choose us ?</div>
      <div className="grid grid-cols-3 gap-2 md:gap-6 xl:gap-4 justify-items-center">
        <Whycards img={props.theme.cityIcon} nums="200+" items="Cities" animation="zoom-in" delay="100" theme={props.theme} />
        <Whycards img={props.theme.scopeIcon} nums="5k+" items="Doctors" animation="zoom-in" delay="300" theme={props.theme} />
        <Whycards img={props.theme.customerIcon} nums="70k+" items="Users" animation="zoom-in" delay="500" theme={props.theme} />
      </div>
    </div>
  )
}

export default HomeComp