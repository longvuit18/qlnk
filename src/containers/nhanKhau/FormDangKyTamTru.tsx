import { Input, DatePicker, Form, Modal } from "antd";
import React from "react";
import moment from "moment";
import { ITamTru, TamTruModel } from "../../models/ITamTru";

interface IProps {
    cancel: () => void;
}

export const FormDangKyTamTru: React.FunctionComponent<IProps> = (props: IProps) => {

    const [data, setData] = React.useState<ITamTru>(new TamTruModel());
    const { RangePicker } = DatePicker;
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
                <Form.Item label="So CMT:" {...layout} required>
                    <Input name="idNhanKhau" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Mã giấy tạm trú" {...layout}>
                    <Input name="maGiayTamTru" onBlur={onChangeValue} />
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