import { UnorderedListOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

const TodoList = () => {
  const dataTodo = [
    {
      title: "minutes of meetings",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod modi amet asperiores vel vitae reiciendis at illum? Obcaecat ",
      icon: <UnorderedListOutlined />,
      create: "27-03-2014",
    },
  ];

  const data = Array.from({ length: 5 }, (_, index) => ({
    ...dataTodo[0],
    id: index,
  }));

  return (
    <section className="h-content flex w-3/4 min-w-[150px] max-w-md flex-col gap-4 rounded-lg bg-white p-4 px-4 pb-5 phone:w-full phone:max-w-4xl tablet:w-full">
      <h1 className="text-lg font-medium">Todo List</h1>
      {data.map((val, index) => (
        <React.Fragment key={index}>
          <div className="my-auto flex flex-row justify-between rounded-lg border px-2.5 py-2">
            <div className="flex gap-x-4">
              <Avatar
                style={{ backgroundColor: "#4B70F5", verticalAlign: "middle" }}
                size="large"
              >
                {val.icon}
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm capitalize">{val.title}</p>
                <p className="w-11/12 min-w-20 max-w-56 truncate text-sm">
                  {val.message}
                </p>
              </div>
            </div>

            <p className="my-auto">{val.create}</p>
          </div>
        </React.Fragment>
      ))}
      <button className="my-auto w-full">Show All</button>
    </section>
  );
};

export default TodoList;
