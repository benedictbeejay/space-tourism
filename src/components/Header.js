import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../starter-code/assets/shared/logo.svg"
import {CgMenuLeft} from "react-icons/cg" 

const Header = () => {

  const handleClick = () =>  {
    const navbar = document.querySelector('.navbar')
    const listItem = document.querySelectorAll('.list-item')
    navbar.classList.toggle("open")
    listItem.forEach((item) => item.addEventListener 
    ("click", () => navbar.classList.remove('open')))
  }
  return (
    <div className=''>
      <header className='header  sm:flex-row flex absolute top-0 left-0 p-4 items-center justify-between w-full'>
        <div>
            <Link to="/">
                <img src={Logo} alt='#' title='Space Title'/>
            </Link>
        </div>
        <nav className='navbar md:backdrop-blur-sm md:w-auto md:bg-transparent  md:top-0 md:left-0 md:left-30 lg:left-48 lg:-translate-x-16 md:-translate-x-0 md:relative absolute bg-white w-11/12 p-5 left-1/2 -top- -translate-x-1/2 '>
          <ul className='md:flex '>
            <li className='list-item'>
              <Link to="/" className='md:text-white md:flex md:items-center'>
                <span className="md:text-2xl md:font-bold mr-2">00</span> Home
              </Link>
            </li>
            <li className='list-item '>
              <Link to="/destination" className='md:text-white md:flex md:items-center '>
                <span className="md:text-2xl md:font-bold mr-2">01</span> Destination
              </Link>
            </li>
            <li className='list-item '>
              <Link to="/crew"  className='md:text-white md:flex md:items-center'>
                <span className="md:text-2xl md:font-bold mr-2 ">02</span> Crew
              </Link>
            </li>
            <li className='list-item '>
              <Link to="/technology" className='md:text-white md:flex md:items-center'>
                <span className="md:text-2xl md:font-bold mr-2 ">03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className='md:hidden ' onClick={handleClick}>
            <CgMenuLeft className="text-white text-4xl "/>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
