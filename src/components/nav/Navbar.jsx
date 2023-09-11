import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'
import { useAuth } from '../../authentication/Auth'

const Navbar = () => {
  const { user, logOut } = useAuth();


  return (
    <div className='nav'>
      <div className="nav__container">
        <Link to="/">
          <h2>NETFLIX</h2>
        </Link>
        
        {user ? (<div className="nav__buttons">
          <Link to="account">
            <button className='btn btn-primary'>Account</button>
          </Link>
          
            <button onClick={()=>logOut()} className='btn'>Logout</button>
          

        </div>
        ) : (<div className="nav__buttons">
          <Link to="login">
            <button className='btn btn-primary'>SignIn</button>
          </Link>
          <Link to="signup">
            <button className='btn'>Signup</button>
          </Link>

        </div>
       )}
        
       
        
      
      </div>
    </div>
  )
}

export default Navbar