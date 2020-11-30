import { Input, DatePicker, Form, Modal } from "antd";
import React from "react";
import { ITamVang, TamVangModel } from "../../models/ITamVang";
import moment from "moment";
import { INhanKhau } from "../../models/INhanKhau";

interface IProps {
    cancel: () => void;
    nhanKhau: INhanKhau;
}

export const FormDangKyTamVang: React.FunctionComponent<IProps> = (props: IProps) => {

    const [data, setData] = React.useState<ITamVang>(new TamVangModel());
    const { RangePicker } = DatePicker;
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


    // get value Date

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onChangeDate  = (values: [moment.Moment, moment.Moment], _formatString: [string, string]) => {
        setData({...data, tuNgay: values[0].toDate(), denNgay: values[1].toDate()});
        
    }

    return (
        <>
            <Modal
                width={"55rem"}
                title="Đăng kí tạm vắng"
                visible={true}
                onOk={() => null}
                onCancel={() => props.cancel()}
            >
                <Form.Item label="Họ và tên" {...layout}>
                    <Input disabled value={props.nhanKhau.hoTen} />
                </Form.Item>
                <Form.Item label="Số CMT" {...layout}>
                    <Input disabled value={props.nhanKhau.soHoChieu} />
                </Form.Item>
                <Form.Item label="Ngày sinh" {...layout}>
                    <Input disabled value={new Date(props.nhanKhau.namSinh).toLocaleDateString()} />
                </Form.Item>
                <Form.Item label="Mã giấy tạm vắng" {...layout}>
                    <Input name="maGiayTamVang" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Nơi tạm trú" {...layout}>
                    <Input name="noiTamTru" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Từ ngày- Đến ngày:" {...layout}>
                    <RangePicker onChange={onChangeDate} />
                </Form.Item>
                <Form.Item label="Lý Do" {...layout}>
                    <Input.TextArea name="lyDo" onBlur={onChangeValue} rows={4}/>
                </Form.Item>
            </Modal>
        </>
    );
}