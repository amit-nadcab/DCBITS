import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";
import { getInvestmentHistory } from "../utils/apiFunction";

export const InvestHistory = () => {
  const { user_id } = useSelector((state) => state.data.value);
  const [tab, setTab] = useState([]);

  useEffect(() => {
    getInvestmentHistory(user_id).then((res) => {
      setTab(res?.history);
    });
  }, [user_id]);

  

  return (
    <>
      <Sidebar />
      <div className="page-wrapper pt-5">
        <div className="container pt-5">
          <h2 className="text-center text-white">Investment History</h2>
          <div className="table-responsive mt-5">
            <table className="table table-borderless table-striped">
              <thead className="text-center" style={{ background: "#6A35FF" }}>
                <tr className="text-white">
                  <th scope="col">Sr.</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Investment Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {tab && tab.length > 0 ? (
                  tab.map((e, i) => {
                    const test = new Date((e?.createdAt));
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td className="td-min-with">
                            {
                                e?.invest_type === 1 ? `${e?.roi_amount} USDT + ${e?.roi_amount} DCBT` : 
                                `${e?.roi_amount} USDT`
                            }
                        </td>
                        <td className="td-min-with">
                          {e?.invest_type === 1 ? "Investment" : "Reinvestment"}
                        </td>
                        <td>
                          {e?.is_roi_expired === true ? "Completed" : "Running"}
                        </td>
                        <td>{test.toLocaleDateString()}</td>
                      </tr>
                    );
                  })
                ) : (
                  <div> No data found</div>
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
