import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../starter-code/assets/shared/logo.svg"
import {CgMenuLeft} from "react-icons/cg" 

const Header = () => {
  return (
    <div className=''>
      <header className='header flex absolute top-0 left-0 p-4 items-center justify-between w-full'>
        <div>
            <Link to="/">
                <img src={Logo} alt='#' title='Space Title'/>
            </Link>
        </div>
        <nav className='navbar open absolute bg-white w-11/12 p-5 left-1/2 top-20 -translate-x-1/2 transition-top'>
          <ul>
            <li>
              <Link to="/">
                <span>00</span> Home
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <span>01</span> Destination
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <span>02</span> Crew
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <span>03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className=' '>
            <CgMenuLeft className="text-white text-4xl "/>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
