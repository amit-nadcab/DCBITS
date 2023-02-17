import React, { useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";

import { sidebar } from '../utils/helperFunctions'
import {logout} from '../redux/reducer'
export const Sidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

  useEffect(() => {
    sidebar()
  }, [])

  const handleLogout = ()=>{
    dispatch(logout())
    toast.success("Logout Successfully")
    navigate('/')
  }

  return (
    <>
      <header class="header-1">
        <div class="header_in">
          <button type="button" class="toggle" id="toggle">
            <span></span>
          </button>
        <span className='btn btn-primary' onClick={()=>handleLogout()}>Logout</span>

        </div>
      </header>

      <div class="sidebar" id='sidebar'>
        <ul>
          <li><Link to="/"> <b> Home </b></Link></li>
          <li><Link to="/dashboard"> <b> Dashboard </b></Link></li>
          <li><Link href=""><b>Deposit Details</b> </Link></li>
          <li><Link href=""><b>Withdraw Details</b></Link></li>
          <li><Link href=""><b>My Team</b></Link></li>
          <li><Link href=""><b>Referral Income</b></Link></li>
        </ul>
      </div>
    </>
  )
}
