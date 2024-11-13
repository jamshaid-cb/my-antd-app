import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Divider,
  Image,
  Typography,
  Flex,
  Form,
} from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;
import CNIC from "../../assets/cnic.jpeg";

const CnicBack = () => {
  return (
    <Card
      id="cnic-back"
      title={
        <Flex align="center" gap={"20px"}>
          <span>CNIC Back</span>
          <Text type="success">
            Verifications: Passed{" "}
            <CheckCircleOutlined style={{ color: "green", marginLeft: 8 }} />
          </Text>
        </Flex>
      }
    >
      <Row gutter={[16, 16]}>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Form layout="vertical">
            <Form.Item label="CNIC Address">
              <Input.TextArea placeholder="Enter CNIC Address" rows={4} />
            </Form.Item>
          </Form>
          <div>
            <Divider />
            <Button type="primary" style={{ marginRight: 10 }}>
              Accept
            </Button>
            <Button type="default">Reject</Button>
          </div>
        </Col>
        <Col span={12}>
          <Image src={CNIC} />
        </Col>
      </Row>
    </Card>
  );
};

export default CnicBack;
