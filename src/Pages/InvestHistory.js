import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Footer } from '../Components/Footer'

export const InvestHistory = () => {
    return (
        <>
            <Sidebar />
            <div className="page-wrapper pt-5">
                <div className="container pt-5">
                    <h2 className='text-center text-warning'>Investment History</h2>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
