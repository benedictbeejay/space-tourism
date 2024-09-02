import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../starter-code/assets/shared/logo.svg"

const Header = () => {
  return (
    <div>
      <header className='header absolute top-0 left-0'>
        <div>
            <Link to="/">
                <img src={Logo} alt='#' title='Space Title'/>
            </Link>
        </div>
      </header>
    </div>
  )
}

export default Header
