import React, {useState} from 'react'
import data from "../starter-code/data.json"
import Moon from "../starter-code/assets/destination/image-moon.png"
import Mars from "../starter-code/assets/destination/image-mars.png"
import Europa from "../starter-code/assets/destination/image-europa.png"
import Titan from "../starter-code/assets/destination/image-titan.png"
// import Moon2 from "../../public/starter-code/assets/destination/image-moon.png"

const { destinations } = data;

const imagePlanet = [Moon, Mars, Europa, Titan]

const Destination = () => {
  const [planets] =useState(destinations)
  const [value, setValue] = useState(0)
  const planetImages = imagePlanet[value]

  const {name, images, description, distance, travel} =
  planets[value]
  console.log(images.png);
  // console.log(imagePlanet);
  // console.log(Moon)

  return (
    <>
      <section className='home destination px-5 '> 
        <h1 className='absolute'>
          01 Pick your destination
        </h1>
        <div className='pt-10 h-screen md:pt-20 md:grid md:grid-cols-2 md:gap-5 md:items-center lg:max-w-6xl lg:mx-auto'>
          <article className='md:h-2/3 sm:h-1/4 md:items-center md:flex md:justify-center'>
            <img className='block mx-auto md:flex  md:w-2/3 sm:w-1/2 w-2/3 mt-4 mb-4' src={planetImages}  alt={name}  title={name} />           
          </article>

          <article className='text-center md:text-left md:mt-0 sm:mt-44'>

            {planets.map((item, index) => (
              <button key={index} onClick={() => setValue(index)} 
              className={`uppercase text-white sm:text-2xl text-xl pb-2 mx-2 ${index === value && "border-b border-white"}`}>
                {item.name}
              </button>
            ))}

            <h2 className='text-3xl md:text-5xl font-bold text-white mt-4 mb-4 uppercase tracking-widest'>
              {name}
            </h2>
            <p className='text-gray-400'>
              {description}
            </p>
            <ul>
              <li className='text-gray-400'>
                Avg. Distance {distance}
              </li>
              <li className='text-gray-400'>
                Est. Travel Time {travel}
              </li>
            </ul>
          </article>
        </div>
      </section> 
    </>
  )
}

export default Destination
