import React, { useEffect, useState, useReducer } from 'react'
import { Link, useLocation} from 'react-router-dom'

import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'

import { RiUserFill, RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import {BiHide, BiShow} from 'react-icons/bi'

import { registration } from '../utils/apiFunction'



const initialTodos = {
  handleShowP: false,
  handleShowCP: false
}

const reducer = (state, action) => {
 
    if(action.type === 'HANDLE_SHOW_P'){
      return {
        handleShowP :!state?.handleShowP
      }
    }

   else if(action.type === 'HANDLE_SHOW_CP'){
      return {
        handleShowCP :!state?.handleShowCP
      }
    }


    throw Error('Unknown action.');
  }



export const Signup = () => {

  const location  = useLocation()
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [formData, setFormDate] = useState({})
  const [showOtp, setShowOtp] = useState(true)

  
  const getInputs = (value, name) => {
    const data = { [name]: value }
    setFormDate({ ...formData, ...data })
  }

  

  useEffect(()=>{
    // console.log(location?.search.slice(7));
    setFormDate({...formData,refID:location?.search.slice(7)})
  },[])

  // console.log(formData);
  

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
                  <input type="text" name="refID" placeholder="Referral ID" value={formData?.refID} onChange={(event) => {
                    
                        getInputs(Number(event.target.value?.replace(/[^0-9.]/, "").replace(/(\..?)\../g, "$1")), event.target.name)
                  }}/>
                </div>
                <div className="input">
                  <i className=""><MdEmail /></i>
                  <input type="email" name='email' placeholder="Email" onChange={(event) => {
                      //  const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                      //  console.log(re.test(event.target.value))
                      getInputs(event.target.value, event.target.name)} 
                  }/>
                </div>
                <div className="input position-relative">
                  <i className=""><RiLockPasswordFill /></i>
                  <input type={todos.handleShowP ? "text" : "password"} name='password' placeholder="Password" onChange={(event) => {
                    // const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                    // console.log(re.test(event.target.value),event.target.value);
                    
                    getInputs(event.target.value, event.target.name)} 
                  }/>
                  <BiHide className='position-absolute show-hide' onClick={()=>{
                      dispatch({ type: 'HANDLE_SHOW_P'})
                  }}/>
                </div>
                <div className="input">
                  <i className=""><RiLockPasswordFill /></i>
                  
                <input type={todos.handleShowCP ? "text" : "password"} name='cPassword' placeholder="Confirm Password" onChange={(event) => getInputs(event.target.value, event.target.name)} />
                <BiHide className='position-absolute show-hide' onClick={()=>{
                      dispatch({ type: 'HANDLE_SHOW_CP'})
                  }}/>
                </div>
               
                <input className="signup-btn" type="button" value="SIGN UP" onClick={()=>
                            registration(formData?.refID, formData?.email, formData?.password, formData?.cPassword)

                }/>
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
