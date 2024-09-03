import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../starter-code/assets/shared/logo.svg"

const Header = () => {
  return (
    <div>
      <header className='header absolute top-0 left-0 p-4'>
        <div>
            <Link to="/">
                <img src={Logo} alt='#' title='Space Title'/>
            </Link>
        </div>
        <nav className='navbar'>
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
      </header>
    </div>
  )
}

export default Header
