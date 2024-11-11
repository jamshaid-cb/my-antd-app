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
import { CheckCircleOutlined, SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

import CNIC from "../../assets/cnic.jpg";

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
              hasFeedback
              validateStatus="success"
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
              <Input prefix={<SearchOutlined />} defaultValue="Abdullah Khan" />
            </Form.Item>
            <Flex gap={20}>
              <Form.Item
                label="CNIC Number"
                name="cnicNumber"
                rules={[
                  { required: true, message: "Please enter your CNIC number" },
                ]}
                hasFeedback
                validateStatus="success"
                style={{ width: "100%" }}
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
                style={{ width: "100%" }}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Flex>
            <Flex gap={20}>
              <Form.Item
                label="Date of Issue"
                name="dateOfIssue"
                rules={[
                  { required: true, message: "Please enter the date of issue" },
                ]}
                style={{ width: "100%" }}
              >
                <DatePicker style={{ width: "100%" }} />
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
                style={{ width: "100%" }}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Flex>
          </Form>
        </Col>
        <Col span={12}>
          <Image src={CNIC} />
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
