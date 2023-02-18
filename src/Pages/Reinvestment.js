import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../Components/Sidebar'
import { Footer } from '../Components/Footer'

export const Reinvestment = () => {
    return (
        <>
            <Sidebar />
            <div className="page-wrapper pt-5">
                <div className="container pt-5">
                    <h2 className='text-center text-warning h1'>Reinvestment</h2>
                    <div className='row mt-5'>
                        <div className='col-12 mt-5'>
                            {/* <div className='row'>
                                <col className='col-6'>Enter Amoun</col>
                                <col className='col-6'></col>
                            </div> */}
                            <div className="card bg-transparent" style={{border: "1px solid cyan", borderRadius: "5px", width: "60%",minHeight: "20vh", margin:"auto"}}>
                                <div className="card-body my-auto" >
                                    
                                    <div className="row mt-2">
                                        <div className="col-5 text-warning">
                                            Enter Amount
                                        </div>
                                        <div className="col-7">
                                            <input className="form-control" />
                                        </div>
                                    </div>
                                   
                                    <div className="row mt-3">
                                        <div className="col-12 text-warning text-center">
                                            <span className="btn btn-primary">Withdraw</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
