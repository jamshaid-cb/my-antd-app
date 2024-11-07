import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Segmented,
  TimePicker,
  ColorPicker,
  Checkbox,
  Col,
  Radio,
  Rate,
  Row,
  Slider,
  Switch,
  Upload,
} from "antd";
import type { FormProps } from "antd";
import {
  InboxOutlined,
  SmileOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { Option } = Select;

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const CustomForm: React.FC = () => {
  const [componentVariant, setComponentVariant] =
    useState<FormProps["variant"]>("outlined");

  const onFormVariantChange = ({
    variant,
  }: {
    variant: FormProps["variant"];
  }) => {
    setComponentVariant(variant);
  };
  return (
    <Form
      {...formItemLayout}
      layout="vertical"
      onValuesChange={onFormVariantChange}
      variant={componentVariant}
      style={{ maxWidth: 600 }}
      initialValues={{
        variant: componentVariant,
        "input-number": 3,
        "checkbox-group": ["A", "B"],
        rate: 3.5,
        "color-picker": null,
      }}
    >
      <Form.Item label="Form variant" name="variant">
        <Segmented options={["outlined", "filled", "borderless"]} />
      </Form.Item>
      <Form.Item
        label="Input"
        name="Input"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="InputNumber"
        name="InputNumber"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="TextArea"
        name="TextArea"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Mentions"
        name="Mentions"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Mentions />
      </Form.Item>
      <Form.Item
        label="Select"
        name="Select"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select />
      </Form.Item>
      <Form.Item
        label="Cascader"
        name="Cascader"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Cascader />
      </Form.Item>
      <Form.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <TreeSelect />
      </Form.Item>
      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        label="Fail"
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error" />
      </Form.Item>
      <Form.Item label="Warning" validateStatus="warning">
        <Input placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
      </Form.Item>
      <Form.Item
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Input
          placeholder="I'm the content is being validated"
          id="validating"
        />
      </Form.Item>
      <Form.Item label="Success" hasFeedback validateStatus="success">
        <Input placeholder="I'm the content" id="success" />
      </Form.Item>
      <Form.Item label="Warning" hasFeedback validateStatus="warning">
        <Input placeholder="Warning" id="warning2" />
      </Form.Item>
      <Form.Item
        label="Fail"
        hasFeedback
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error2" />
      </Form.Item>
      <Form.Item label="Success" hasFeedback validateStatus="success">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Warning" hasFeedback validateStatus="warning">
        <TimePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Error" hasFeedback validateStatus="error">
        <DatePicker.RangePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Error" hasFeedback validateStatus="error">
        <Select placeholder="I'm Select" allowClear>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Validating"
        hasFeedback
        validateStatus="error"
        help="Something breaks the rule."
      >
        <Cascader
          placeholder="I'm Cascader"
          options={[{ value: "xx", label: "xx" }]}
          allowClear
        />
      </Form.Item>
      <Form.Item
        label="Warning"
        hasFeedback
        validateStatus="warning"
        help="Need to be checked"
      >
        <TreeSelect
          placeholder="I'm TreeSelect"
          treeData={[{ value: "xx", label: "xx" }]}
          allowClear
        />
      </Form.Item>
      <Form.Item label="inline" style={{ marginBottom: 0 }}>
        <Form.Item
          validateStatus="error"
          help="Please select right date"
          style={{ display: "inline-block", width: "calc(50% - 12px)" }}
        >
          <DatePicker />
        </Form.Item>
        <span
          style={{
            display: "inline-block",
            width: "24px",
            lineHeight: "32px",
            textAlign: "center",
          }}
        >
          -
        </span>
        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 12px)" }}
        >
          <DatePicker />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Success" hasFeedback validateStatus="success">
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Success" hasFeedback validateStatus="success">
        <Input allowClear placeholder="with allowClear" />
      </Form.Item>
      <Form.Item label="Warning" hasFeedback validateStatus="warning">
        <Input.Password placeholder="with input password" />
      </Form.Item>
      <Form.Item label="Error" hasFeedback validateStatus="error">
        <Input.Password
          allowClear
          placeholder="with input password and allowClear"
        />
      </Form.Item>
      <Form.Item label="Success" hasFeedback validateStatus="success">
        <Input.OTP />
      </Form.Item>
      <Form.Item label="Warning" hasFeedback validateStatus="warning">
        <Input.OTP />
      </Form.Item>
      <Form.Item label="Error" hasFeedback validateStatus="error">
        <Input.OTP />
      </Form.Item>
      <Form.Item label="Fail" validateStatus="error" hasFeedback>
        <Mentions />
      </Form.Item>
      <Form.Item
        label="Fail"
        validateStatus="error"
        hasFeedback
        help="Should have something"
      >
        <Input.TextArea allowClear showCount />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>{" "}
      <Form.Item label="Plain Text">
        <span className="ant-form-text">China</span>
      </Form.Item>
      <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: "Please select your country!" }]}
      >
        <Select placeholder="Please select a country">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="select-multiple"
        label="Select[multiple]"
        rules={[
          {
            required: true,
            message: "Please select your favourite colors!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>
      <Form.Item label="InputNumber">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text" style={{ marginInlineStart: 8 }}>
          machines
        </span>
      </Form.Item>
      <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item name="slider" label="Slider">
        <Slider
          marks={{
            0: "A",
            20: "B",
            40: "C",
            60: "D",
            80: "E",
            100: "F",
          }}
        />
      </Form.Item>
      <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[{ required: true, message: "Please pick an item!" }]}
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="checkbox-group" label="Checkbox.Group">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: "32px" }}>
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: "32px" }} disabled>
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C" style={{ lineHeight: "32px" }}>
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D" style={{ lineHeight: "32px" }}>
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E" style={{ lineHeight: "32px" }}>
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F" style={{ lineHeight: "32px" }}>
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>
      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="Dragger">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item
        name="color-picker"
        label="ColorPicker"
        rules={[{ required: true, message: "color is required!" }]}
      >
        <ColorPicker />
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
