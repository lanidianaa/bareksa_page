import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAction} from "../redux/action";

const FChart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  let color = ["#5C8F94", "#725E9C", "#E4EAEB", "#EBA45E"];
  const {orders} = useSelector((state) => state.data.data);
  const [revenue1, setRevenue1] = useState(0);
  const [revenue2, setRevenue2] = useState(0);
  const [revenue3, setRevenue3] = useState(0);
  const [revenue4, setRevenue4] = useState(0);
  useEffect(() => {
    {
      let total1 = 0;
      orders
        ?.filter(
          (val) => val.conversion_item === "Bonds" && val.status === "completed"
        )
        .forEach((subVal) => (total1 += parseInt(subVal.conversion_revenue)));
      setRevenue1(parseInt(total1));
    }
    {
      let total2 = 0;
      orders
        ?.filter(
          (val) =>
            val.conversion_item === "Mutualfund" && val.status === "completed"
        )
        .forEach((subVal) => (total2 += parseInt(subVal.conversion_revenue)));
      setRevenue2(parseInt(total2));
    }
    {
      let total3 = 0;
      orders
        ?.filter(
          (val) =>
            val.conversion_item === "Unit Link" && val.status === "completed"
        )
        .forEach((subVal) => (total3 += parseInt(subVal.conversion_revenue)));
      setRevenue3(parseInt(total3));
    }
    {
      let total4 = 0;
      orders
        ?.filter(
          (val) => val.conversion_item === "Gold" && val.status === "completed"
        )
        .forEach((subVal) => (total4 += parseInt(subVal.conversion_revenue)));
      setRevenue4(parseInt(total4));
    }
  }, [orders]);

  const [series, setSeries] = useState({
    series: [],
  });
  useEffect(() => {
    setSeries({
      series: [revenue1, revenue2, revenue3, revenue4],
    });
  }, [orders]);
  const [state, setState] = useState({
    options: {
      chart: {
        width: 310,
        type: "pie",
      },
      labels: ["Bonds", "Mutualfund", "Unit Link", "Gold"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 310,
            },
            legend: {
              show: true,
              position: "bottom",
            },
            theme: {
              palette: `${color}`,
            },
          },
        },
      ],
    },
  });
  return (
    <div style={{paddingTop: "50px"}}>
      {orders ? (
        <Chart
          options={state.options}
          series={series.series}
          type="pie"
          width="315"
        />
      ) : null}
    </div>
  );
};
export default FChart;
