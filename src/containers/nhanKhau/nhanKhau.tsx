import React from "react";
import { connectContainer, IPageProps } from "../../libs/containers";
import { Button, Space, Spin } from "antd";
import { INhanKhau, NhanKhauModel } from "../../models/INhanKhau";
import { FormThemNhanKhau } from "./FormThemNhanKhau";
import { FormDangKyTamVang } from "./FormDangKyTamVang";
import { FormDangKyTamTru } from "./FormDangKyTamTru";
import { FormDangKyKhaiTu } from "./FormDangKyKhaiTu";
import { TableNhanKhau } from "./TableNhanKhau";
import { IActionNhanKhau } from "../../stores/data/nhanKhau";
import { MySearch } from "../../components/MySearch";



interface IState {
    //init
    hasInitialized: boolean;

    //action
    cancel: boolean;
    visibleModalThemMoi: boolean;
    visibleModalTamTru: boolean;
    visibleModalTamVang: boolean;
    visibleModalKhaiTu: boolean;

    // data
    dataNhanKhau: Array<INhanKhau>;
    currentNhanKhau: INhanKhau;

    //restore

    restoreDataNhanKhau: Array<INhanKhau>;

}
class NhanKhauRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);

        this.state = {
            hasInitialized: false,

            cancel: false,
            visibleModalKhaiTu: false,
            visibleModalTamTru: false,
            visibleModalTamVang: false,
            visibleModalThemMoi: false,

            dataNhanKhau: [],
            currentNhanKhau: new NhanKhauModel(),

            restoreDataNhanKhau: []
        };
    }

    componentDidMount() {

        const fakeData: Array<INhanKhau> = ["A", "B", "C", "D"].map<INhanKhau>(item => {
            return {
                ...new NhanKhauModel(),
                hoTen: "Nguyễn Thị " + item,
                gioiTinh: "nữ" || "nam",
                namSinh: new Date(),
                diaChiMoi: "Hai Bà Trưng - Hà Nôi",
                id: item,
                maNhanKhau: item
            }
        });
        setTimeout(() => {
            this.setState({ hasInitialized: true, dataNhanKhau: fakeData.map(item => ({ ...item, key: item.id })), restoreDataNhanKhau: fakeData })
            this.props.dispatch<IActionNhanKhau>({ type: "layToanBoNhanKhau", data: fakeData })
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
        const dataSource: Array<INhanKhau> = this.state.dataNhanKhau.map(item => ({ ...item, key: item.id, namSinh: new Date(item.namSinh).toLocaleDateString() as any}));
        return (
            <>
                {this.state.visibleModalThemMoi && <FormThemNhanKhau cancel={() => this.setState({ visibleModalThemMoi: false })} />}
                {this.state.visibleModalTamVang && <FormDangKyTamVang cancel={() => this.setState({ visibleModalTamVang: false })} nhanKhau={this.state.currentNhanKhau}/>}
                {this.state.visibleModalTamTru && <FormDangKyTamTru cancel={() => this.setState({ visibleModalTamTru: false })} />}
                {this.state.visibleModalKhaiTu && <FormDangKyKhaiTu cancel={() => this.setState({ visibleModalKhaiTu: false })} nhanKhau={this.state.currentNhanKhau}/>}
                <Space style={{ marginBottom: 16 }}>

                    <Button onClick={() => this.setState({ visibleModalThemMoi: true })}>Thêm mới</Button>
                    <Button onClick={() => this.setState({ visibleModalTamTru: true })}>Tạm trú</Button>

                    <MySearch<INhanKhau> keys={[{ key: "hoTen", label: "Họ tên" }, { key: "maNhanKhau", label: "Mã nhân khẩu" }]}
                        inputData={this.state.restoreDataNhanKhau}
                        outputData={(output) => this.setState({ dataNhanKhau: output })} />

                </Space>
                <TableNhanKhau
                    dataSource={dataSource.map(item => ({ ...item, key: item.id }))}
                    openDangKyTamVang={(value: INhanKhau) => this.setState({ visibleModalTamVang: true, currentNhanKhau: value })}
                    openKhaiTu={(value: INhanKhau) => this.setState({ visibleModalKhaiTu: true, currentNhanKhau: value })}
                />

            </>
        );

    }

}

export const NhanKhau = connectContainer(NhanKhauRaw);