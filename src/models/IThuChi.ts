export interface IThuChi {
    id: string;
    "hoKhau.hoTen": string;
    "hoKhau.maHoKhau": string;
    ngayDong: Date;
    tienDaDong: string;
    tienNo: string;
    tienQuyenGop: string;
    ghiChu: string;

}


export class IThuChiModel implements IThuChi {
    id = "";
    "hoKhau.hoTen" = "";
    "hoKhau.maHoKhau" = "";
    ngayDong = new Date(0);
    tienDaDong = "";
    tienNo = "";
    tienQuyenGop = "";
    ghiChu = "";
}