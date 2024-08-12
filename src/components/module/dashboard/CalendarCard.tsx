import { Calendar } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import React, { useState, useEffect } from "react";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: any) => time.toLocaleTimeString();

  return (
    <div className="h-content flex w-full max-w-sm flex-col rounded-lg bg-white px-2 py-3 phone:max-w-full">
      <h1 className="mb-2 ml-2 text-lg font-medium">Calendar</h1>
      <p className="time-clock my-4 text-end text-2xl"> {formatTime(time)}</p>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarCard;
