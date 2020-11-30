export interface IKhaiTu {
    id: string;
    soGiayKhaiTu: string;
    idNguoiKhai: string;
    idNguoiChet: string;
    ngayKhai: Date;
    ngayChet: Date;
    lyDoChet: string;
}

export class KhaiTuModel implements IKhaiTu {
    id = "";
    soGiayKhaiTu = "";
    idNguoiKhai = "";
    idNguoiChet = "";
    ngayKhai =  new Date();
    ngayChet =  new Date();
    lyDoChet = "";
}
