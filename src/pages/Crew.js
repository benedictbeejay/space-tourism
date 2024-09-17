import React, {useState} from 'react'
import { BsCircle } from 'react-icons/bs'
import data from "../starter-code/data.json"
import Moon from "../starter-code/assets/crew/image-douglas-hurley.png"
import Mars from "../starter-code/assets/crew/image-mark-shuttleworth.png"
import Europa from "../starter-code/assets/crew/image-victor-glover.png"
import Titan from "../starter-code/assets/crew/image-anousheh-ansari.png"
// import Moon2 from "../../public/starter-code/assets/destination/image-moon.png"

const { crew } = data;

const imagePlanet = [Moon, Mars, Europa, Titan]

const Crew = () => {
  const [people] =useState(crew)
  const [value, setValue] = useState(0)
  const planetImages = imagePlanet[value]

  const {name, role, bio} =
  people[value]


  return (
    <>
      <section className='home crew px-5 h-full'>  
        <h1 className='md:absolute pt-8 lg:left-56 md:left-40 md:pt-32 relative left-1/2 w-fit -translate-x-1/2  lg:mx-auto lg:max-w-7xl text-white text-lg  uppercase md:text-2xl '>
          02 Meet your Crew
        </h1>
        <div className=' flex items-center justify-center flex-col-reverse top-1/2  md:mt-0 relative -translate-y-1/2 md:pt-20 md:grid md:grid-cols-2 md:gap-5 md:items-center lg:max-w-6xl lg:mx-auto'>

          <article className='text-center md:text-left md:mt-0 '>

            <h4 className='uppercase text-gray-400 mt-2 mx-2 md:mb-4 text-2xl'>{role}</h4>
            <h2 className='text-3xl md:text-3xl font-bold text-white mb:mt-4 mb-4 md:mx-2 uppercase tracking-widest'>
              {name}
            </h2>
            <p className='text-gray-400 md:mx-2 pb-2 md:pb-5'>
              {bio}
            </p>

            {people.map((item, index) => (
              <button key={index} onClick={() => setValue(index)} 
              className={`uppercase text-white sm:text-xl text-xl h-5 rounded-full pb-2 mx-2 
                ${index === value && "bg-white rounded-full"}`}>
                <BsCircle className='h-5 w-5' />
              </button>
            ))}
           
          </article>
          <article className=''>
            <img className=' mx-auto md:flex  md:w-2/3 w-5/12' src={planetImages}  alt={name}  title={name} />           
          </article>
        </div>
      </section> 
    </>
  )
}

export default Crew
