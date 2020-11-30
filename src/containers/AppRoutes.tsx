import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import { connectContainer, IPageProps } from "../libs/containers";
import { PageNotFound } from "./404";
import { ClientRoutes } from "./ClientRoutes";
import { Home } from "../containers/home/home";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Layout, Menu, Dropdown, AutoComplete, Input } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { Login } from "./login/login";
import { HoKhau } from "./hoKhau/hoKhau";
import { NhanKhau } from "./nhanKhau/nhanKhau";
import { ThuChi } from "./thuChi/thuChi";


interface IState {
    login: boolean;
    selectKey: string;

}
// eslint-disable-next-line @typescript-eslint/ban-types
class AppRouteRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);
        const key = props.location.pathname.substr(1);
        this.state = {
            login: false,
            selectKey: key === "" ? ClientRoutes.home.substr(1) : key
        }
    }

    render() {
        const { Header, Content, Sider, Footer } = Layout;
        const menu = (
            <Menu>
                <MenuItem>Manage account</MenuItem>
                <MenuItem>Log out</MenuItem>
            </Menu>
        );

        if (this.state.login === true) {
            return (
                <>
                    <Switch>
                        <Redirect exact from="/" to={ClientRoutes.login} />
                        <Route path={ClientRoutes.login} component={Login} />
                    </Switch>
                </>
            );

        }
        return (
            <>
                <Layout>
                    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                        <Row>
                            <Col span={3}>
                                <div style={{ height: "2rem", background: "rgba(255, 255, 255, 0.3)", marginTop: "16px", marginRight: "75px" }} />
                            </Col>
                            <Col span={20}>
                                <Menu theme="dark" mode="horizontal" style={{ display: "block" }}>
                                    <Menu.Item key="1">Trang Chủ</Menu.Item>
                                    <Menu.Item key="3">Hỗ Trợ</Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={1} >
                                <Dropdown.Button overlay={menu} placement="topLeft" icon={<UserOutlined />} style={{ marginTop: "1rem" }} />

                            </Col>
                        </Row>
                    </Header>

                    <Layout style={{ minHeight: "100vh", marginTop: "4rem", position: "fixed", width: "100%" }}>
                        <Sider theme="dark" style={{}}>
                            <Menu
                                mode="inline"
                                // style={{ height: "100%", borderRight: 0 }}
                                theme="dark"
                                defaultSelectedKeys={[this.state.selectKey]}

                            >
                                <Menu.Item key={ClientRoutes.home.substr(1)}><Link to={ClientRoutes.home}> Dashboard</Link></Menu.Item>
                                <Menu.Item key={ClientRoutes.nhanKhau.substr(1)}><Link to={ClientRoutes.nhanKhau}> Nhân khẩu</Link></Menu.Item>

                                <Menu.Item key={ClientRoutes.hoKhau.substr(1)}><Link to={ClientRoutes.hoKhau}> Hộ khẩu</Link></Menu.Item>
                                <Menu.Item key={ClientRoutes.thuChi.substr(1)}><Link to={ClientRoutes.thuChi}> Thu Chi</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content
                                style={{
                                    padding: 30,
                                    margin: 0,
                                    overflow: "initial"
                                }}
                            >
                                <Switch>
                                    <Redirect exact from="/" to={ClientRoutes.home} />
                                    <Route exact path={ClientRoutes.home} component={Home} />
                                    <Route exact path={ClientRoutes.hoKhau} component={HoKhau} />
                                    <Route exact path={ClientRoutes.nhanKhau} component={NhanKhau} />
                                    <Route exact path={ClientRoutes.thuChi} component={ThuChi} />
                                    <Route component={PageNotFound} />
                                </Switch>
                            </Content>
                            <Footer style={{textAlign: "center", marginBottom: "5rem"}}>Created by: Vu Long Vu 20183675</Footer>
                        </Layout>
                    </Layout>
                </Layout>

            </>
        );
    }
}

export const AppRoutes = connectContainer(AppRouteRaw);


