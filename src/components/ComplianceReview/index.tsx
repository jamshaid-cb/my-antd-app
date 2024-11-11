import React, { useState } from "react";
import { Anchor, Button, Drawer, Flex, Layout, theme, Typography } from "antd";
import { createStyles } from "antd-style";
import BackgroundChecks from "./BackgroundChecks";
import CnicFront from "./CnicFront";
import CnicBack from "./CnicBack";
import FinancialDocs from "./FinancialDocs";
import BusinessDetails from "./BusinessDetails";

const { Content, Sider } = Layout;
const { Text } = Typography;

const useStyle = createStyles(({ token }: any) => ({
  body: {
    background: token.palette?.gray.light,
  },
}));

const ComplianceReview: React.FC = () => {
  const { token }: any = theme.useToken();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const { styles } = useStyle();

  const siderStyle: React.CSSProperties = {
    height: "100vh",
    position: "fixed",
    insetInlineStart: 0,
    top: 73,
    bottom: 0,
    background: token?.palette?.white?.main,
    paddingBlock: "40px",
    paddingLeft: "30px",
  };

  const anchorItems = [
    {
      key: "1",
      href: "#background-checks",
      title: "Background Checks",
    },
    {
      key: "2",
      href: "#cnic-front",
      title: "CNIC Front",
    },
    {
      key: "3",
      href: "#cnic-back",
      title: "CNIC Back",
    },
    {
      key: "4",
      href: "#financial-documents",
      title: "Financial Documents",
    },
  ];

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={showDrawer} type="primary">
          Review Compliance
        </Button>
      </div>

      {/* Drawer */}
      <Drawer
        width={window.innerWidth}
        title="Compliance Review"
        onClose={onClose}
        open={open}
        extra={
          <Flex gap={12}>
            <Button type="text" onClick={onClose}>
              Overall Decision
            </Button>
            <Button type="primary" danger onClick={onClose}>
              Reject
            </Button>
            <Button type="default" onClick={onClose}>
              Request Resubmission
            </Button>
            <Button type="primary" onClick={onClose}>
              Approve
            </Button>
          </Flex>
        }
        classNames={styles}
      >
        <Layout hasSider>
          <Sider width={240} style={siderStyle}>
            <Text
              style={{ display: "block", marginBottom: "15px" }}
              type="secondary"
            >
              Checklist
            </Text>
            <Anchor items={anchorItems} />
          </Sider>
          <Layout style={{ marginInlineStart: 240 }}>
            <Content>
              <Flex vertical gap={20}>
                <BackgroundChecks />
                <BusinessDetails />
                <CnicFront />
                <CnicBack />
                <FinancialDocs />
              </Flex>
            </Content>
          </Layout>
        </Layout>
      </Drawer>
    </>
  );
};

export default ComplianceReview;
