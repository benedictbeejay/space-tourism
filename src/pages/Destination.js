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
      <section>
        <h1>
          01 Pick your destination
        </h1>
        <div>
          <article>
            <img src={planetImages}  alt={name}  title={name} />           
          </article>

          <article>
            <h2>
              {name}
            </h2>
            <p>
              {description}
            </p>
            <ul>
              <li>
                {distance}
              </li>
              <li>
                {travel}
              </li>
            </ul>
          </article>
        </div>
      </section> 
    </>
  )
}

export default Destination
