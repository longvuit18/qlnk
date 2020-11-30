import { Input, Form, Modal } from "antd";
import React from "react";
import { IHoKhau } from "../../models/IHoKhau";

interface IProps {
    cancel: () => void;
    dataHoKhau: IHoKhau;
}

export const FormChuyenDi: React.FunctionComponent<IProps> = (props: IProps) => {

    const [data, setData] = React.useState<IHoKhau>(props.dataHoKhau);

    //layout
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    // value change
    const onChangeValue = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = event.currentTarget.name;

        if(key === "idNhanKhau") {
            // TODO
        }
        setData({ ...data, [key]: event.currentTarget.value });

    };

    return (
        <>
            <Modal
                width={"55rem"}
                title="Đăng kí tạm vắng"
                visible={true}
                onOk={() => null}
                onCancel={() => props.cancel()}
            >
                <Form.Item label="Mã hộ khẩu:" {...layout} required>
                    <Input disabled value={props.dataHoKhau.maHoKhau} />
                </Form.Item>
                <Form.Item label="Tên chủ hộ:" {...layout} required>
                    <Input disabled value={props.dataHoKhau["chuHo.hoTen"]} />
                </Form.Item>
                <Form.Item label="Mã khu vực:" {...layout} required>
                    <Input disabled value={props.dataHoKhau.maKhuVuc} />
                </Form.Item>
                <Form.Item label="Địa chỉ hiện tại:" {...layout} required>
                    <Input disabled value={props.dataHoKhau.diaChi} />
                </Form.Item>
                <Form.Item label="Địa chỉ mới:" {...layout}>
                    <Input name="diaChi" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Lý Do" {...layout}>
                    <Input.TextArea name="lyDoChuyen" onBlur={onChangeValue} rows={4}/>
                </Form.Item>
            </Modal>
        </>
    );
}