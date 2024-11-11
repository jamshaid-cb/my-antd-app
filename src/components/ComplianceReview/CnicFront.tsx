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
  DatePicker,
} from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CnicFront = () => {
  return (
    <Card
      id="cnic-front"
      title={
        <Flex align="center" gap={"20px"}>
          <span>CNIC Front</span>
          <Text type="success">
            Verifications: Passed{" "}
            <CheckCircleOutlined style={{ color: "green", marginLeft: 8 }} />
          </Text>
        </Flex>
      }
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form layout="vertical">
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input defaultValue="Shahid Khan" />
            </Form.Item>

            <Form.Item
              label="Father's/Husband's Name"
              name="fatherHusbandName"
              rules={[
                {
                  required: true,
                  message: "Please enter father’s or husband’s name",
                },
              ]}
            >
              <Input defaultValue="Abdullah Khan" />
            </Form.Item>
            <Flex gap={20}>
              <Form.Item
                label="CNIC Number"
                name="cnicNumber"
                rules={[
                  { required: true, message: "Please enter your CNIC number" },
                ]}
              >
                <Input defaultValue="42201-0145564-2" />
              </Form.Item>

              <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please enter your date of birth",
                  },
                ]}
              >
                <Input defaultValue="12/05/1986" />
              </Form.Item>
            </Flex>
            <Flex gap={20}>
              <Form.Item
                label="Date of Issue"
                name="dateOfIssue"
                rules={[
                  { required: true, message: "Please enter the date of issue" },
                ]}
              >
                <DatePicker />
              </Form.Item>

              <Form.Item
                label="Date of Expiry"
                name="dateOfExpiry"
                rules={[
                  {
                    required: true,
                    message: "Please enter the date of expiry",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Flex>
          </Form>
        </Col>
        <Col span={12}>
          <Image src="https://cb-lending-staging.s3.ap-southeast-1.amazonaws.com/5e52da93e0ac7a21716b0327c4a8777e-1730466747806-41.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2HE4366G5DVMJO6L%2F20241111%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20241111T122006Z&X-Amz-Expires=3600&X-Amz-Signature=d6ce110c18363a1784e0e75748e46d9ced1b2f4444f7003b7ad48452b8b2e738&X-Amz-SignedHeaders=host&x-id=GetObject" />
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

export default CnicFront;
