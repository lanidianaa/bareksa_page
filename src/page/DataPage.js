import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAction} from "../redux/action";
import base from "../Take Home Test (Front-End Dev)/Iconic/Filled/base.png";
import graph from "../Take Home Test (Front-End Dev)/Iconic/basegraph.png";
import graph2 from "../Take Home Test (Front-End Dev)/Iconic/Filled/basebig.png";
import titik from "../Take Home Test (Front-End Dev)/Iconic/Filled/titik.png";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRange} from "react-date-range";
import ThirdChart from "../component/ThirdChart";
import SecondChart from "../component/SecondChart";
import FChart from "../component/FChart";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const DataPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);
  const {orders} = useSelector((state) => state.data.data);

  //calendar filter
  const [stateDate, setStateDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [filt, setFilt] = useState(false);
  const handleFilter = () => {
    console.log(stateDate[0].startDate.toString());
    console.log(stateDate[0].endDate.toString());
    setFilt(true);
  };

  const handleCancel = () => {
    setFilt(false);
    setStateDate([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  };

  //set today's date
  const [theDate, setTheDate] = useState();
  useEffect(() => {
    let today = new Date();
    let monthNow = "";
    const month = today.getMonth() + 1;
    if (month === 1) monthNow = "Januari";
    if (month === 2) monthNow = "Februari";
    if (month === 3) monthNow = "Maret";
    if (month === 4) monthNow = "April";
    if (month === 5) monthNow = "Mei";
    if (month === 6) monthNow = "Juni";
    if (month === 7) monthNow = "Juli";
    if (month === 8) monthNow = "Agustus";
    if (month === 9) monthNow = "September";
    if (month === 10) monthNow = "Oktober";
    if (month === 11) monthNow = "November";
    if (month === 12) monthNow = "Desember";

    const date = today.getDate() + " " + monthNow + " " + today.getFullYear();
    setTheDate(date);
  }, []);

  //table for all order list
  const tableOrder = () => {
    return (
      <div className="tablediv">
        <div>
          <div className="tablesubdiv">
            <div className="tableheadborder">
              <div className="tableheadfont">
                Order
                <br />
                Number
              </div>
              <div className="tableheadfont">Status</div>
              <div className="tableheadfont">Operator</div>
              <div className="tableheadfont">Location</div>
              <div className="tableheadfont">Start Date</div>
              <div className="tableheadfont">Due Date</div>
            </div>
            {filt ? (
              <div>Click Cancel Button to get show All Data</div>
            ) : (
              <>
                {orders
                  ? orders.map((val) => {
                      return (
                        <div className="tableborder">
                          <div
                            style={{
                              paddingLeft: "1px",
                            }}
                            className="tablebodyfont"
                          >
                            <div style={{paddingLeft: "5px"}}>
                              #
                              {val.order_id?.split("-")[1].toUpperCase() +
                                "-" +
                                val.order_id?.split("-")[2].toUpperCase()}
                            </div>
                          </div>
                          <div
                            style={{
                              paddingLeft: "10px",
                            }}
                            className="tablebodyfont"
                          >
                            {val.status === "pending" ? (
                              <div className="tableStatusSect">
                                <div style={{paddingLeft: "21px"}}>
                                  {val.status.charAt(0).toUpperCase() +
                                    val.status.slice(1).toLowerCase()}
                                </div>
                              </div>
                            ) : val.status === "completed" ? (
                              <div className="tableStatusSecSect">
                                <div style={{paddingLeft: "12px"}}>
                                  {val.status.charAt(0).toUpperCase() +
                                    val.status.slice(1).toLowerCase()}
                                </div>
                              </div>
                            ) : (
                              <div className="tableStatusThirdSect">
                                <div style={{paddingLeft: "17px"}}>
                                  {val.status.charAt(0).toUpperCase() +
                                    val.status.slice(1).toLowerCase()}
                                </div>
                              </div>
                            )}
                          </div>
                          <div
                            style={{
                              paddingLeft: "10px",
                            }}
                            className="tablebodyfont"
                          >
                            {val.full_name}
                          </div>
                          <div
                            style={{
                              paddingLeft: "10px",
                            }}
                            className="tablebodyfont"
                          >
                            {val.location}
                          </div>
                          <div
                            style={{
                              paddingLeft: "10px",
                            }}
                            className="tablebodyfont"
                          >
                            {val.start_date}
                          </div>
                          <div
                            style={{
                              paddingLeft: "10px",
                            }}
                            className="tablebodyfont"
                          >
                            {val.due_date}
                          </div>
                        </div>
                      );
                    })
                  : null}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  //counting total Revenue
  const totalRev = () => {
    let total = 0;
    orders
      ?.filter((val) => val.status === "completed")
      .forEach((val) => (total += parseInt(val.conversion_revenue)));
    return total.toLocaleString();
  };

  //date range for revenue
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div style={{paddingTop: "88px"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div className="topDiv">
          <div className="dateDiv">{theDate}</div>
        </div>
        <div className="middleDiv">
          <div className="midFirstDiv">
            <img src={graph} alt="" className="midImg" />
            <div className="midSubdiv">
              <div className="midGraphTitle">Conversion</div>
              <div className="midSmallBox">
                <img src={base} alt="" className="midBase" />{" "}
                <img src={titik} alt="" className="midBaseFill" />{" "}
              </div>
            </div>
            <div className="midFirstGraph">
              <FChart />
            </div>
          </div>
          <div className="midSecDiv">
            <img src={graph} alt="" className="midSecImg" />
            <div className="midSubSecdiv">
              <div className="midGraphTitle">Users</div>
              <div className="midSmallBox">
                <img src={base} alt="" className="midBase" />{" "}
                <img src={titik} alt="" className="midBaseFill" />{" "}
              </div>
            </div>
            <div className="midSecGraph">
              <SecondChart />
            </div>
          </div>
          <div className="midThirdDiv">
            <img src={graph2} alt="" className="midThirdImg" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
              }}
            >
              <div className="midGraphTitle">Revenue</div>
              <div className="calendarRange">
                <DateRangePicker onChange={onChange} value={value} />
              </div>
            </div>
            <div className="midThirdGraph" id="chart">
              <ThirdChart />
            </div>
            <div className="totalrev">Total Revenue</div>
            <div className="numrev">${totalRev()}</div>
          </div>
        </div>
        {/* Calendar filter and order list */}
        <div className="bottomDiv">
          <div className="calendarDiv">
            <div>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setStateDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={stateDate}
              />
              <button className="cancelbtn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="filterbtn" onClick={handleFilter}>
                Filter
              </button>
            </div>
          </div>
          <div className="outerOrderDiv">
            <div className="orderDiv">Orders</div>
            <div>{tableOrder()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
