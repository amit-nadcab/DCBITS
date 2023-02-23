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
          <h2 className="text-center text-warning">Investment History</h2>
          <div className="table-responsive mt-5">
            <table className="table table-borderless table-striped">
              <thead className="text-center" style={{ background: "#6A35FF" }}>
                <tr className="text-warning">
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
                {/* <tr>
                  <td>1</td>
                  <td className="td-min-with">500 USDT + 500 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="td-min-with">100 USDT + 100 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="td-min-with">200 USDT + 200 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="td-min-with">500 USDT + 500 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td className="td-min-with">600 USDT + 600 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td className="td-min-with">500 USDT + 500 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td className="td-min-with">1500 USDT + 1500 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td className="td-min-with">5200 USDT + 5200 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td className="td-min-with">500 USDT + 500 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td className="td-min-with">300 USDT + 300 DCBT</td>
                  <td className="td-min-with">18-02-2023</td>
                  <td>0x0000</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
