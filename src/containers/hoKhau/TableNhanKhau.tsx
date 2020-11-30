import { Table } from "antd";
import { TableProps } from "antd/lib/table";
import React from "react";
import { INhanKhau } from "../../models/INhanKhau";


interface ITableNhanKhau {
    key: string;
    title: string;
    dataIndex: keyof INhanKhau;

}

type ITableData = Partial<INhanKhau> & { key: string;};
// eslint-disable-next-line @typescript-eslint/ban-types
type IProps = TableProps<{}> & {
    dataSource: Array<ITableData>;
}

export const TableNhanKhau: React.FunctionComponent<IProps> = (props: IProps)  => {

    
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
    ];

    return(
        <Table columns={columns} {...props} dataSource={props.dataSource}/>
    );
}