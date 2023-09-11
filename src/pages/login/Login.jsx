import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../authentication/Auth'


const Login = () => {

  const { user, logIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    setError("")
    e.preventDefault();
    try {
      await logIn(email, password);
      Navigate("/")
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
    }
 
  return (
   
    <div className="signup">
      <div className="signup__fade"></div>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/e480152b-ee6f-47a4-822c-62a016ed4c8c/NG-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div className="signup__container">

        <div className="signup__details">
          <h2 className='white'>SignIn</h2>
          {error ? <p className='errorsms'>{error}</p>: null}

          <form onSubmit={handleSubmit}>
            <input onChange={(e)=>{setEmail(e.target.value)}} className='form__input' type="email" placeholder='Email' />
            <input onChange={(e) => { setPassword(e.target.value) }} className='form__input' type="password" placeholder='password' />
            < button className='form__input btn'><h3>Sign In</h3></button>
          </form>

          <div className='align'>
            <p><input type="checkbox" /><span>Remember Me</span></p>
            <p>Need Help?</p>
          </div>


          <p className="gray__text">
            Not yet Subscribed <span><Link to="/signup">SignUp</Link></span></p>
        </div>

      </div>

    </div>
   
  )
}

export default Login