import { Row, Col, Input, DatePicker, Radio, Form, Modal } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import React from "react";
import { INhanKhau, NhanKhauModel } from "../../models/INhanKhau";

interface IProps {
    cancel: () => void;
}

export const FormThemNhanKhau: React.FunctionComponent<IProps> = (props: IProps) => {

    const [data, setData] = React.useState<INhanKhau>(new NhanKhauModel());

    //layout
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    // value change
    const onChangeValue = (event: React.FocusEvent<HTMLInputElement>) => {
        const key = event.currentTarget.name;
        setData({ ...data, [key]: event.currentTarget.value });

    };

    // get value Date

    const onChangeDate  = (event: React.FocusEvent<HTMLInputElement>) => {
        setData({...data, namSinh: new Date(event.currentTarget.value)});
    }

    // get value radio

    const onChangeRadio = (e: RadioChangeEvent) => {
        setData({...data, gioiTinh: e.target.value});
    }
    return (
        <>
            <Modal
                width={"55rem"}
                title="Thêm mới"
                visible={true}
                onOk={() => null}
                onCancel={() => props.cancel()}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Họ và tên" style={{ marginLeft: "4rem" }}>
                            <Input name="hoTen" onBlur={onChangeValue} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Biệt danh">
                            <Input name="bietDanh" onBlur={onChangeValue} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item label="Ngày sinh" style={{ marginLeft: "4rem" }}>
                            <DatePicker onBlur={onChangeDate}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Giới tính" >
                            <Radio.Group onChange={onChangeRadio}>
                                <Radio value="nam">Nam</Radio>
                                <Radio value="nữ">Nữ</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Dân tộc" style={{ marginLeft: "4.9rem" }}>
                            <Input name="danToc" onBlur={onChangeValue} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Tôn giáo">
                            <Input name="tonGiao" onBlur={onChangeValue} />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Số CMT/CCCD" {...layout}>
                    <Input name="..." onBlur={onChangeValue} />
                </Form.Item>

                <Form.Item label="Nơi sinh" {...layout}>
                    <Input name="noiSinh" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Nguyên quán" {...layout}>
                    <Input name="nguyenQuan" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Quốc tịch" {...layout}>
                    <Input name="quocTich" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Số hộ chiếu" {...layout}>
                    <Input name="hoChieu" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Nơi thường trú" {...layout}>
                    <Input name="noiThuongChu" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Địa chỉ hiện nay" {...layout}>
                    <Input name="diaChiHienNay" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Trình độ học vấn" {...layout}>
                    <Input name="trinhDoHocVan" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Trình độ chuyên môn" {...layout}>
                    <Input name="trinhDoChuyenMon" onBlur={onChangeValue} />
                </Form.Item>
                <Form.Item label="Trình độ ngoại ngữ" {...layout}>
                    <Input name="trinhDoNgoaiNgu" onBlur={onChangeValue} />
                </Form.Item>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Nghề nghiệp" style={{ marginLeft: "2.9rem" }}>
                            <Input name="ngheNghiep" onBlur={onChangeValue} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Nơi làm việc">
                            <Input name="noiLamViec" onBlur={onChangeValue} />
                        </Form.Item>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}