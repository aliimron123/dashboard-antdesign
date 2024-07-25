import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

const BarStatistic = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
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
    plotOptions: {
      bar: {
        borderRadiusApplication: "end",
        borderRadius: 10,
        horizontal: false,
        columnWidth: "55%",
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 80, 22, 10, 20],
    },
  ];

  return (
    <div className="flex w-11/12 min-w-[350px] max-w-full flex-col gap-4 rounded-lg bg-white p-4 phone:w-full">
      <h1 className="ml-5 text-lg font-medium">Activities Statistic</h1>
      <div className="h-full w-full transition-all ease-in-out">
        <Chart
          options={options}
          series={series}
          type="bar"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default BarStatistic;
