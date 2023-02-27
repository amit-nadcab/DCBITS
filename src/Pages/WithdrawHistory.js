import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "../Components/Sidebar";
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
          <h2 className="text-center text-secondary">Withdraw History</h2>
          <div className="table-responsive mt-5">
            <table className="table table-borderless table-striped">
              <thead className="text-center" style={{ background: "#6A35FF" }}>
                <tr className="text-white">
                  <th scope="col">Sr.</th>
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
                    <div className="text-white text-center">No Data Found</div>
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
