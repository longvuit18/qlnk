import { Space, Input, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import { INhanKhau } from "../../models/INhanKhau";
import { TableNhanKhau } from "./TableNhanKhau";

interface IProps {
    onCancel: () => void;
    dataNhanKhau: Array<INhanKhau>;
    onOk: (thanhVienHo: Array<ITableThanhVienHo>) => void;
}

interface ITableThanhVienHo {
    idNhanKhau: string;
    hoTen: string;
    ngaySinh: string;
    quanHeVoiChuHo: string;
    key: string;
}

export const ModalThanhVIenHo: React.FunctionComponent<IProps> = (props: IProps) => {

    const [thanhVienHo, setThanhVienHo] = React.useState<Array<ITableThanhVienHo>>([]);
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const onChangeSelectCheckbox = (index: any, value: Array<INhanKhau>) => {
        const thanhVienHos: Array<ITableThanhVienHo> = value.map(item => {
            return {
                hoTen: item.hoTen,
                ngaySinh: new Date(item.namSinh).toLocaleDateString(),
                key: item.id,
                idNhanKhau: item.id,
                quanHeVoiChuHo: ""
            };
        })
        setThanhVienHo(thanhVienHos);
    }

    //layout
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    return (
        <>
            <Modal
                width={"50rem"}
                title="Chọn thành viên hộ"
                visible={true}
                onOk={() => setOpenModal(true)}
                onCancel={() => props.onCancel()}>
                <Space>
                    <Input.Search placeholder={"Nhập tên ..."} />
                </Space>
                <TableNhanKhau
                    dataSource={props.dataNhanKhau.map(item => ({ ...item, key: item.id }))}
                    rowSelection={{ type: "checkbox", onChange: onChangeSelectCheckbox }} />
            </Modal>

            {
                openModal && <Modal
                    title="Quan hệ với chủ hộ"
                    visible={true}
                    onOk={() => props.onOk(thanhVienHo)}
                    onCancel={() => setOpenModal(false)}>
                    {thanhVienHo.map((item, index) => {
                        return (
                            <>
                                <Form.Item label="Họ và tên" {...layout} key={index}>
                                    <Input disabled value={item.hoTen} />
                                </Form.Item>
                                <Form.Item label="Ngày sinh" {...layout} key={index}>
                                    <Input disabled value={item.ngaySinh} />
                                </Form.Item>
                                <Form.Item label="Quan hệ với chủ hộ" {...layout} key={index}>
                                    <Input 
                                        onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                                            const newThanhVienHo = thanhVienHo.map((item, i) => {
                                                if(i === index) {
                                                    return {
                                                        ...item,
                                                        quanHeVoiChuHo: event.currentTarget.value
                                                        
                                                    }
                                                }
                                                return item;
                                            })

                                            setThanhVienHo(newThanhVienHo);
                                        }} />
                                </Form.Item>
                            </>
                        );
                    })}
                </Modal>
            }


        </>
    );
}