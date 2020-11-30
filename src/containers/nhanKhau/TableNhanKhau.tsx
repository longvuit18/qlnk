/* eslint-disable react/prop-types */
import { Table, Space } from "antd";
import { TableProps } from "antd/lib/table";
import React from "react";
import { INhanKhau } from "../../models/INhanKhau";


interface ITableNhanKhau {
    key: string;
    title: string;
    dataIndex?: keyof INhanKhau;
    render?: (a: INhanKhau) => JSX.Element;

}

type ITableData = Partial<INhanKhau> & { key: string; };
// eslint-disable-next-line @typescript-eslint/ban-types
type IProps = TableProps<{}> & {
    dataSource: Array<ITableData>;
    openDangKyTamVang: (value: INhanKhau) => void;
    openKhaiTu: (value: INhanKhau) => void;
}

export const TableNhanKhau: React.FunctionComponent<IProps> = (props: IProps) => {


    const columns: Array<ITableNhanKhau> = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên",
            dataIndex: "hoTen",
            key: "name",
        },
        {
            title: "Giới tính",
            dataIndex: "gioiTinh",
            key: "sex",
        },
        {
            title: "Ngày sinh",
            dataIndex: "namSinh",
            key: "dayOfBirth",
        },
        {
            title: "Địa chỉ",
            dataIndex: "diaChiMoi",
            key: "address",
        },
        {
            title: "Action",
            key: "action",
            // eslint-disable-next-line react/display-name
            render: (value: INhanKhau): JSX.Element => {
                return (
                    <Space size="middle">
                        <a onClick={() => props.openDangKyTamVang(value)}>Đăng kí tạm vắng</a>
                        <a onClick={() => props.openKhaiTu(value)}>Khai tử</a>
                    </Space>
                )
            },
        },
    ];

    return (
        <Table columns={columns} {...props} dataSource={props.dataSource} />
    );
}