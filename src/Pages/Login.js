import React, { useState } from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'


export const Login = () => {

  const navigate = useNavigate()
  const [formData, setFormdata] = useState({})

  const getInputs = (value,name)=>{
    console.log(value,name);
    const data = {[name]: value}
    setFormdata({...formData, ...data})
  }

  return (
   <>
    <Navbar />
   
      <div className=" mx-auto signup-form-page page-wrapper">
      <div className=" mt-5 mb-5">
        <div className="container">
            <div className='col-md-4 signup-form mx-auto'>
            <div className="header">
            <h1>Login from here</h1>
          </div>
          <form>
            <div className="input">
              <i className=""><MdEmail/></i>
              <input type="email" placeholder="Email" name='email' onChange={(event)=>{getInputs(event.target.value, event.target.name)}}/>
            </div>
            <div className="input">
              <i className=""><RiLockPasswordFill/></i>
              <input type="password" placeholder="Password" name='password' onChange={(event)=>{getInputs(event.target.value, event.target.name)}}/>
            </div>
            <input className="signup-btn" type="submit" value="LOGIN" onClick={()=>navigate('/dashboard')}/>
          </form>
          <p>Don't have an account? <Link to="/signup">sign up</Link></p>
            </div>
          
        </div>
      </div>
      </div>
   
      <Footer />
   </>
  )
}
