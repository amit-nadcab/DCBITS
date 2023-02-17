import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Footer } from '../Components/Footer'

export const WithdrawHistory = () => {
    return (
        <>
            <Sidebar />
            <div className="page-wrapper pt-5">
                <div className="container pt-5">
                    <h2 className='text-center text-warning'>Withdraw History</h2>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}