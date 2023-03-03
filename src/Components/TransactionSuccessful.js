import React from "react";
import "./transactionSuccess.css";

export const TransactionSuccessful = () => {
  return (
    <>
      <div className="ai-banner">
        <div className="d-flex  justify-content-center align-items-center">
          <div>
            <img src="assets/img/greenTick.png" alt="img" width="25px" />{" "}
            Transaction Completed Successfully
          </div>
        </div>
        <div className="transaction-success">
          <div className="transaction-data">
            <div className="col-md-4"><p>Wallet address</p></div>
            <div className="transaction-success-value col-md-8"><p className="fw-bold text-dark">TBdzDbGxsSSReEjcy2A</p></div>
          </div>
          <div className="transaction-data">
          <div className="col-md-4"><p>Amount</p></div>
            <div className="transaction-success-value col-md-8"><p className="fw-bold text-dark">125 USDT</p> </div>
          </div>
          <div className="transaction-data">
          <div className="col-md-4"><p>Fees</p></div>
            <div className="transaction-success-value col-md-8"><p className="fw-bold text-dark">1 USDT</p> </div>
          </div>
          <div className="transaction-data">
          <div className="col-md-4"><p>Date</p></div>
            <div className="transaction-success-value col-md-8"><p className="fw-bold text-dark">24/02/2023</p></div>
          </div>
        
        </div>
      </div>
    </>
  );
};
