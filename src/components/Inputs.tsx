import React from "react";
import { Card, Input, Space } from "antd";

import { SettingOutlined } from "@ant-design/icons";

const SectionInput: React.FC = () => (
  <Card
    title="Input Component"
    bordered={false}
    style={{ borderRadius: "8px" }}
  >
    <Space direction="vertical" size="middle">
      <Input placeholder="Default Input" style={{ borderRadius: "6px" }} />
      <Input
        placeholder="Disabled Input"
        disabled
        style={{ borderRadius: "6px" }}
      />
      <Input
        prefix={<SettingOutlined />}
        placeholder="Input with Prefix"
        style={{ borderRadius: "6px" }}
      />
    </Space>
  </Card>
);

export default SectionInput;
