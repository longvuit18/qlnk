import React from "react";
import { connectContainer, IPageProps } from "../../libs/containers";
import { Button, Space, Spin, Table } from "antd";
import { HoKhauModel, IHoKhau } from "../../models/IHoKhau";
import { FormThemMoiHoKHau } from "./FormThemMoiHoKHau";
import { FormChuyenDi } from "./FormChuyenDi";

interface ITableHoKhau {
    key: string;
    title: string;
    dataIndex?: keyof IHoKhau;
    render?: (a: IHoKhau) => JSX.Element;

}

type TableData = Partial<IHoKhau> & { key: string; };
interface IState {
    // data
    dataHoKhau: Array<TableData>;
    hoKhauChuyenDi: IHoKhau;

    //init
    hasInitialized: boolean;

    // open modal
    visibleModalThemMoi: boolean;
    visibleModalTachHoKhau: boolean;
    visibleModalChuyenDi: boolean;

}
class HoKhauRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);

        this.state = {
            dataHoKhau: [],
            hoKhauChuyenDi: new HoKhauModel(),

            hasInitialized: false,

            visibleModalThemMoi: false,
            visibleModalTachHoKhau: false,
            visibleModalChuyenDi: false,

        };
    }

    componentDidMount() {
        const fakeData: Array<TableData> = ["A", "B", "C", "D"].map(item => {
            return {
                ...new HoKhauModel(),
                maHoKhau: item,
                "chuHo.hoTen": "Nguyễn Văn " + item,
                diaChi: "Hai Bà Trưng - Hà Nội",
                key: item
            }
        });

        setTimeout(() => {
            this.setState({ hasInitialized: true, dataHoKhau: fakeData })
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

        const columns: Array<ITableHoKhau> = [
            {
                key: "maHoKhau",
                title: "Mã hộ khẩu",
                dataIndex: "maHoKhau"
            },

            {
                key: "chuHo.hoTen",
                title: "Họ tên chủ hộ",
                dataIndex: "chuHo.hoTen"
            },
            {
                key: "diaChi",
                title: "Địa chỉ",
                dataIndex: "diaChi"
            },
            {
                title: "Action",
                key: "action",
                render: (value: IHoKhau) => {
                    return (
                        <Space size="middle">
                            <a onClick={() => this.setState({ visibleModalThemMoi: true })}>Tách hộ khẩu</a>
                            <a onClick={() => this.setState({ visibleModalChuyenDi: true, hoKhauChuyenDi: value })}>Chuyển đi</a>
                        </Space>
                    )
                },
            },
        ];


        return (
            <>
                {this.state.visibleModalThemMoi &&
                    <FormThemMoiHoKHau
                        cancel={() => this.setState({ visibleModalThemMoi: false })}
                        dataNhanKhau={this.props.store.nhanKhau.data}
                    />}

                {this.state.visibleModalChuyenDi &&
                    <FormChuyenDi
                        cancel={() => this.setState({ visibleModalChuyenDi: false })}
                        dataHoKhau={this.state.hoKhauChuyenDi}
                    />}
                <Space style={{ marginBottom: 16 }}>
                    <Button onClick={() => this.setState({ visibleModalThemMoi: true })}>Thêm hộ khẩu</Button>
                </Space>
                <Table dataSource={dataSource} columns={columns} />

            </>
        );

    }

}

export const HoKhau = connectContainer(HoKhauRaw);