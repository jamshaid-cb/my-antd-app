import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Divider,
  Typography,
  Flex,
  Form,
  Select,
} from "antd";
import { CheckCircleOutlined, SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

const BusinessDetails = () => {
  return (
    <Card id="business-details" title={"Business Details"}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form layout="vertical">
            <Flex gap={20}>
              <Form.Item label="Business Name" style={{ width: "100%" }}>
                <Input
                  prefix={<SearchOutlined />}
                  defaultValue="Abdullah Khan"
                  placeholder="Enter Business Name"
                />
              </Form.Item>
              <Form.Item label="Type" style={{ width: "100%" }}>
                <Input
                  prefix={<SearchOutlined />}
                  defaultValue="SME"
                  placeholder="Enter Business Name"
                />
              </Form.Item>
            </Flex>
            <Form.Item label="Business Address">
              <Input.TextArea placeholder="Enter Business Address" rows={4} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Divider />
      <Button type="primary" style={{ marginRight: 10 }}>
        Accept
      </Button>
      <Button type="default">Reject</Button>
    </Card>
  );
};

export default BusinessDetails;
