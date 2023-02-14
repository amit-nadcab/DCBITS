import React, { useEffect, useState } from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { RiUserFill, RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { Link, useLocation} from 'react-router-dom'

export const Signup = () => {

  const location  = useLocation()

  const [formData, setFormDate] = useState({})
  const [showOtp, setShowOtp] = useState(true)

  const getInputs = (value, name) => {
    const data = { [name]: value }
    setFormDate({ ...formData, ...data })
  }

  useEffect(()=>{
    console.log(location?.search.slice(7));
    setFormDate({...formData,refID:location?.search.slice(7)})
  },[])

  console.log(formData);
  

  return (
    <>
      <Navbar />

      <div className=" mx-auto signup-form-page page-wrapper">
        <div className=" mx-auto mt-5 mb-5">
        {
          showOtp  ? 
          // Registration form
          <div className="container">
            <div className='col-md-5 signup-form mx-auto'>
              <div className="header">
                <h1>Create an Account</h1>
                <p>Get start</p>
              </div>
              <form>
                <div className="input">
                  <i className=""><RiUserFill /></i>
                  <input type="text" name="refID" placeholder="Referral ID" value={formData?.refID} onChange={(event) => getInputs(event.target.value, event.target.name)}/>
                </div>
                <div className="input">
                  <i className=""><MdEmail /></i>
                  <input type="email" name='email' placeholder="Email" onChange={(event) => getInputs(event.target.value, event.target.name)} />
                </div>
                <div className="input">
                  <i className=""><RiLockPasswordFill /></i>
                  <input type="password" name='password' placeholder="Password" onChange={(event) => getInputs(event.target.value, event.target.name)} />
                </div>
                <div className="input">
                  <i className=""><RiLockPasswordFill /></i>
                  <input type="password" name='cPassword' placeholder="Confirm Password" onChange={(event) => getInputs(event.target.value, event.target.name)} />
                </div>
                <input className="signup-btn" type="submit" value="SIGN UP" onClick={()=> setShowOtp(false)}/>
              </form>
              <p>Already have an account? <Link to="/login">sign in</Link></p>
            </div>
          </div> : 
          // OTP form
           <div className="container">
            <div className='col-md-5 signup-form mx-auto'>
              <div className="header">
                <h1>Verify Email</h1>
                <p>Enter OTP </p>
              </div>
              <form>
                <div className="input">
                  <i className=""><RiUserFill /></i>
                  <input type="text" name="refID" placeholder="Enter OTP" onChange={(event) => getInputs(event.target.value, event.target.name)} />
                </div>
                <input className="signup-btn" type="submit" value="Verify" />
              </form>
            </div>
          </div>
        }
        </div>
      </div>
      <Footer />
    </>
  )
}
