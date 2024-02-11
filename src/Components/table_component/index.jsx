import React from "react";
import { Table, Space } from "antd";

export default function TableComponent({ data, setDeleteRecord }) {
  const deleteValue = (record) => {
    setDeleteRecord(record);
  };
  const columns = [
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
    },
    {
      title: "Buying Price",
      dataIndex: "buyPrice",
      key: "buyPrice",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Threshold Value",
      dataIndex: "tValue",
      key: "tValue",
    },
    {
      title: "Expiry Date",
      dataIndex: "eDate",
      key: "eDate",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (availability) => (
        <div style={{ color: availability === "In-stock" ? "green" : "red" }}>
          {availability}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => deleteValue(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 500, y: 350 }}
      />
    </div>
  );
}
