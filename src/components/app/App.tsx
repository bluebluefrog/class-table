import { Layout, Menu } from "antd";
import React from "react";
import "antd/dist/antd.css";
import ContentIn from "../content/Content";

const { Header, Content, Sider } = Layout;

const App = () => {
  const items1 = ["3001", "3002", "3003"].map((key) => ({
    key,
    label: `${key}`,
  }));

  const items2 = new Array(12).fill("week").map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `week${key}`,
      icon: "",
      label: `week${key}`,
      children: ["大纲", "教学资料", "视频"].map((i, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `${i}`,
        };
      }),
    };
  });

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <ContentIn />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
