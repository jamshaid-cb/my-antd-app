import { useRef, useState } from "react";
import { Table, Tag, Input, Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import type { ColumnsType, ColumnType } from "antd/es/table";

interface LoanOutstanding {
  principal: string;
  markup: string;
  fees: string;
}

interface DataType {
  key: string;
  loanId: string;
  type: string;
  date: string;
  amount: string;
  loanOutstanding: LoanOutstanding;
  children?: DataType[];
}

const TransactionsTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: string | string[]
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex as string)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(
                selectedKeys as string[],
                confirm,
                dataIndex as string
              )
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              if (clearFilters) handleReset(clearFilters);
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0] as string);
              setSearchedColumn(dataIndex as string);
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="text"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex as keyof DataType]
        ?.toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Loan ID",
      dataIndex: "loanId",
      key: "loanId",
      ...getColumnSearchProps("loanId"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type: string) => {
        let color = "";
        switch (type) {
          case "Disbursement":
            color = "blue";
            break;
          case "Deposit Refund":
            color = "success";
            break;
          case "Repayment":
            color = "blue";
            break;
          case "Markup Accrued":
            color = "warning";
            break;
          default:
            color = "gray";
        }
        return <Tag color={color}>{type}</Tag>;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      ...getColumnSearchProps("date"),
    },
    {
      title: "Amount (PKR)",
      dataIndex: "amount",
      key: "amount",
      ...getColumnSearchProps("amount"),
    },
    {
      title: "Loan Outstanding",
      children: [
        {
          title: "Principal",
          dataIndex: ["loanOutstanding", "principal"],
          key: "loanOutstandingPrincipal",
          ...getColumnSearchProps(["loanOutstanding", "principal"]),
        },
        {
          title: "Markup",
          dataIndex: ["loanOutstanding", "markup"],
          key: "loanOutstandingMarkup",
          ...getColumnSearchProps(["loanOutstanding", "markup"]),
        },
        {
          title: "Fees",
          dataIndex: ["loanOutstanding", "fees"],
          key: "loanOutstandingFees",
          ...getColumnSearchProps(["loanOutstanding", "fees"]),
        },
      ],
    },
  ];

  const generateData = (): DataType[] => {
    const data: DataType[] = [];
    for (let i = 1; i <= 100; i++) {
      const hasChildren = i % 10 === 0;
      const record: DataType = {
        key: i.toString(),
        loanId: `CB-${i < 10 ? "WFFJ" : "SFJ"}${i}`,
        type: ["Disbursement", "Deposit Refund", "Repayment", "Markup Accrued"][
          i % 4
        ],
        date: moment().subtract(i, "days").format("YYYY-MM-DD"),
        amount: `${(i * 100) % 10000}`,
        loanOutstanding: {
          principal: `${(i * 100) % 10000}`,
          markup: i % 4 === 0 ? `${(i * 10) % 500}` : "-",
          fees: "-",
        },
        ...(hasChildren && {
          children: [
            {
              key: `${i}-1`,
              loanId: "-",
              type: "Deposit Refund",
              date: moment().subtract(i, "days").format("YYYY-MM-DD"),
              amount: "200",
              loanOutstanding: {
                principal: "-",
                markup: "-",
                fees: "-",
              },
            },
            {
              key: `${i}-2`,
              loanId: `CB-SFJ${i}`,
              type: "Repayment",
              date: moment().subtract(i, "days").format("YYYY-MM-DD"),
              amount: "10,700",
              loanOutstanding: {
                principal: "0",
                markup: "0",
                fees: "-",
              },
            },
            {
              key: `${i}-3`,
              loanId: `CB-SFJ${i}`,
              type: "Markup Accrued",
              date: moment().subtract(i, "days").format("YYYY-MM-DD"),
              amount: "500",
              loanOutstanding: {
                principal: "10,000",
                markup: "500",
                fees: "-",
              },
            },
          ],
        }),
      };

      data.push(record);
    }
    return data;
  };

  const data = generateData();

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
        }}
      />
    </div>
  );
};

export default TransactionsTable;
