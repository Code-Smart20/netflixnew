import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='nav'>
      <div className="nav__container">
        <Link to="/">
          <h2>NETFLIX</h2>
        </Link>
        
        <div className="nav__buttons">
          <Link to="login">
            <button className='btn btn-primary'>SignIn</button>
          </Link>
          <Link to="signup">
            <button className='btn'>Signup</button>
          </Link>

        </div>
       
        
      
      </div>
    </div>
  )
}

export default Navbar