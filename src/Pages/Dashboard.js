import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='page-wrapper pt-5'>
                <div className='container pt-5'>
                    <div className='row pt-5'>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                    <h5 className='text-center mt-2'>Total Deposit</h5>
                                    <p className='text-center mt-3 amount-value'>50 USDT + 50 DCBT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                            <h5 className='text-center mt-2'>Total Withdrwa</h5>
                            <p className='text-center mt-3 amount-value'>50 USDT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                            <h5 className='text-center mt-2'>Total Earning</h5>
                            <p className='text-center mt-3 amount-value'>50 USDT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                    <h5 className='text-center mt-2'>Total Direct Members</h5>
                                    <p className='text-center mt-3 amount-value'>5</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                            <h5 className='text-center mt-2'>Total Direct Income</h5>
                            <p className='text-center mt-3 amount-value'>50 USDT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                            <h5 className='text-center mt-2'>Total Earning</h5>
                            <p className='text-center mt-3 amount-value'>50 USDT</p>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 pt-2'>
                            <div className='dummy-data-1'>
                            <h5 className='text-center mt-1'>Deposit</h5>
                            <div className='text-center'>
                            <img src='/assets/img/depsot.webp' width="300px" height="300px"/>
                            </div>
                            {/* <div>
                            <input type="text" color='balck'/>
                            <button>Deposit</button>
                            </div> */}
                            
                            </div>
                        </div>
                        <div className='col-md-6 pt-2'>
                        <div className='dummy-data-1'>
                        <h5 className='text-center mt-3'>Withdraw</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
