import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout, Typography, Menu, Popover, Button } from "antd";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import Session from "../../Services/session";
import "./styles.css";

export default function PrivateRoute({ children, ...rest }) {
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = useState([]);
  const [collapsed, colaps] = useState(false);
  const [popVisible, changePopVisible] = useState(false);

  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const { Item, SubMenu } = Menu;

  function onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(openKeys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }

  function logout() {
    changePopVisible(false);
    localStorage.clear();
  }

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => colaps(!collapsed)}
        className="side"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          className="menu"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Navigation One</span>
              </span>
            }
          >
            <Item key="1">Option 1</Item>
            <Item key="2">Option 2</Item>
            <Item key="3">Option 3</Item>
            <Item key="4">Option 4</Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Item key="5">Option 5</Item>
            <Item key="6">Option 6</Item>
            <SubMenu key="sub3" title="Submenu">
              <Item key="7">Option 7</Item>
              <Item key="8">Option 8</Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <SettingOutlined />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Item key="9">Option 9</Item>
            <Item key="10">Option 10</Item>
            <Item key="11">Option 11</Item>
            <Item key="12">Option 12</Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Title level={3} style={{ color: "#ff6f00" }}>
            ANT Design
          </Title>
          <Popover
            content={
              <ul className="user-actions-list">
                <li onClick={() => changePopVisible(!popVisible)}>
                  Meu Perfil
                </li>
                <li onClick={() => logout()}>Sair</li>
              </ul>
            }
            title="Ações de usuário"
            trigger="click"
            visible={popVisible}
            onVisibleChange={() => changePopVisible(!popVisible)}
          >
            <Button shape="circle" className="avatar-button">
              L
            </Button>
          </Popover>
        </Header>
        <Content>
          <div className="site-layout-background">
            <Route
              {...rest}
              render={({ location }) =>
                Session.isAuthenticated() ? (
                  children
                ) : (
                  <Redirect to={{ pathname: "/", state: { from: location } }} />
                )
              }
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
