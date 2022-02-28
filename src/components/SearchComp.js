
import person1 from '../img/person1.svg'
import React from 'react'
import { Link } from 'react-router-dom'


const doctors = [{
  doctorId: 1,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
},
{
  doctorId: 2,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
},
{
  doctorId: 3,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
},
{
  doctorId: 4,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
},
{
  doctorId: 5,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
},
{
  doctorId: 6,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
},
{
  doctorId: 7,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
},
{
  doctorId: 8,
  name: "Dr. Kushal Kanungo",
  type: "Physician",
  stars: "★★★★★"
}]





const SearchComp = (props) => {

  const renderDoctorCards = (doctors) => {
    return (doctors.map(doctor => <DocotorCard name={doctor.name} type={doctor.type} star={doctor.stars} key={doctor.doctorId} theme={props.theme} />))
  }

  const DocotorCard = (props) => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })

    return (
      <Link to="/doctors/1" className='hover:scale-105 duration-200' >
        <div className={`${props.theme.card} flex items-center shadow-smooth p-4 rounded-xl cursor-pointer  fadeInDown`} >
          <div className="bg-gray-200 h-16 w-16 rounded-full">
            <img src={person1} alt="" />
          </div>
          <div className='ml-2'>
            <div className='text-lg md:text-2xl'>{props.name}</div>
            <div className='text-themegreen text-sm md:text-xl font-light'>{props.type}</div>
            <div className='text-themegreen text-sm md:text-xl font-light'>{props.star}</div>
          </div>
        </div>
      </Link>

    )
  }

  return (
    <div className='mx-4 sm:mx-12 lg:mx-32 2xl:mx-64 duration-500  mt-10 xl:mt-32 2xl:mt-40 pb-20 md:pb-48 2xl:mb-96'>
      <div className={`${props.theme.bg} absolute h-44 top-0 left-0 w-screen -z-10  md:hidden`}></div>
      <img src={props.theme.wave} alt="An SVG" className='absolute top-32 md:top-0 left-0 -z-10' />
      <div className="flex flex-col sm:flex-row justify-between mt-40 items-center">
        <div className=" text-4xl md:text-6xl 2xl:text-7xl font-bold text-white">DOCTORS</div>
        <input type='text'
          placeholder='Search'
          className={`${props.theme.logincolor} placeholder:font-thin text-themegreen text-2xl px-6 py-2 rounded-[100px] flex items-center w-full mt-6 sm:mt-0 sm:w-72 shadow-md`} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 xl:gap-8 mt-10  md:mt-28">
        {renderDoctorCards(doctors)}
      </div>

    </div>
  )
}

export default SearchComp