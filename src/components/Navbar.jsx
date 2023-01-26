import React from "react";
import { Layout, Menu, theme } from "antd";

const { Header } = Layout;

const HeaderBar = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          height: 100,
        }}
      >
        <div
          style={{
            float: "left",
            width: 120,
            height: 100,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            justifyContent: "right",
            //navbar'ı align et
          }}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
    </Layout>
  );
};

export default HeaderBar;
