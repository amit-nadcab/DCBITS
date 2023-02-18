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
                    <div className="table-responsive mt-5">
                        <table className="table table-borderless table-striped">
                            <thead className="text-center" style={{background: "#6A35FF"}}>
                                <tr className='text-warning'>
                                    <th scope="col">Sr.</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Hash</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr>
                                    <td>1</td>
                                    <td className='td-min-with'>500 USDT + 500  DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className='td-min-with'>100 USDT + 100 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className='td-min-with'>200 USDT + 200 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className='td-min-with'>500 USDT + 500 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className='td-min-with'>600 USDT + 600 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td className='td-min-with'>500 USDT + 500 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td className='td-min-with'>1500 USDT + 1500 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td className='td-min-with'>5200 USDT + 5200 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td className='td-min-with'>500 USDT + 500 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td className='td-min-with'>300 USDT + 300 DCBT</td>
                                    <td className='td-min-with'>18-02-2023</td>
                                    <td>0x0000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}