import { Button, Card, Row, Col, Divider, Typography, Flex } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import usePdfViewer from "../../hooks/usePdfViewer";

const { Text } = Typography;
const FinancialDocs = () => {
  const file =
    "https://cb-lending-staging.s3.ap-southeast-1.amazonaws.com/Transaction-Receipt-Loan-SP-KQ3JF3-01-10-2024-1730189137475-1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2HE4366GYZCBJV45%2F20241111%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20241111T180031Z&X-Amz-Expires=3600&X-Amz-Signature=09a3657baba683ad77b9844d2c3d8e9d16d2f61a7a0d03e5f14a2ca23e83c7f0&X-Amz-SignedHeaders=host&x-id=GetObject";

  const { PdfViewer, ControlBar } = usePdfViewer({ file });

  return (
    <Card
      id="financial-documents"
      title={
        <Flex align="center" gap={"20px"}>
          <span>Financial Statements</span>
          <Text type="success">
            Verifications: Passed{" "}
            <CheckCircleOutlined style={{ color: "green", marginLeft: 8 }} />
          </Text>
        </Flex>
      }
      extra={<ControlBar />}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <PdfViewer />
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

export default FinancialDocs;
