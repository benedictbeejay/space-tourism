import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <section className="home px-5 flex items-center justify-center text-center">
      
        <div className='overlay flex flex-col items-center justify-center text-center h-full'>
          <article>
            <h1 className='text-2xl text-gray-400 '>SO, YOU WANT TO TRAVEL TO 
              <span className='block text-4xl lg:text-6xl text-white mt-5 mb-10'>
                SPACE
              </span>
            </h1>
            <p className='text-gray-400'>
              Let's Face it; if you want to go to space, ypu might genuinely go t outer space and not hover kind of on tje edge of it. Well, sit back, and relax because we'll give you a truly out of this world experience!   
            </p>
          </article> 
          
          <article className='mt-20'>
            <button className='w-48 h-48 rounded-full bg-white text-gray-800 uppercase font-semibold text-4xl  animate-pulse'>
              <Link to="/destination">
                Explore
              </Link>
            </button>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
