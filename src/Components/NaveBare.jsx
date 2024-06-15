import React from 'react'
import { Link } from "react-router-dom";
import SearchInput from './SearchInput';
export const NaveBare = () => {
  return (
    <div><header>
      <img src="./aaze.png" alt=""  className='logo'/>
      <nav>
        <ul className='nav-links'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
      
      </header>
      
     </div>

  )
}

export default NaveBare