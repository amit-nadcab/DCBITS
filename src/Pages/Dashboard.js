import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Footer } from "../Components/Footer";
import { Sidebar } from "../Components/Sidebar";
import { AiFillCopy } from "react-icons/ai";
import { createWallet } from "../utils/apiFunction";

export const Dashboard = () => {
  const { user } = useSelector((state) => state.data.value);
  console.log(user?.user_id, "amit");
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <div className="page-wrapper pt-5">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning">Total Deposit</h4>
                <p className="text-center mt-3 amount-value fs-6">
                  50 USDT + 50 DCBT
                </p>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning">
                  Total Withdrwa
                </h4>
                <p className="text-center mt-3 amount-value fs-6">50 USDT</p>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning">Total Earning</h4>
                <p className="text-center mt-3 amount-value fs-6">50 USDT</p>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning">
                  Total Direct Members
                </h4>
                <p className="text-center mt-3 amount-value fs-6">5</p>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning">
                  Total Direct Income
                </h4>
                <p className="text-center mt-3 amount-value fs-6">50 USDT</p>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div className="dummy-data">
                <h4 className="text-center mt-2 text-warning">Total Earning</h4>
                <p className="text-center mt-3 amount-value fs-6">50 USDT</p>
              </div>
            </div>
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
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ minHeight: "20vh" }}
                        >
                          <span
                            className="btn btn-primary"
                            onClick={() =>
                              createWallet(user?.user_id).then((res) => {
                                console.log(res, "wallet Response");
                              })
                            }
                          >
                            Create Wallet
                          </span>
                        </div>
                        {/* <div className='mt-4'>
                                                    <h6 className='text-warning'><b> USDT Wallet Address</b></h6>
                                                    <p className='text-white'>TBfRabVPjU36MU2wGc3aDdpDZJzovLr4eF <AiFillCopy/></p> 
                                                </div>
                                                <div className='mt-4'>
                                                <h6 className='text-warning'><b> DCBT Wallet Address</b></h6>
                                                <p className='text-white'>TBfRabVPjU36MU2wGc3aDdpDZJzovLr4eF <AiFillCopy/></p> 
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-2">
              <div className="dummy-data-1">
                <h4 className="text-center mt-3 text-warning">Withdraw</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
