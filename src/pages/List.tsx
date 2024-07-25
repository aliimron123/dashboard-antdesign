import { Button, Flex, Space } from "antd";
import type { TableColumnsType } from "antd";
import React, { useState } from "react";
import { TableComponents } from "../components/partials";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Name", dataIndex: "name", sorter: (a, b) => a.age - b.age },
  { title: "Age", dataIndex: "age" },
  { title: "Address", dataIndex: "address" },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 200,
    render: (_, record) => (
      <Space size="middle">
        <a>Invite </a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const dataSource = Array.from<DataType>({ length: 100 }).map<DataType>(
  (_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
);

const List = () => {
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-content rounded-lg bg-white px-4 py-8">
      <Flex gap="middle" vertical>
        <Flex align="center" gap="middle">
          <Button type="primary" onClick={start}>
            Reload
          </Button>
        </Flex>
        <TableComponents
          data={dataSource}
          loading={loading}
          columns={columns}
          selectable
          bordered
        />
      </Flex>
    </div>
  );
};

export default List;
