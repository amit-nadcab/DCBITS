import React, { useState } from 'react'
// import { useDispatch } from "react-redux";
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../utils/apiFunction'


export const Login = () => {

  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const [formData, setFormdata] = useState({})
  const [showEmailError, setShowEmailError] = useState(false)
  const [passwordError, setShowPasswordError] = useState(false)

  const getInputs = (value,name)=>{
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
              <input type="email" placeholder="Email" name='email' onChange={(event)=>{getInputs(event.target.value, event.target.name)}}
              onBlur={() => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const t = re.test(formData?.email)
                if (t) {
                  setShowEmailError(false)
                } else {
                  setShowEmailError(true)
                }
              }}
              />
              {showEmailError ? <p className='text-danger text-start'>Enter Valid Email</p> : null}
            </div>
            <div className="input">
              <i className=""><RiLockPasswordFill/></i>
              <input type="password" placeholder="Password" name='password' onChange={(event)=>{getInputs(event.target.value, event.target.name)}}
                onBlur={()=>{
                    if(formData?.password === '' || formData?.password === undefined){
                      setShowPasswordError(true)
                    }
                    else{
                      setShowPasswordError(false)
                    }
                }}
               
              />
               {passwordError ? <p className='text-danger text-start'>Enter Password</p> : null}
            </div>
            <input className="signup-btn" type="button" value="LOGIN" onClick={()=>{
                      if(!passwordError && !showEmailError){
                        login(formData?.email, formData?.password,navigate)
                      }
                      if(formData?.password === '' || formData?.password === undefined){
                        setShowPasswordError(true)
                      }
                      else{
                        setShowPasswordError(false)
                      }
                      if(formData?.email === '' || formData?.email === undefined){
                        setShowEmailError(true)
                      }
                      else{
                        setShowEmailError(false)
                      }
            }}/>
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
