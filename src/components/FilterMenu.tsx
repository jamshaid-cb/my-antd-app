import { Checkbox, InputNumber, Button, Menu, Dropdown, Card } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FilterMenu = () => {
  return (
    <>
      {" "}
      <div style={{ display: "flex", gap: "20px" }}>
        <Card>
          {/* Sort Options */}
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">Sort Newest to Oldest</Menu.Item>
                <Menu.Item key="2">Sort Oldest to Newest</Menu.Item>
              </Menu>
            }
          >
            <Button>
              Sort Options <DownOutlined />
            </Button>
          </Dropdown>
        </Card>
        <div style={{ height: "30px" }} />
        {/* Filter by Options */}
        <Card>
          {" "}
          <div
            style={{
              border: "1px solid #e8e8e8",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Filter by</h3>
            <Checkbox>Filter Option 1</Checkbox>
            <br />
            <Checkbox>Filter Option 2</Checkbox>
            <br />
            <Checkbox>Filter Option 3</Checkbox>
            <div style={{ marginTop: "10px" }}>
              <Button style={{ marginRight: "8px" }}>Reset</Button>
              <Button type="primary">Apply</Button>
            </div>
          </div>
          <div style={{ height: "30px" }} />
        </Card>
      </div>
      {/* Filter by Range */}
      <div style={{ height: "30px" }} />
      <Card>
        <div
          style={{
            border: "1px solid #e8e8e8",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>Filter by Range</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <label>Min</label>
              <InputNumber
                min={0}
                placeholder="Value"
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <label>Max</label>
              <InputNumber
                min={0}
                placeholder="Value"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Button style={{ marginRight: "8px" }}>Reset</Button>
            <Button type="primary">Apply</Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FilterMenu;
