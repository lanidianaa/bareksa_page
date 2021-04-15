import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAction} from "../redux/action";

const ThirdChart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);
  const {orders} = useSelector((state) => state.data.data);
  const [revenue1, setRevenue1] = useState(0);
  const [revenue2, setRevenue2] = useState(0);
  const [revenue3, setRevenue3] = useState(0);
  const [revenue4, setRevenue4] = useState(0);
  const [revenue5, setRevenue5] = useState(0);
  const [revenue6, setRevenue6] = useState(0);
  const [revenue7, setRevenue7] = useState(0);
  useEffect(() => {
    {
      let total1 = 0;
      orders
        ?.filter((val, i) => val.status === "completed" && i < 13)
        .forEach((subVal) => (total1 += parseInt(subVal.conversion_revenue)));
      setRevenue1(parseInt(total1));
    }
    {
      let total2 = 0;
      orders
        ?.filter((val, i) => val.status === "completed" && 12 < i && i < 25)
        .forEach((subVal) => (total2 += parseInt(subVal.conversion_revenue)));
      setRevenue2(parseInt(total2));
    }
    {
      let total3 = 0;
      orders
        ?.filter((val, i) => val.status === "completed" && 24 < i && i < 37)
        .forEach((subVal) => (total3 += parseInt(subVal.conversion_revenue)));
      setRevenue3(parseInt(total3));
    }
    {
      let total4 = 0;
      orders
        ?.filter((val, i) => val.status === "completed" && 36 < i && i < 50)
        .forEach((subVal) => (total4 += parseInt(subVal.conversion_revenue)));
      setRevenue4(parseInt(total4));
    }
    {
      let total5 = 0;
      orders
        ?.filter((val, i) => val.status === "completed" && 49 < i && i < 63)
        .forEach((subVal) => (total5 += parseInt(subVal.conversion_revenue)));
      setRevenue5(parseInt(total5));
    }
    {
      let total6 = 0;
      orders
        ?.filter((val, i) => val.status === "completed" && 62 < i && i < 75)
        .forEach((subVal) => (total6 += parseInt(subVal.conversion_revenue)));
      setRevenue6(parseInt(total6));
    }
    {
      let total7 = 0;
      orders
        ?.filter((val, i) => val.status === "completed" && 74 < i)
        .forEach((subVal) => (total7 += parseInt(subVal.conversion_revenue)));
      setRevenue7(parseInt(total7));
    }
  }, [orders]);

  const [series, setSeries] = useState({
    series: [],
  });
  useEffect(() => {
    setSeries({
      series: [
        {
          name: "data",
          data: [
            revenue1,
            revenue2,
            revenue3,
            revenue4,
            revenue5,
            revenue6,
            revenue7,
          ],
        },
      ],
    });
  }, [orders]);

  const [state, setState] = useState({
    // series: [
    //   {
    //     name: "series2",
    //     data: [11, 32, 45, 32, 34, 52, 41],
    //   },
    // ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <div className="mixed-chart">
      <Chart
        options={state.options}
        series={series.series}
        type="area"
        width="500"
      />
    </div>
  );
};

export default ThirdChart;
