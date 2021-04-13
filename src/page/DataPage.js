import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAction} from "../redux/action";
import base from "../Take Home Test (Front-End Dev)/Iconic/Filled/base.png";
import graph from "../Take Home Test (Front-End Dev)/Iconic/basegraph.png";
import graph2 from "../Take Home Test (Front-End Dev)/Iconic/Filled/basebig.png";
import titik from "../Take Home Test (Front-End Dev)/Iconic/Filled/titik.png";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRange, DateRangePicker} from "react-date-range";
import {PieChart, Pie, Tooltip} from "recharts";

const DataPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  const {orders} = useSelector((state) => state.data.data);

  const [revenue1, setRevenue1] = useState(0);
  const [revenue2, setRevenue2] = useState(0);
  const [revenue3, setRevenue3] = useState(0);
  const [revenue4, setRevenue4] = useState(0);

  useEffect(() => {
    {
      let total1 = 0;
      orders
        ?.filter((val) => val.conversion_item === "Bonds")
        .forEach((subVal) => (total1 += parseInt(subVal.conversion_revenue)));
      setRevenue1(total1);
    }
    {
      let total2 = 0;
      orders
        ?.filter((val) => val.conversion_item === "Mutualfund")
        .forEach((subVal) => (total2 += parseInt(subVal.conversion_revenue)));
      setRevenue2(total2);
    }
    {
      let total3 = 0;
      orders
        ?.filter((val) => val.conversion_item === "Unit Link")
        .forEach((subVal) => (total3 += parseInt(subVal.conversion_revenue)));
      setRevenue3(total3);
    }
    {
      let total4 = 0;
      orders
        ?.filter((val) => val.conversion_item === "Gold")
        .forEach((subVal) => (total4 += parseInt(subVal.conversion_revenue)));
      setRevenue4(total4);
    }
  }, [orders]);

  const tableOrder = () => {
    return (
      <div style={{width: "750px", paddingTop: "20px"}}>
        <div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                height: "56px",
              }}
              className="tableheadborder"
            >
              <div
                style={{
                  width: "151px",
                  display: "flex",
                  paddingLeft: "10px",
                }}
                className="tableheadfont"
              >
                Order
                <br />
                Number
              </div>
              <div
                style={{
                  width: "151px",
                  display: "flex",
                  paddingLeft: "5px",
                }}
                className="tableheadfont"
              >
                Status
              </div>
              <div
                style={{
                  width: "151px",
                  display: "flex",
                  paddingLeft: "5px",
                }}
                className="tableheadfont"
              >
                Operator
              </div>
              <div
                style={{
                  width: "151px",
                  display: "flex",
                  paddingLeft: "5px",
                }}
                className="tableheadfont"
              >
                Location
              </div>
              <div
                style={{
                  width: "151px",
                  display: "flex",
                  paddingLeft: "5px",
                }}
                className="tableheadfont"
              >
                Start Date
              </div>
              <div
                style={{
                  width: "151px",
                  display: "flex",
                  paddingLeft: "5px",
                }}
                className="tableheadfont"
              >
                Due Date
              </div>
            </div>

            {orders
              ? orders.map((val) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        height: "56px",
                      }}
                      className="tableborder"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          wordBreak: "break-word",
                          width: "150px",
                          paddingLeft: "1px",
                          paddingRight: "10px",
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
                          display: "flex",
                          flexWrap: "wrap",
                          wordBreak: "break-word",
                          width: "150px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        className="tablebodyfont"
                      >
                        {val.status === "pending" ? (
                          <div
                            style={{
                              height: "24px",
                              width: "95.5px",
                              backgroundColor: "#E69849",
                              color: "#FFFFFF",
                              paddingLeft: "10px",
                              paddingTop: "6px",
                              borderRadius: "4px",
                            }}
                          >
                            <div style={{paddingLeft: "21px"}}>
                              {val.status.charAt(0).toUpperCase() +
                                val.status.slice(1).toLowerCase()}
                            </div>
                          </div>
                        ) : val.status === "completed" ? (
                          <div
                            style={{
                              height: "24px",
                              width: "95.5px",
                              backgroundColor: "#789764",
                              color: "#FFFFFF",
                              paddingLeft: "10px",
                              paddingTop: "6px",
                              borderRadius: "4px",
                            }}
                          >
                            <div style={{paddingLeft: "12px"}}>
                              {val.status.charAt(0).toUpperCase() +
                                val.status.slice(1).toLowerCase()}
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{
                              height: "24px",
                              width: "95.5px",
                              backgroundColor: "#D66D4B",
                              color: "#FFFFFF",
                              paddingLeft: "10px",
                              paddingTop: "6px",
                              borderRadius: "4px",
                            }}
                          >
                            <div style={{paddingLeft: "17px"}}>
                              {val.status.charAt(0).toUpperCase() +
                                val.status.slice(1).toLowerCase()}
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          wordBreak: "break-word",
                          width: "150px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        className="tablebodyfont"
                      >
                        {val.full_name}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          wordBreak: "break-word",
                          width: "150px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        className="tablebodyfont"
                      >
                        {val.location}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          wordBreak: "break-word",
                          width: "150px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        className="tablebodyfont"
                      >
                        {val.start_date}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          wordBreak: "break-word",
                          width: "150px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        className="tablebodyfont"
                      >
                        {val.due_date}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  };

  const myData = [
    {name: "Bonds", value: revenue1, fill: "#5C8F94"},
    {name: "Mutualfund", value: revenue2, fill: "#725E9C"},
    {name: "Unit Link", value: revenue3, fill: "#E4EAEB"},
    {name: "Gold", value: revenue4, fill: "#EBA45E"},
  ];

  const [stateDate, setStateDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div style={{paddingTop: "88px"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{height: "56px", backgroundColor: "#F5F5F5"}}>
          <div
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              textAlign: "right",
              fontWeight: "600",
              fontFamily: "Montserrat",
              paddingTop: "20px",
              paddingRight: "20px",
            }}
          >
            8 April 2021
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "15px",
            paddingTop: "15px",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "472px",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
            }}
          >
            <img
              src={graph}
              alt=""
              style={{
                position: "absolute",
                maxWidth: "300px",
                maxHeight: "472px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333333",
                  position: "absolute",
                  paddingTop: "22px",
                  paddingLeft: "20px",
                }}
              >
                Conversion
              </div>
              <div
                style={{
                  paddingLeft: "240px",
                  paddingTop: "22px",
                  position: "absolute",
                }}
              >
                <img src={base} alt="" style={{position: "absolute"}} />{" "}
                <img src={titik} alt="" style={{paddingLeft: "10px"}} />{" "}
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                paddingTop: "70px",
                paddingLeft: "27px",
              }}
            >
              <PieChart width={250} height={250}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={myData}
                  outerRadius={70}
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div
            style={{
              width: "300px",
              height: "472px",
              paddingLeft: "320px",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
            }}
          >
            <img
              src={graph}
              alt=""
              style={{
                position: "absolute",
                maxWidth: "300px",
                maxHeight: "472px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333333",
                  position: "absolute",
                  paddingTop: "22px",
                  paddingLeft: "20px",
                }}
              >
                Users
              </div>
              <div
                style={{
                  paddingLeft: "240px",
                  position: "absolute",
                  paddingTop: "22px",
                }}
              >
                <img src={base} alt="" style={{position: "absolute"}} />{" "}
                <img src={titik} alt="" style={{paddingLeft: "10px"}} />{" "}
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                paddingTop: "70px",
                paddingLeft: "20px",
              }}
            >
              The graphs
            </div>
          </div>
          <div
            style={{
              width: "328px",
              height: "472px",
              paddingLeft: "640px",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
            }}
          >
            <img
              src={graph2}
              alt=""
              style={{
                position: "absolute",
                maxWidth: "590px",
                height: "432px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333333",
                  position: "absolute",
                  paddingTop: "22px",
                  paddingLeft: "20px",
                }}
              >
                Revenue
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                paddingTop: "70px",
                paddingLeft: "20px",
              }}
            >
              The graphs
            </div>
          </div>
        </div>
        {/* Calendar filter and order list */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "425px",
              paddingLeft: "15px",
              position: "absolute",
              paddingTop: "470px",
            }}
          >
            <div>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setStateDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={stateDate}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              paddingTop: "470px",
              paddingLeft: "450px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "132%",
                fontFamily: "Montserrat",
                color: "#333333",
              }}
            >
              Orders
            </div>
            <div>{tableOrder()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
