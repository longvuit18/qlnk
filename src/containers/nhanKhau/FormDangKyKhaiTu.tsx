import { Input, DatePicker, Form, Modal } from "antd";
import React from "react";
import moment from "moment";
import { IKhaiTu, KhaiTuModel } from "../../models/IKhaiTu";
import { INhanKhau } from "../../models/INhanKhau";

interface IProps {
    cancel: () => void;
    nhanKhau: INhanKhau;
}

export const FormDangKyKhaiTu: React.FunctionComponent<IProps> = (props: IProps) => {

    const [data, setData] = React.useState<IKhaiTu>(new KhaiTuModel());
    
    //layout
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    // value change
    const onChangeValue = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = event.currentTarget.name;

        if(key === "soCMT") {
            // TODO
        }
        setData({ ...data, [key]: event.currentTarget.value });

    };


    // get value Date

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onChangeDate  = (values: moment.Moment, _formatString: string) => {
        setData({...data, ngayChet: values.toDate()});
        
    }

    return (
        <>
            <Modal
                width={"55rem"}
                title="Khai tử"
                visible={true}
                onOk={() => null}
                onCancel={() => props.cancel()}
            >
                <Form.Item label="Họ tên" {...layout}>
                    <Input disabled value={props.nhanKhau.hoTen} />
                </Form.Item>
                <Form.Item label="Ngày sinh" {...layout}>
                    <Input disabled value={new Date(props.nhanKhau.namSinh).toLocaleDateString()} />
                </Form.Item>
                <Form.Item label="Mã giấy khai tử" {...layout}>
                    <Input name="maGiayTamTru" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Ngày chết" {...layout}>
                    <DatePicker onChange={onChangeDate} />
                </Form.Item>
                <Form.Item label="Lý Do chết" {...layout}>
                    <Input.TextArea name="lyDoChet" onBlur={onChangeValue} rows={4}/>
                </Form.Item>
            </Modal>
        </>
    );
}