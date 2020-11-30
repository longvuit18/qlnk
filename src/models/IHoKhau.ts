
export interface IHoKhau {
    id: string;
    maHoKhau: string;
    "chuHo.hoTen": string;
    "chuHo.diaChiHienNay": string;
    "chuHo.soCMT": string;
    "chuHo.gioiTinh": string;
    "chuHo.ngaySinh": Date;
    maKhuVuc: string;
    diaChi: string;
    ngayLap: Date;
    ngayChuyenDi: Date;
    lyDoChuyen: string;
    nguoiThucHien: string;
}


export class HoKhauModel implements IHoKhau{
    id =  "";
    maHoKhau =  "";
    "chuHo.hoTen" = "";
    "chuHo.diaChiHienNay" = "";
    "chuHo.soCMT" = "";
    "chuHo.gioiTinh" = "";
    "chuHo.ngaySinh" = new Date(0);
    maKhuVuc =  "";
    diaChi =  "";
    ngayLap = new Date(0);
    ngayChuyenDi = new Date(0);
    lyDoChuyen =  "";
    nguoiThucHien =  "";
}
