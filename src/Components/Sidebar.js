import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { sidebar } from '../utils/helperFunctions'
export const Sidebar = () => {


  useEffect(() => {
    sidebar()
  }, [])
  return (
    <>
      <header class="header-1">
        <div class="header_in">
          <button type="button" class="toggle" id="toggle">
            <span></span>
          </button>
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
