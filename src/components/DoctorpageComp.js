import React from 'react'
import person1 from '../img/person1.svg'
import '../animations.css'



const comments = [{
  id: 1,
  name: "User 1",
  comment: "Great Doctor, very humble and polite and treatment is effective",
  stars: "★★★★★"
},
{
  id: 2,
  name: "User 2",
  comment: "Great Doctor, very humble and polite and treatment is effective",
  stars: "★★★★★"
},
{
  id: 3,
  name: "User 3",
  comment: "Great Doctor, very humble and polite and treatment is effective",
  stars: "★★★★★"
},
{
  id: 4,
  name: "User 4",
  comment: "Great Doctor, very humble and polite and treatment is effective",
  stars: "★★★★★"
}]



const DoctorpageComp = (props) => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })

  const TopCommentsComp = (props) => {
    return (
      <div className={`${props.theme.bg} rounded-2xl aspect-auto p-6 text-white shadow-smooth`} data-aos="zoom-in" >
        <div className="text-sm lg:text-lg 2xl:text-xl font-extralight">{props.comment}</div>
        <div className="text-sm lg:text-xl 2xl:text-2xl float-right  italic font-light mt-2">- {props.name}</div>
        <div className="text-sm lg:text-xl 2xl:text-2xl font-extrabold text-center mt-6 md:mt-20"> {props.stars}</div>
      </div>
    )
  }

  const renderComments = (comments) => {
    let allcomments = comments.map(comment => <TopCommentsComp name={comment.name} comment={comment.comment} stars={comment.stars} key={comment.id} theme={props.theme} />)
    return (allcomments)
  }

  return (
    <div className='mx-4 sm:mx-12 xl:m-36 2xl:mx-48  pb-20 md:pb-48 2xl:mb-96 '>
      <div className={`${props.theme.bg} absolute h-44 top-0 left-0 w-screen -z-10  md:hidden`}></div>
      <img src={props.theme.wave} alt="An SVG" className='absolute top-32 md:top-0 left-0 -z-10' />
      <div className="flex items-center  mt-28 md:mt-12 2xl:mt-40">
        <div className=" w-[30vw] max-w-[18rem] aspect-square zoomIn">
          <img src={person1} alt="" srcset="" className='w-full' />
        </div>
        <div>
          <div className="text-xl sm:text-4xl lg:text-6xl font-semibold text-white whitespace-nowrap">Dr. Kushal Kanungo</div>
          <div className="text-lg sm:text-2xl lg:text-3xl font-light">Physician</div>
          <div className="text-lg sm:text-2xl lg:text-3xl font-light text-white">★★★★★</div>
        </div>
      </div>
      <div className="text-2xl sm:text-3xl lg:text-5xl mt-20 mb-4 sm:mb-20">Top Reviews</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6 2xl:gap-16  ">
        {/* <TopCommentsComp name="Kushal" comment="This is a test comment just for test" stars="★★★★★" />
        <TopCommentsComp name="Kushal" comment="This is a test comment just for test" stars="★★★★★" />
        <TopCommentsComp name="Kushal" comment="This is a test comment just for test" stars="★★★★★" />
        <TopCommentsComp name="Kushal" comment="This is a test comment just for test" stars="★★★★★" /> */}
        {renderComments(comments)}
      </div>
      <div className="flex justify-center">
        <div className={`${props.theme.card} shadow-smooth grid grid-cols-1 p-10 mt-6 rounded-3xl`}>
          <div className="text-xl text-themegreen">Take an Appointment</div>
          <input type="text" placeholder='Name' className={`${props.theme.textfield} p-3 mt-1`} />
          <input type="number" placeholder='Age' className={`${props.theme.textfield} p-3 mt-1`} />
          <select name="Gender" id="" placeholder='Gender' className={`${props.theme.textfield} p-3 mt-1`}>
            <option value="none">Gender</option>
            <option value="male">Male</option>
            <option value="female" >Female</option>
          </select>
          <input type="date" placeholder='' className={`${props.theme.textfield} p-3 mt-1`} />
          <textarea name="" id="" cols="30" rows="4" placeholder='Breif Desciption ' className={`border ${props.theme.textfield} mt-3`}></textarea>
          <button className='bg-themegreen rounded-lg px-4 h-16 text-white mt-6'>Book Appointment</button>
        </div>
      </div>

    </div>
  )
}

export default DoctorpageComp