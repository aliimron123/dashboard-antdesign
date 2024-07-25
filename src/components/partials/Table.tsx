import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import React, { useState } from "react";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface DataProps<T> extends TableProps<T> {
  data: T[];
  columns: TableColumnsType<T>;
  scrollHeader?: boolean;
  scrollValue?: number | string;
  selectable?: boolean;
}

const TableComponents = <T extends object>({
  data,
  columns,
  scrollHeader = false,
  scrollValue = 300,
  selectable = false,
  ...restProps
}: DataProps<T>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalData = data.length;

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<T> | undefined = selectable
    ? {
        selectedRowKeys,
        onChange: onSelectChange,
      }
    : undefined;

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        dataSource={data}
        columns={columns}
        pagination={{
          current,
          pageSize,
          total: totalData,
          onChange: (page, newPageSize) => {
            setCurrent(page);
            setPageSize(newPageSize);
          },
        }}
        scroll={
          scrollHeader ? { x: 1000, y: scrollValue } : { x: 1000, y: 300 }
        }
        {...restProps}
      />
    </div>
  );
};

export default TableComponents;
