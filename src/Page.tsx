import React from "react";
import { Typography, Space } from "antd";

import { antdThemeConfig } from "./theme/antdThemeConfig";
import CustomForm from "./components/Form";
import Typo from "./components/Typo";
import Stepper from "./components/Stepper";
import Uploader from "./components/Uploader";
import Tables from "./components/Tables";
import ModalShowcase from "./components/Modal";
import Alerts from "./components/Alerts";
import FilterMenu from "./components/FilterMenu";
import LoanReportPage from "./components/Screen";
import SectionButtons from "./components/Buttons";
import SectionCheckboxRadio from "./components/CheckboxRadio";
import SectionCard from "./components/Card";
import SectionInput from "./components/Inputs";
import ShowcaseTable from "./components/ShowcaseTable";

const { Title, Paragraph } = Typography;

const Page: React.FC = () => {
  return (
    <>
      <div
        style={{
          padding: "24px",
          backgroundColor: "#FAF5FF",
          minHeight: "100vh",
          maxWidth: "900px",
          margin: "auto",
          marginBottom: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Typography>
          <Title
            level={2}
            style={{ color: antdThemeConfig.token.colorPrimary }}
          >
            Customized Ant Design Components
          </Title>
          <Paragraph>
            Using the custom theme for various components to reflect the updated
            design system.
          </Paragraph>
        </Typography>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <SectionButtons />
          <Typo />

          <SectionCheckboxRadio />
          <SectionCard />
          <ModalShowcase />
          <Stepper />
          <CustomForm />
          <Uploader />
          <SectionInput />
          <FilterMenu />
          <Alerts />
          <Tables />
        </Space>
      </div>

      <div style={{ width: "100%", background: "white" }}>
        <div style={{ width: "80%", marginInline: "auto" }}>
          <ShowcaseTable bordered={true} />
        </div>
      </div>

      <div style={{ width: "100%", background: "white", marginTop: "80px" }}>
        <div style={{ width: "80%", marginInline: "auto" }}>
          <ShowcaseTable bordered={false} />
        </div>
      </div>

      <Title level={2} style={{ color: antdThemeConfig.token.colorPrimary }}>
        A DEMO Screen
      </Title>
      <LoanReportPage />
    </>
  );
};

export default Page;
