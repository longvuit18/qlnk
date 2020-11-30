import React from "react";
import { connectContainer, IPageProps } from "../../libs/containers";
import { Button, Space, Spin, Table, Row, Col, Card } from "antd";
import { IThuChi } from "../../models/IThuChi";
interface ITableThuChi {
    key: string;
    title: string;
    dataIndex?: keyof IThuChi;
    render?: (a: IThuChi) => JSX.Element;

}

type TableData = Partial<IThuChi> & { key: string; };
interface IState {
    // data
    dataHoKhau: Array<TableData>;
   // hoKhauChuyenDi: IHoKhau;

    //init
    hasInitialized: boolean;

    // open modal
    visibleModalThemMoi: boolean;
    visibleModalTachHoKhau: boolean;
    visibleModalChuyenDi: boolean;

}
class ThuChiRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);

        this.state = {
            dataHoKhau: [],
            // hoKhauChuyenDi: new HoKhauModel(),

            hasInitialized: false,

            visibleModalThemMoi: false,
            visibleModalTachHoKhau: false,
            visibleModalChuyenDi: false,

        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ hasInitialized: true})
        }, 0);
    }

    renderLoading() {
        return (
            <div style={{ width: "100%", textAlign: "center", marginTop: "10rem" }}>
                <Spin size="large" tip="loading..." />
            </div>
        );
    }

    render() {

        if (!this.state.hasInitialized) {
            return this.renderLoading();
        }
        const dataSource: Array<TableData> = this.state.dataHoKhau;

        const columns: Array<ITableThuChi> = [
            {
                key: "maHoKhau",
                title: "Mã hộ khẩu",
                dataIndex: "hoKhau.maHoKhau"
            },

            {
                key: "hoTen",
                title: "Họ tên chủ hộ",
                dataIndex: "hoKhau.hoTen"
            },
            {
                key: "tienDaDong",
                title: "Tiền đã đóng",
                dataIndex: "tienDaDong"
            },
            {
                key: "tienNo",
                title: "TIền nợ",
                dataIndex: "tienNo"
            },
            {
                key: "tienQuyenGop",
                title: "Tiền quyên góp",
                dataIndex: "tienQuyenGop"
            },
            {
                key: "ghiChu",
                title: "Ghi Chú",
                dataIndex: "ghiChu"
            },
            {
                title: "Action",
                key: "action",
                render: (value: IThuChi) => {
                    return (
                        <Space size="middle">
                            <a onClick={() => this.setState({ visibleModalThemMoi: true })}>Nộp nợ</a>
                        </Space>
                    )
                },
            },
        ];


        return (
            <>
             <Row gutter={[16, 24]}>
                    <Col span={12}>
                        <Card title={"123"} style={{ width: "100%" }}>
                            <span style={{ fontSize: "50px" }}>1000</span>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title={"123"} style={{ width: "100%" }}>
                            <span style={{ fontSize: "50px" }}>1000</span>
                        </Card>
                    </Col>
                </Row>
                <Space style={{ marginBottom: 16 }}>
                    <Button onClick={() => this.setState({ visibleModalThemMoi: true })}>Thêm hộ khẩu</Button>
                </Space>
                <Table dataSource={dataSource} columns={columns} />

            </>
        );

    }

}

export const ThuChi = connectContainer(ThuChiRaw);