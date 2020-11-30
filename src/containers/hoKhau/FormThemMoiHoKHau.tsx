import { Input, Form, Modal, Button, Space, Table } from "antd";
import React from "react";
import { HoKhauModel, IHoKhau } from "../../models/IHoKhau";
import { TableNhanKhau } from "./TableNhanKhau";
import { INhanKhau } from "../../models/INhanKhau";
import { ModalThanhVIenHo } from "./ModalThanhVienHo";

interface IProps {
    cancel: () => void;
    dataNhanKhau: Array<INhanKhau>;
}

interface ITableThanhVienHo {
    idHoKhau: string;
    idNhanKhau: string;
    hoTen: string;
    ngaySinh: string;
    quanHeVoiChuHo: string;
    key: string;
}

export const FormThemMoiHoKHau: React.FunctionComponent<IProps> = (props: IProps) => {

    const [data, setData] = React.useState<IHoKhau>(new HoKhauModel());

    const [openModalChuHo, setOpenModalChuHo] = React.useState<boolean>(false);
    const [openModalThanhVienHo, setOpenModalThanhVienHo] = React.useState<boolean>(false);

    const [thanhVienHo, setThanhVienHo] = React.useState<Array<ITableThanhVienHo>>([]);

    //layout
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    // value change
    const onChangeValue = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = event.currentTarget.name;

        setData({ ...data, [key]: event.currentTarget.value });
    };


    const onChangeSelectRadio = (index: any, value: Array<INhanKhau>) => {
        setData({
            ...data,
            "chuHo.hoTen": value[0].hoTen,
            "chuHo.diaChiHienNay": value[0].diaChiHienNay,
            "chuHo.gioiTinh": value[0].gioiTinh,
            "chuHo.ngaySinh": value[0].namSinh,
            "chuHo.soCMT": value[0].soHoChieu
        });
    }


    return (
        <>
            {openModalChuHo &&
                <Modal
                    width={"50rem"}
                    title="Chọn chủ hộ"
                    visible={true}
                    onOk={() => setOpenModalChuHo(false)}
                    onCancel={() => setOpenModalChuHo(false)}>
                    <Space>
                        <Input.Search placeholder={"Nhập tên ..."} />
                    </Space>
                    <TableNhanKhau
                        dataSource={props.dataNhanKhau.map(item => ({ ...item, key: item.id }))}
                        rowSelection={{ type: "radio", onChange: onChangeSelectRadio }} />
                </Modal>
            }

            {openModalThanhVienHo &&
                <ModalThanhVIenHo
                    onCancel={() => setOpenModalThanhVienHo(false)} 
                    dataNhanKhau={props.dataNhanKhau}
                    onOk={(thanhVienHo: Array<ITableThanhVienHo>) => {setThanhVienHo(thanhVienHo); setOpenModalThanhVienHo(false)}}/>
            }
            <Modal
                width={"55rem"}
                title="Thêm mới nhân khẩu"
                visible={true}
                onOk={() => null}
                onCancel={() => props.cancel()}
            >
                <Form.Item label="Mã hộ khẩu:" {...layout} required>
                    <Input name="maHoKhau" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Mã khu vực" {...layout}>
                    <Input name="maKhuVuc" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Địa chỉ" {...layout}>
                    <Input name="diaChi" onBlur={onChangeValue} />
                </Form.Item>

                <Form.Item label="Chọn Chủ hộ" {...layout}>
                    <Button onClick={() => setOpenModalChuHo(true)}>Chọn...</Button>
                </Form.Item>
                <Form.Item label="Chủ hộ" {...layout}>
                    <Input disabled value={data["chuHo.hoTen"]} />
                </Form.Item>
                <Form.Item label="Ngày sinh chủ hộ" {...layout}>
                    <Input disabled value={new Date(data["chuHo.ngaySinh"]).toLocaleDateString()} />
                </Form.Item>
                <Form.Item label="Số CMT chủ hộ" {...layout}>
                    <Input disabled value={data["chuHo.soCMT"]} />
                </Form.Item>

                <Form.Item label="Chọn Thành viên hộ" {...layout}>
                    <Button onClick={() => setOpenModalThanhVienHo(true)}>Chọn...</Button>
                </Form.Item>
                <Table
                    dataSource={thanhVienHo}
                    columns={[
                        {
                            title: "Họ tên",
                            dataIndex: "hoTen",
                            key: "hoTen",
                        },
                        {
                            title: "Ngày sinh",
                            dataIndex: "ngaySinh",
                            key: "ngaySinh",
                        },
                        {
                            title: "Quan hệ với chủ hộ",
                            dataIndex: "quanHeVoiChuHo",
                            key: "quanHeVoiChuHo",
                        },
                    ]}
                />
            </Modal>
        </>
    );
}