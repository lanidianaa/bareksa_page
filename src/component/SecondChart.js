import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAction} from "../redux/action";

const SecondChart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  const {user_category} = useSelector((state) => state.data.data);
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  useEffect(() => {
    setData1(parseInt(user_category?.conservative));
    setData2(parseInt(user_category?.moderate));
    setData3(parseInt(user_category?.risk_taker));
    setData4(parseInt(user_category?.risk_averse));
  }, [user_category]);
  const [series, setSeries] = useState({
    series: [],
  });
  useEffect(() => {
    setSeries({
      series: [data1, data2, data3, data4],
    });
  }, [user_category]);
  const [state, setState] = useState({
    options: {
      chart: {
        width: 800,
        type: "polarArea",
      },
      labels: ["Conservative", "Moderate", "Risk Taker", "Risk Averse"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        pallette: "palette1",
      },
    },
  });
  return (
    <div style={{paddingLeft: "85px", paddingTop: "50px"}}>
      <Chart
        options={state.options}
        series={series.series}
        type="polarArea"
        width="360"
      />
    </div>
  );
};
export default SecondChart;
