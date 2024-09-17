import React, {useState} from 'react'
// import { BsCircle } from 'react-icons/bs'
import data from "../starter-code/data.json"
import Moon from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
import Mars from "../starter-code/assets/technology/image-spaceport-portrait.jpg"
import Europa from "../starter-code/assets/technology/image-space-capsule-portrait.jpg"
import Launch from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
import Spaceport from "../starter-code/assets/technology/image-spaceport-landscape.jpg"
import Capsule from "../starter-code/assets/technology/image-space-capsule-landscape.jpg"



const { technology } = data;

const imagePlanet = [Moon, Mars, Europa]
const Landscape = [Launch, Spaceport, Capsule]

const Technology = () => {
  const [cards] =useState(technology)
  const [value, setValue] = useState(0)
  const planetImages = imagePlanet[value]
  const landscapeImages = Landscape[value]

  const {name, description, images} =
  cards[value]
  console.log(images)
 

  return (
    <>
      <section className='home technology px-5 h-full '>  
        <h1 className='md:absolute pt-8 lg:left-56 md:left-40 md:pt-32 relative left-1/2 w-fit -translate-x-1/2  lg:mx-auto lg:max-w-7xl text-white text-lg  uppercase md:text-2xl '>
          02 Space Launch 101
        </h1>
        <div className=' flex items-center justify-center flex-col-reverse top-1/2 md:mt-0 -mt-6 relative -translate-y-1/2 md:pt-20 md:grid md:grid-cols-2 md:gap-5 md:items-center  lg:max-w-6xl lg:mx-auto'>
          <article className='text-center md:text-left md:mt-0  lg:flex items-center'>
            <div className=''>
              {cards.map((item, index) => (
                <button key={index} onClick={() => setValue(index)} 
                className={`uppercase text-white sm:text-2xl text-xl h-12 w-12 p-1 border-2 border-white rounded-full pb-2 m-2 mx-2 
                ${index === value && "bg-white text-gray-900"}`}>
                {index + 1}
                </button>
              ))}
            </div>

           <div className='lg:ml-10 '>
              <h4 className='uppercase text-gray-400 md:text-2xl  mx-2 md:mb-4 text-lg'>The terminology...</h4>
            <h2 className='text-3xl md:text-3xl font-bold text-white mt- mb-4 md:mx-2 uppercase tracking-widest'>
              {name}
            </h2>
            <p className='text-gray-400 md:mx-2 pb-2 md:pb-5'>
              {description}
            </p>

           </div>
          </article> 

            <article className=''>
            <img className=' mx-auto md:flex h-1/3 md:w-2/3 w-3/5' src={planetImages}  alt={name}  title={name} />           
            {/* <picture>
              <source media='(min-width: 768px)' srcSet={planetImages}/>
              <img src={landscapeImages} alt={name} className='block mx-auto mb-10 md:flex md:h-1/3 md:w-2/3 '/>
            </picture> */}
          </article>
         
        </div>
      </section> 
    </>
  )
}

export default Technology
