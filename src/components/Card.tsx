import React from "react";
import { Card } from "antd";

import { SettingOutlined } from "@ant-design/icons";

const SectionCard: React.FC = () => (
  <Card title="Card Component" bordered={false} style={{ borderRadius: "8px" }}>
    <Card
      type="inner"
      title="Inner Card Title"
      extra={<SettingOutlined />}
      style={{ borderRadius: "8px", backgroundColor: "#F0F5FF" }} // Light secondary accent
    >
      This is the content inside an inner card component.
    </Card>
  </Card>
);

export default SectionCard;
