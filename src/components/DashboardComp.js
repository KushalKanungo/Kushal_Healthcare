import React from 'react'

import bin from '../img/bin.svg'
import reload from '../img/reload.svg'
import person1 from '../img/person1.svg'
import person2 from '../img/person2.svg'

import { Link } from 'react-router-dom'


const Member = (props) => {
  return (
    <div className={`flex items-center m-2 hover:${props.theme.textfield} rounded-3xl p-3 cursor-pointer`}>
      <div className='bg-themegreen h-12 w-12 rounded-full'>
        <img src={props.icon} alt="" srcset="" />
      </div>
      <div className='text-3xl font-light ml-4 '>{props.name}</div>
    </div>
  )
}

const DashboardComp = (props) => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
  return (
    <div className='mx-4 sm:mx-12 lg:mx-32 2xl:mx-64 duration-500 pb-20 md:pb-48 2xl:mb-96'>
      <div className={`${props.theme.bg} absolute h-44 top-0 left-0 w-screen -z-10  md:hidden`}></div>
      <img src={props.theme.wave} alt="An SVG" className='absolute top-32 md:top-0 left-0 -z-10' />
      <div className="flex flex-col sm:flex-row justify-between mt-40 items-center">
        <div className=" text-4xl md:text-6xl 2xl:text-7xl font-bold text-white">DASHBOARD</div>
        <Link to="/doctors" className={`${props.theme.logincolor} text-themegreen text-2xl px-6 py-4 rounded-[100px] mt-6 flex items-center shadow-smooth`}>Book Appointment</Link>
      </div>

      <div className="block md:flex ">

        <div className={`${props.theme.card}  rounded-3xl h-[250px] sm:h-[300px] 2xl:h-[400px]  md:w-3/5  shadow-smooth mt-20 overflow-hidden flex whitespace-nowrap fadeInDown`}>

          <div className='flex flex-col justify-between pl-8 md:pl-16 h-full'>
            <div className='font-light text-sm sm:text-lg mt-4'>UPCOMING APPOINTMENT</div>

            <div className='text-3xl sm:text-4xl  md:text-5xl lg:text-6xl 2xl:text-7xl'>
              <div className=" text-themegreen font-semibold w-max">Today</div>
              <div className="  font-light w-max">2 Mar 2022</div>
              <div className="  font-semibold w-max">6:30 A.M.</div>
            </div>

            <div className=' text-lg sm:text-xl mb-4'>with <span className='font-bold'> Dr. Kushal Kanungo</span></div>
          </div>
          <div className='flex flex-col h-full  justify-center  items-center w-full'>
            <div className="h-12 w-12 sm:h-14  sm:w-14 md:h-20 md:w-20 bg-themegreen hover:bg-themegreendark rounded-2xl m-4 p-3 md:p-5">
              <img src={reload} alt="" srcset="" /> </div>
            <div className="h-12 w-12 sm:h-14  sm:w-14 md:h-20 md:w-20 bg-themegreen hover:bg-themegreendark rounded-2xl m-4 p-3 md:p-5">
              <img src={bin} alt="" srcset="" />
            </div>
          </div>
        </div>


        <div className={` ${props.theme.card}  border-themegreen border-2 shadow-smooth rounded-3xl mt-4 md:mt-20 md:ml-8 2xl:ml-20 md:w-2/5  px-5 pb-4 fadeInDown`}>
          <div className='font-light text-sm sm:text-lg mt-4 mb-4'>Tip of the day</div>
          <span className={`${props.theme.text} text-2xl font-light  `}> Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship
          </span>
        </div>


      </div>
      <div className={`${props.theme.card}  w-full pt-4 shadow-smooth mt-4 md:mt-20 rounded-3xl px-10 md:px-20 fadeInDown`}>

        <div className='font-light text-sm sm:text-lg '>Your Family</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          <Member name="Kushal" icon={person1} theme={props.theme} />
          <Member name="Sanjeev" icon={person2} theme={props.theme} />
          <Member name="Rohit" icon={person1} theme={props.theme} />
          <div className={`text-2xl mt-4 ml-2 mb-4 cursor-pointer hover:${props.theme.textfield}  rounded-3xl p-4`}>+ Add Friend</div>

        </div>
      </div>
    </div>
  )
}

export default DashboardComp