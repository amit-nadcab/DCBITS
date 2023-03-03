import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { getWithdrawHistory } from "../utils/apiFunction";

export const WithdrawHistory = () => {
  const { user_id } = useSelector((state) => state.data.value);
  const [tab, setTab] = useState([]);

  useEffect(() => {
    getWithdrawHistory(user_id).then((res) => {
      setTab(res?.history);
    });
  }, [user_id]);

  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <div className="page-wrapper pt-5">
        <div className="container pt-5">
          <h4 className="text-center text-secondary">Withdraw History</h4>
          <div className="table-responsive mt-5 p-3" style={{ background: "#FFF", border: "1px solid white", borderRadius: "12px" }}>
            <table className="table table-borderless table-striped">
              <thead className="text-center" style={{ background: "#F4F5F9",border: "1px solid white", borderRadius: "12px" }}>
                <tr className="text-dark">
                  <th scope="col">Sr</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Hash</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {tab && tab?.length > 0 ? (
                  tab.map((e, i) => {
                    return (
                      <tr>
                        <td>1</td>
                        <td className="td-min-with">500 USDT + 500 DCBT</td>
                        <td className="td-min-with">18-02-2023</td>
                        <td>0x0000</td>
                      </tr>
                    );
                  })
                ) : (
                  <tbody className="">
                    <p className="text-dark text-center w-100">No Data Found</p>
                  </tbody>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
