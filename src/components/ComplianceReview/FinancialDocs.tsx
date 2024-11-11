import { Button, Card, Row, Col, Divider, Typography, Flex } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import usePdfViewer from "../../hooks/usePdfViewer";
import pdfFile from "../../assets/data.pdf";

const { Text } = Typography;
const FinancialDocs = () => {
  const { PdfViewer, ControlBar } = usePdfViewer({ file: pdfFile });

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
