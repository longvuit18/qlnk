export interface ITamTru {
    id: string;
    idNhanKhau: string;
    maGiayTamTru: string;
    soDienThoaiNguoiDangKy: string;
    noiTamTru: string;
    tuNgay: Date;
    denNgay: Date;
    lyDo: string;
}

export class TamTruModel implements ITamTru {
    id = "";
    idNhanKhau = "";
    maGiayTamTru = "";
    soDienThoaiNguoiDangKy = "";
    noiTamTru = "";
    tuNgay = new Date();
    denNgay = new Date();
    lyDo = "";

} 