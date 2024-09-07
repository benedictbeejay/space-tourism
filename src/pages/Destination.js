import React, {useState} from 'react'
import  data from "../starter-code/data.json"
const Destination = () => {
  const [planets] =useState(data.destinations)
  const [value, setValue] = useState(0)

  const {name, images, description, distance, travel} =
  planets[value]


  return (
    <>
      <section>
        <h1>
          01 Pick your destination
        </h1>
        <div>
          <article>
            <img src={images.png} alt={name}  title={name}/>           
          </article>
        </div>
      </section> 
    </>
  )
}

export default Destination
