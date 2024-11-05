import React, { useState } from "react";
import { Button, Card, Space } from "antd";

import { SearchOutlined } from "@ant-design/icons";

const SectionButtons: React.FC = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return (
    <Card title="Buttons" bordered={false} style={{ borderRadius: "8px" }}>
      <Space direction="vertical" size="middle">
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button type="default">Secondary Button</Button>
          <Button type="text">Tertiary Button</Button>
          <Button type="link">Link Button</Button>
          <Button danger type="primary">
            Danger Button
          </Button>
          <Button type="dashed">Dashed</Button>
          <Button icon={<SearchOutlined />} type="default">
            Search
          </Button>
          <Button icon={<SearchOutlined />} type="primary" shape="circle" />
          <Button
            type="primary"
            loading={loading}
            onClick={() => setLoading(!loading)}
          >
            Start Loading!
          </Button>
        </Space>
        <Space wrap>
          <Button type="primary" disabled>
            Primary Disabled
          </Button>
          <Button type="default" disabled>
            Secondary Disabled
          </Button>
          <Button type="text" disabled>
            Tertiary Disabled
          </Button>
          <Button type="link" disabled>
            Link Disabled
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

export default SectionButtons;
