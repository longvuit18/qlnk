import React from "react";
import { connectContainer } from "../../libs/containers";
import { Row, Col, Card } from "antd";

import { HomeOutlined, TeamOutlined, UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";


class HomeRaw extends React.Component {

    render() {
        const titleCard1 =
            (<Row>
                <Col span={4}>
                    <TeamOutlined style={{ fontSize: "3rem" }} />
                </Col>
                <Col span={20} style={{ justifyContent: "center" }}>
                    <span style={{ fontSize: 25 }}>Nhân khẩu có trên địa bàn</span>
                </Col>

            </Row>);
        const titleCard2 =
            (<Row>
                <Col span={4}>
                    <HomeOutlined style={{ fontSize: "3rem" }} />
                </Col>
                <Col span={20} style={{ justifyContent: "center" }}>
                    <span style={{ fontSize: 25 }}> Hộ có trên địa bàn</span>
                </Col>

            </Row>);
        const titleCard3 =
            (<Row>
                <Col span={4}>
                    <UserAddOutlined style={{ fontSize: "3rem" }} />
                </Col>
                <Col span={20} style={{ justifyContent: "center" }}>
                    <span style={{ fontSize: 25 }}>Nhân khẩu tạm trú</span>
                </Col>

            </Row>);
        const titleCard4 =
            (<Row>
                <Col span={4}>
                    <UserDeleteOutlined style={{ fontSize: "3rem" }} />
                </Col>
                <Col span={20} style={{ justifyContent: "center" }}>
                    <span style={{ fontSize: 25 }}>Nhân khẩu tạm vắng</span>
                </Col>

            </Row>);
        return (
            <>
                <Row gutter={[16, 24]}>
                    <Col span={12}>
                        <Card title={titleCard1} style={{ width: "100%" }}>
                            <span style={{ fontSize: "50px" }}>1000</span>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title={titleCard2} style={{ width: "100%" }}>
                            <span style={{ fontSize: "50px" }}>1000</span>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col span={12}>
                        <Card title={titleCard3} style={{ width: "100%" }}>
                            <span style={{ fontSize: "50px" }}>1000</span>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title={titleCard4} style={{ width: "100%" }}>
                            <span style={{ fontSize: "50px" }}>1000</span>
                        </Card>
                    </Col>
                </Row>
            </>

        );
    }
}


export const Home = connectContainer(HomeRaw);
