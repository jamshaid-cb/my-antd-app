import {
  Layout,
  Menu,
  Table,
  Button,
  Card,
  Row,
  Col,
  Dropdown,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

const LoanReportPage = () => {
  const summaryData = [
    { label: "Total Loans", value: "02" },
    { label: "Total Disbursed Amount", value: "PKR 20,000" },
    { label: "Total Revenue Accrued", value: "PKR 0" },
    { label: "Total Loan Outstanding", value: "PKR 10,000" },
    { label: "Total Revenue Realized", value: "PKR 500" },
  ];

  const transactionData = [
    {
      key: "1",
      loanID: "CB-WFFJ2",
      type: "Disbursement",
      date: "8 Feb, 2024",
      amount: "10,000",
      principal: "10,000",
      markup: "-",
      fees: "-",
    },
    {
      key: "2",
      loanID: "-",
      type: "Deposit Refund",
      date: "6 Jan, 2024",
      amount: "200",
      principal: "-",
      markup: "-",
      fees: "-",
    },
    {
      key: "3",
      loanID: "CB-SFJ342",
      type: "Repayment",
      date: "6 Jan, 2024",
      amount: "10,700",
      principal: "0",
      markup: "0",
      fees: "-",
      children: [
        {
          key: "3-1",
          loanID: "",
          type: "Principal Repayment",
          date: "6 Jan, 2024",
          amount: "10,000",
          principal: "0",
          markup: "0",
          fees: "0",
        },
        {
          key: "3-2",
          loanID: "",
          type: "Markup Repayment",
          date: "6 Jan, 2024",
          amount: "500",
          principal: "0",
          markup: "0",
          fees: "0",
        },
        {
          key: "3-3",
          loanID: "",
          type: "Customer Deposit",
          date: "6 Jan, 2024",
          amount: "10,700",
          principal: "10,000",
          markup: "500",
          fees: "-",
        },
      ],
    },
  ];

  const columns = [
    {
      title: "Loan ID",
      dataIndex: "loanID",
      key: "loanID",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount (PKR)",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Loan Outstanding",
      children: [
        {
          title: "Principal",
          dataIndex: "principal",
          key: "principal",
        },
        {
          title: "Markup",
          dataIndex: "markup",
          key: "markup",
        },
        {
          title: "Fees",
          dataIndex: "fees",
          key: "fees",
        },
      ],
    },
  ];

  const handleExport = () => {
    // Export functionality placeholder
    console.log("Exporting data...");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["report"]}
          style={{ height: "100%", borderRight: 0 }}
          items={[
            { key: "home", label: "Home" },
            { key: "customers", label: "Customers" },
            { key: "loans", label: "Loans" },
            { key: "report", label: "Report" },
            { key: "partners", label: "Partners" },
            { key: "loan-products", label: "Loan Products" },
            { key: "settings", label: "Settings" },
          ]}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: "24px", margin: 0, minHeight: 280 }}>
          <Card>
            <Row gutter={[16, 16]}>
              {summaryData.map((data, index) => (
                <Col key={index} span={4}>
                  <h3>{data.label}</h3>
                  <p>{data.value}</p>
                </Col>
              ))}
            </Row>
          </Card>

          <div style={{ marginTop: "20px" }}>
            <Space
              style={{
                marginBottom: "16px",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Space>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="1">Transactions: Shahid Khan</Menu.Item>
                      <Menu.Item key="2">All Transactions</Menu.Item>
                    </Menu>
                  }
                >
                  <Button>
                    Transactions: Shahid Khan <DownOutlined />
                  </Button>
                </Dropdown>

                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="1">Duration: All Time</Menu.Item>
                      <Menu.Item key="2">Last Month</Menu.Item>
                      <Menu.Item key="3">Last Year</Menu.Item>
                    </Menu>
                  }
                >
                  <Button>
                    Duration: All Time <DownOutlined />
                  </Button>
                </Dropdown>
              </Space>

              <Button type="primary" onClick={handleExport}>
                Export
              </Button>
            </Space>

            <Table
              columns={columns}
              dataSource={transactionData}
              pagination={{ pageSize: 5 }}
              expandable={{
                rowExpandable: (record) => !!record?.children?.length,
              }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LoanReportPage;
