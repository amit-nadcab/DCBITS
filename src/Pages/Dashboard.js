import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Footer } from "../Components/Footer";
import { Sidebar } from "../Components/Sidebar";
import { AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createWallet, getWalletAddress, updateWallet, checkUserStatus} from "../utils/apiFunction";

export const Dashboard = () => {
  const { user_id } = useSelector((state) => state.data.value);
  const [walletAddress, setWalletAddress] = useState([])
  const [copiedUSDT, setCopiedUSDT] = useState(false);
  const [copiedDCBT, setCopiedDCBT] = useState(false);
  const [showOtp, setShowOtp] = useState(true)
  const [userStats, setUserStats] = useState({})

  useEffect(() => {
    getWalletAddress(user_id).then((res) => {
      setWalletAddress(res?.wallets)
    })
    updateWallet(user_id).then((res) => {
      console.log(res, "update wallet address");
    })
    checkUserStatus(user_id).then((res)=>{
      setUserStats(res?.user_data)

    }
  )}, [user_id])

  setTimeout(() => {
    setCopiedUSDT(false);
    setCopiedDCBT(false)
  }, 1000);

  const handleCopy = (type) => {
    console.log(type, "type");
    if (type === 'USDT') {
      setCopiedUSDT(true)
    }
    if (type === 'DCBT') {
      setCopiedDCBT(true)
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <div className="page-wrapper pt-5">
        <div className="container pt-5">
          {
            userStats?.user_status === 1 ? 
            <div className="row">
              
              <div className="col-md-12 pt-5">
              <div className="dummy-data d-flex align-items-center justify-content-center">
                <p className="text-center  amount-value fs-6 ref-link">
                <span className="text-warning">Referral Link: </span>   {`https://staking.dcbits.io/signup?id=${userStats?.self_ref_code}`} 
                <span className="ms-3"><AiOutlineCopy/></span> 
                </p>
              
              </div>
            </div>
            </div> : 
            null
          }
        
          <div className="row ">
            {/* <div>Referral Link: </div> */}
            <div className="col-md-6 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning card-heading">Total Earning</h4>
                <p className="text-center mt-3 amount-value fs-6">
                  {userStats?.roi_income && userStats?.referral_income ?  userStats?.roi_income + userStats?.referral_income : 0} USDT
                </p>
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning card-heading">
                  Total ROI Income
                </h4>
                <p className="text-center mt-3 amount-value fs-6">{userStats?.roi_income ? userStats?.roi_income : 0} USDT</p>
              </div>
            </div>
            {/* <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning card-heading">Total Earning</h4>
                <p className="text-center mt-3 amount-value fs-6">50 USDT</p>
              </div>
            </div> */}
            <div className="col-md-6 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning card-heading">
                  Total Direct Members
                </h4>
                <p className="text-center mt-3 amount-value fs-6">{userStats?.directs ? userStats?.directs : 0}</p>
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning card-heading">
                  Total Level Income
                </h4>
                <p className="text-center mt-3 amount-value fs-6">{userStats?.referral_income ? userStats?.referral_income : 0} USDT</p>
              </div>
            </div>
            {/* <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning card-heading">Total Earning</h4>
                <p className="text-center mt-3 amount-value fs-6">50 USDT</p>
              </div>
            </div> */}
          </div>

          <div className="row mt-5">
            <div className="col-md-6 pt-2">
              <div className="dummy-data-1">
                <h4 className="text-center mt-2 text-warning">Wallet</h4>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="text-center">
                      <img
                        className="img-fluid deposit_img"
                        src="/assets/img/depsot.webp"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 m-auto">
                    <div className="card bg-transparent border-0">
                      <div className="card-body">
                        {
                          walletAddress && walletAddress?.length > 0 ? (
                            <>
                              <div className='mt-4'>
                                <h6 className='text-warning'><b>{walletAddress[0]?.wallet_type} Wallet Address</b></h6>
                                <p className='text-white'>{walletAddress[0]?.wallet_address.slice(0, 10) + "..." + walletAddress[0]?.wallet_address.slice(25)}
                                  <CopyToClipboard
                                    text={walletAddress[0]?.wallet_address}
                                    onCopy={() => handleCopy(walletAddress[0]?.wallet_type)}

                                  >
                                    <span className="mx-1 small"><AiOutlineCopy color="white" cursor="pointer" /></span>
                                  </CopyToClipboard>
                                  {copiedUSDT ? <span className="small mx-1">Copied</span> : null}
                                </p>
                              </div>

                              <div className='mt-4'>
                                <h6 className='text-warning'><b>{walletAddress[1]?.wallet_type} Wallet Address</b></h6>
                                <p className='text-white'>{walletAddress[1]?.wallet_address.slice(0, 10) + "..." + walletAddress[1]?.wallet_address.slice(25)}
                                  <CopyToClipboard
                                    text={walletAddress[1]?.wallet_address}
                                    onCopy={() => handleCopy(walletAddress[1]?.wallet_type)}
                                  >
                                    <span className="mx-1 small"><AiOutlineCopy color="white" cursor="pointer" /></span>
                                  </CopyToClipboard>
                                  {copiedDCBT ? <span className="small mx-1">Copied</span> : null}
                                </p>
                              </div>
                            </>
                          ) :
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{ minHeight: "20vh" }}
                            >
                              <span
                                className="btn btn-primary"
                                onClick={() =>
                                  createWallet(user_id).then((res) => {
                                    console.log(res, "wallet Response create");
                                    getWalletAddress(user_id).then((res1) => {
                                      setWalletAddress(res1?.wallets)
                                    })

                                  })
                                }
                              >
                                Create Wallet
                              </span>
                            </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-2">
              <div className="dummy-data-1">
                <h4 className="text-center mt-3 text-warning">Withdraw</h4>
                <div className="card bg-transparent border-0 d-none  d-lg-block " style={{ minHeight: "20vh" }}>
                  <div className="card-body my-auto">
                    <div className="row mt-2">
                      <div className="col-5 text-warning">
                        Enter Wallet Address
                      </div>
                      <div className="col-7">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-5 text-warning">
                        Enter Amount
                      </div>
                      <div className="col-7">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-5 text-warning">
                        Fees
                      </div>
                      <div className="col-7">
                        <input className="form-control" />
                      </div>
                    </div>
                    <div className="row mt-3">

                      <div className="col-5 text-warning" style={{ visibility: showOtp ? "hidden" : "visible" }}>
                        Enter OTP
                      </div>
                      <div className="col-7 d-flex justify-content-end">
                        <input className="form-control w-75" style={{ visibility: showOtp ? "hidden" : "visible" }} />
                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          Launch 
                        </button> */}

                        <span className="btn btn-primary ms-3" onClick={() => setShowOtp(false)}>Withdraw</span>
                      </div>


                    </div>
                  </div>
                </div>

                {/* small screen*/}
                <div className="card bg-transparent border-0 card bg-transparent border-0  d-sm-block d-md-block d-lg-none" style={{ minHeight: "20vh" }}>
                  <div className="card-body my-auto w-75 mx-auto">
                    <div className="row mt-2">
                      <label className="text-warning">Enter Wallet Address</label>
                      <input className="form-control" />
                    </div>
                    <div className="row mt-2">
                      <label className="text-warning">Enter Amount</label>
                      <input className="form-control" />
                    </div>
                    <div className="row mt-2">
                      <label className="text-warning">Fees</label>
                      <input className="form-control" />
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 text-warning text-center">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          Launch 
                        </button>
                        <span className="btn btn-primary ms-3">Withdraw</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Enter OTP</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                        <input className="form-controll"/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
