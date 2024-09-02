import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="home">
      <article>
        <div className='overlay flex items-center justify-center text-center h-full'>
            <h1>SO, YOU WANT TO TRAVEL TO <span>SPACE</span></h1>
        </div>
        <p>
          Let's Face it; if you want to go to space, ypu might genuinely go t outer space and not hover kind of on tje edge of it. Well, sit back, and relax because we'll give you a truly out of this world experience!   
        </p>
      </article>
      
      <article>
        <button>
          <Link to="/destination">
            Explore
          </Link>
        </button>
      </article>
      </section>
    </div>
  )
}

export default Home
