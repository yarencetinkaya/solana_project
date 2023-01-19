import React, { useState } from "react";
import YouTube from "react-youtube";
import { Layout, Menu, theme, Button, Space } from "antd";
import { DollarOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [videoId, setVideoId] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [videoLink, setVideoLink] = useState("a1mSjk9Vuwg");
  const [showButton, setShowButton] = useState(true);
  const [claimButton, setClaimButton] = useState(false);

  const handleVideoEnd = () => {
    setButtonDisabled(false);
  };

  const changeVideo = () => {
    switch (videoId) {
      case 1:
        setVideoLink("JWbPy4nL35s");
        break;
      case 2:
        setVideoLink("qg47WbRcg8A");
        break;
      case 3:
        setVideoLink("tdBWT0JwOIk");
        setShowButton(false);
        setClaimButton(true);
        break;
      default:
        console.log("Error occured while setting video");
        break;
    }
  };

  const handleButtonClick = () => {
    setButtonDisabled(true);
    setVideoId(videoId === 3 ? 1 : videoId + 1);
    changeVideo();
  };

  const claimSol = () => {
    console.log("Button clicked");
  };

  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `Video ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", alignSelf: "center" }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "#0045",
            margin: 16,
          }}
        >
          <YouTube videoId={videoLink} onEnd={handleVideoEnd} />
          <Space>
            <Button
              type="primary"
              disabled={buttonDisabled}
              onClick={handleButtonClick}
              style={{
                allign: "center",
                alignItems: "center",
                margin: "16px 0",
                justifyContent: "center",
                display: showButton ? "block" : "none",
              }}
            >
              Next Video
            </Button>

            <Button
              type="primary"
              icon={<DollarOutlined />}
              style={{ display: claimButton ? "block" : "none" }}
              onClick={claimSol}
            >
              Claim SOL Token
            </Button>
          </Space>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Yaren Çetinkaya & Göksu Alçınkaya
      </Footer>
    </Layout>
  );
};

export default App;
