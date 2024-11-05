import React from "react";
import { Checkbox, Radio, Card, Space } from "antd";

const SectionCheckboxRadio: React.FC = () => (
  <Card
    title="Checkbox and Radio"
    bordered={false}
    style={{ borderRadius: "8px" }}
  >
    <Space direction="vertical" size="middle">
      <Space direction="vertical">
        <Checkbox>Checkbox Label</Checkbox>
        <Checkbox checked>Checked Checkbox</Checkbox>
        <Checkbox disabled>Disabled Checkbox</Checkbox>
      </Space>
      <Space direction="vertical">
        <Radio.Group>
          <Radio value={1}>Radio Label 1</Radio>
          <Radio value={2} defaultChecked>
            Radio Label 2
          </Radio>
          <Radio value={3} disabled>
            Disabled Radio
          </Radio>
        </Radio.Group>
      </Space>
    </Space>
  </Card>
);

export default SectionCheckboxRadio;
