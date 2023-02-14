import React from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import {RiUserFill,RiLockPasswordFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <>
      <Navbar />
     
      <div className=" mx-auto signup-form-page page-wrapper">
      <div className=" mx-auto mt-5 mb-5">
        <div className="container">
          <div className='col-md-5 signup-form mx-auto'>
          <div className="header">
            <h1>Create an Account</h1>
            <p>Get start</p>
          </div>
          <form>
          <div className="input">
              <i className=""><RiUserFill/></i>
              <input type="text" placeholder="Referral ID" />
            </div>
            <div className="input">
              <i className=""><MdEmail/></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <i className=""><RiLockPasswordFill/></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input">
              <i className=""><RiLockPasswordFill/></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input className="signup-btn" type="submit" value="SIGN UP" />
          </form>
          <p>Already have an account? <Link to="/login">sign in</Link></p>
        </div>
        </div>
      </div>
      </div>
   
      
     
      <Footer />
    </>
  )
}
