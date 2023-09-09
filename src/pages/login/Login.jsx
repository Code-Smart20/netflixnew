import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'





const Login = () => {
 
  return (
   
    <div className="signup">
      <div className="signup__fade"></div>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/e480152b-ee6f-47a4-822c-62a016ed4c8c/NG-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div className="signup__container">

        <div className="signup__details">
          <h2 className='white'>SignIn</h2>

          <form>
            <input  className='form__input' type="email" placeholder='Email' />
            <input className='form__input' type="password" placeholder='password' />
            < button className='form__input btn'><h3>Sign In</h3></button>
          </form>

          <div className='align'>
            <p><input type="checkbox" /><span>Remember Me</span></p>
            <p>Need Help?</p>
          </div>

          <p>New To Netflix  <Link to="/signup">Sign Up</Link></p>
        </div>

      </div>

    </div>
   
  )
}

export default Login