import React from "react";
import { ConfigProvider } from "antd";

import { antdThemeConfig } from "./theme/antdThemeConfig";
import ComplianceReview from "./components/ComplianceReview";
// import Page from "./Page";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={antdThemeConfig}>
      {/* <Page /> */}
      <ComplianceReview />
    </ConfigProvider>
  );
};

export default App;
