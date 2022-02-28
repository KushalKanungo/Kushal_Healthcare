
import doctor from '../img/doctors_patient.svg'
import login from '../img/login.svg'
import google from '../img/google.svg'
import fb from '../img/fb.svg'
import person1 from '../img/person1.svg'

import React from 'react'
import { Link } from 'react-router-dom'


const LoginComp = (props) => {

  window.scroll({
    top: 0,
    behavior: "smooth"
  })

  return (
    <div className='mx-4 sm:mx-12 lg:mx-32 2xl:mx-64 duration-500 flex justify-center mt-10 xl:mt-32 2xl:mt-60 pb-20 md:pb-48 2xl:mb-96'>

      <div className={`${props.theme.bg} absolute h-44 top-0 left-0 w-screen -z-10  md:hidden`}></div>
      <img src={props.theme.wave} alt="An SVG" className='absolute top-32 md:top-0 left-0 -z-10' />


      <div className=' w-[700px] h-[450px] shadow-2xl rounded-3xl flex  overflow-hidden mt-24 md:mt-32 lg:mt-12  2xl:24 fadeInDown'>
        <div className={`${props.theme.logincolor} h-full w-7/12 md:flex flex-col items-center relative hidden`} >
          <div className='absolute left-6 top-4'>

            <div className=" text-3xl text-themegreen font-bold ">SIGN IN</div>
            <div className=" text-sm text-themegreen font-normal ">NEW HERE ? <Link to="/register" className={`${props.theme.text} underline`}>SIGN UP</Link></div>
          </div>
          <img src={doctor} className="mt-20" alt="" srcset="" />
          <div className="text-4xl text-themegreen mt-8 font-bold">HEALTHER </div>
        </div>

        <div className={` ${props.theme.bg} h-full w-full md:w-5/12 flex flex-col items-center justify-center shadow-smooth py-6`}>
          <div className={`${props.theme.logintext} text-3xl font-bold block md:hidden`}> SIGN IN</div>
          <div className={`${props.theme.logintext}text-sm  font-normal block md:hidden`} >NEW HERE ? <Link to="/register" className={`${props.theme.text} underline`}>SIGN UP</Link></div>
          <div className='bg-white h-24 w-24 rounded-full mt-8'>
            <img src={person1} className="w-full" alt="" srcset="" />
          </div>
          <input type="text" className='mt-8 w-2/3 bg-transparent border-white border-b text-sm text-white  placeholder:text-white' placeholder='Username' />
          <input type="password" className='mt-8 w-2/3 bg-transparent border-white border-b text-sm text-white  placeholder:text-white' placeholder='Password' />
          <div className="text-[0.6rem] font-light text-white mt-1">FORGET PASSWORD ?</div>
          <button className={`${props.theme.logincolor} text-themegreen p-2 mt-6 rounded-sm flex items-center px-4`}>Log In
            <img src={login} alt="" srcset="" className='h-5 ml-2' />
          </button>
          <div className="flex items-center mt-6">
            <span className='text-lg font-normal text-white '>or Login with</span>
            <span className='bg-white h-8 w-8 p-2 rounded-lg ml-2'>
              <img src={google} alt="" srcset="" />
            </span>
            <span className='bg-white h-8 w-8 p-2 rounded-lg ml-2'>
              <img src={fb} alt="" srcset="" />
            </span>
          </div>
        </div>
      </div>


    </div >
  )
}

export default LoginComp