import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

const GenderStatistic = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    legend: { position: "bottom" },
    colors: ["#3357FF", "#FF76CE", "#C780FA"],
    labels: ["male", "female", "others"],
    plotOptions: {
      pie: {
        donut: {
          size: "77%",
        },
      },
    },
  };

  const dataGender = [40, 50, 70];

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-white px-2 pt-4">
      <h1 className="mb-2 ml-2 text-lg font-medium">User Gender</h1>{" "}
      <Chart
        options={options}
        series={dataGender}
        type="donut"
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default GenderStatistic;
