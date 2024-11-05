import React from "react";
import { Button, Row, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const useStyle = createStyles(({ css, token }) => {
  const { antCls }: any = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const columns2: TableColumnsType = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "John",
        value: "John",
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
  },
  {
    title: "Other",
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Address",
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 150,
          },
          {
            title: "Block",
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100,
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right",
  },
];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Button type="default">{text}</Button>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: (_) => (
      <Space size="middle">
        <Button type="link" danger>
          Delete{" "}
        </Button>
      </Space>
    ),
  },
];

const dataSource2 = Array.from({ length: 100 }).map((_, i) => ({
  key: `${i}`,
  name: "John Brown",
  age: i + 1,
  street: "Lake Park",
  building: "C",
  number: 2035,
  companyAddress: "Lake Street 42",
  companyName: "SoftLake Co",
  gender: "M",
}));

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Tables: React.FC = () => {
  const { styles } = useStyle();
  return (
    <>
      <Row>
        <Table<DataType> columns={columns} dataSource={data} />
      </Row>
      <Row>
        <Table
          className={styles.customTable}
          columns={columns2}
          dataSource={dataSource2}
          bordered
          size="middle"
          scroll={{ x: "calc(700px + 50%)", y: 47 * 5 }}
        />
      </Row>
    </>
  );
};

export default Tables;
