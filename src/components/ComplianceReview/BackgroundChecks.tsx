import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Flex,
  List,
  Tag,
  theme,
} from "antd";
import {
  CheckCircleOutlined,
  FileTextOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const data = [
  {
    title: "Late Payment History",
    description: "No irregularities",
    status: "Passed",
  },
  {
    title: "Loan Default History",
    status: "Passed",
    description: "No defaults",
  },
  {
    title: "Loan Product History",
    status: "Passed",
    description: "Customer has availed loans",
  },
];

const BackgroundChecks = () => {
  const { token }: any = theme.useToken();
  return (
    <Row id="background-checks">
      <Col span={24}>
        <Card
          title={
            <Flex
              style={{ height: "80px" }}
              justify="center"
              vertical
              gap={"15px"}
            >
              <span>Background Checks</span>
              <Text style={{ color: token?.palette?.secondary.main }}>
                Tasdeeq Checks
              </Text>
            </Flex>
          }
          extra={
            <Flex align="center" gap={"10px"}>
              <Button size="small" icon={<UploadOutlined />}>
                Upload Report
              </Button>
              <Button size="small" icon={<FileTextOutlined />}>
                Generate Report
              </Button>
            </Flex>
          }
        >
          <List
            dataSource={data}
            renderItem={(item, idx) => (
              <List.Item key={idx}>
                <Text>{item.title}</Text>
                <Text type="secondary" style={{ width: "250px" }}>
                  {item.description}{" "}
                  <CheckCircleOutlined
                    style={{ color: "green", marginLeft: 8 }}
                  />
                </Text>
                <Tag color="success">{item.status}</Tag>
                <Text></Text>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default BackgroundChecks;
