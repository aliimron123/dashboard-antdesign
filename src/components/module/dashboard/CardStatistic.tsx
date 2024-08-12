import { Statistic, Card, Row } from "antd";
import React from "react";

interface IProps {
  format?: boolean;
  data: any[];
}

const CardStatistic = ({ data, format }: IProps) => {
  return (
    <div className="flex w-full gap-5 phone:flex-wrap">
      {data.map((val, index) => (
        <Card
          bordered={false}
          key={index}
          className="tablet:w-ful w-3/4 min-w-fit max-w-[700px] phone:w-full"
        >
          <Statistic
            title={val.title}
            value={val.value}
            valueStyle={{ color: val.color }}
            prefix={val.icon}
            suffix={val.suffix}
          />
        </Card>
      ))}
    </div>
  );
};

export default CardStatistic;
