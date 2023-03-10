import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";

import { sidebar } from '../utils/helperFunctions'
import { logout } from '../redux/reducer'
export const Sidebar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    sidebar()
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    toast.success("Logout Successfully")
    navigate('/')
  }

  return (
    <>
      <header class="header-1">
        <div class="header_in d-flex justify-content-between">
          <Link className="navbar-brand" to="/home">
            <img src="assets/img/logo.png" className="logo" alt="logo" width="172px" height="43px" />
          </Link>
          <button type="button" class="toggle button-1" id="toggle">
            <span></span>
          </button>


        </div>
      </header>

      <div class="sidebar" id='sidebar'>
        <ul className='mt-3'>
          <li><Link to="/home"> <b className='text-white'> Home </b></Link></li>
          <li><Link to="/dashboard"> <b className='text-white'> Dashboard </b></Link></li>
          {/* <li><Link to="/reinvestment"><b className='text-white'>Reinvestment</b> </Link></li> */}
          <li><Link to="/investHistory"><b className='text-white'>Investment History</b> </Link></li>
          <li><Link to="/withdrawHistory"><b className='text-white'>Withdraw History</b></Link></li>
          {/* <li><Link href=""><b></b></Link></li> */}
          <li><Link href=""><b className='text-white'>Referral Income</b></Link></li>
          <hr style={{ color: "white" }} />
          <li> <a className=''  onClick={() => handleLogout()}><b className='text-white'> Logout</b></a></li>
        
        </ul>
        {/* <div className=''><img src='assets/img/sidebar1.png' className=''/></div> */}
        
      </div>
  
    </>
  )
}
