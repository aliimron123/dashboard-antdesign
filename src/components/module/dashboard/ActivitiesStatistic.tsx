import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

const ActivitiesStatistic = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: "100%",
      width: "100%",
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 100,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 450,
        },
      },
      redrawOnParentResize: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      tickAmount: 3,
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];

  return (
    <div className="flex w-11/12 min-w-[350px] max-w-full flex-col gap-4 rounded-lg bg-white p-4 phone:w-full">
      <h1 className="ml-5 text-lg font-medium">Activities Statistic</h1>
      <div className="h-full w-full transition-all ease-in-out">
        <Chart
          options={options}
          series={series}
          type="area"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default ActivitiesStatistic;
