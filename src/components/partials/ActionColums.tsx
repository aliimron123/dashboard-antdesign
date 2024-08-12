import { Table, Button, Form, Input, Popconfirm } from "antd";
import type { TableColumnsType, TableProps, GetRef, InputRef } from "antd";
import React, { useState } from "react";

interface DataProps<T> {
  data: T[];
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  showDetailButton?: boolean;
}

const ActionColums = <T extends { key: React.Key }>({ data }: DataProps<T>) => {
  const [dataSource, setDataSource] = useState(data);
  const [count, setCount] = useState(2);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleAdd = () => {
    if (dataSource.length === 0) return;
    const lastItem = dataSource[dataSource.length - 1];
    const newData = {
      ...lastItem,
      key: count,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row: T) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  return <div></div>;
};

export default ActionColums;
