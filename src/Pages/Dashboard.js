import React from 'react'
import { Footer } from '../Components/Footer'
import { Sidebar } from '../Components/Sidebar'

export const Dashboard = () => {
    return (
        <>
            {/* <Navbar /> */}
                <Sidebar/>
            <div className='page-wrapper pt-5'>
                <div className='container pt-5'>
                    <div className='row pt-5'>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                <h4 className='text-center mt-2 text-warning'>Total Deposit</h4>
                                <p className='text-center mt-3 amount-value fs-6'>50 USDT + 50 DCBT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                <h4 className='text-center mt-2 text-warning'>Total Withdrwa</h4>
                                <p className='text-center mt-3 amount-value fs-6'>50 USDT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                <h4 className='text-center mt-2 text-warning'>Total Earning</h4>
                                <p className='text-center mt-3 amount-value fs-6'>50 USDT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                <h4 className='text-center mt-2 text-warning'>Total Direct Members</h4>
                                <p className='text-center mt-3 amount-value fs-6'>5</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                <h4 className='text-center mt-2 text-warning'>Total Direct Income</h4>
                                <p className='text-center mt-3 amount-value fs-6'>50 USDT</p>
                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                            <div className='dummy-data'>
                                <h4 className='text-center mt-2 text-warning'>Total Earning</h4>
                                <p className='text-center mt-3 amount-value fs-6'>50 USDT</p>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 pt-2'>
                            <div className='dummy-data-1'>
                                <h4 className='text-center mt-2 text-warning'>Deposit</h4>
                                {/* <div className='text-center'>
                                    <img src='/assets/img/depsot.webp' width="200px" height="200px" />
                                </div>
                                <div className='d-flex flex-column w-50 mx-auto'>
                            <input type="text"/>
                            <button>Deposit</button>
                             <form>
                                    <div className="input">
                                        <i className="">q</i>
                                        <input type="text" placeholder="USDT" name='email' />
                                    </div>
                                    <input className="signup-btn" type="submit" value="Deposit" />
                                </form>
                            </div> */}
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <div className='text-center'>
                                            <img src='/assets/img/depsot.webp' width="250px" height="250px" />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex flex-column mt-4'>
                                            <p className='fs-6 text-warning font-weight-bold'>USDT Balance :  <span className='text-white font-weight-light'> 50 USDT</span></p>
                                            <p className='fs-6 text-warning font-weight-bold'>DCBT Balance : <span className='text-white font-weight-light'> 50 DCBT</span></p>
                                        </div>
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">USDT Amount</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter USDT Amount"/>
                                                    <small id="emailHelp" class="form-text text-muted">Min 100 USDT Max 100000 USDT</small>
                                            </div>
                                            {/* <div class="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                            </div> */}
                                            <button type="submit" class="btn btn-primary">Deposit</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 pt-2'>
                            <div className='dummy-data-1'>
                                <h4 className='text-center mt-3 text-warning'>Withdraw</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
