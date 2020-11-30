export interface ITamVang {
    id: string;
    idNhanKhau: string;
    maGiayTamVang: string;
    noiTamTru: string;
    tuNgay: Date;
    denNgay: Date;
    lyDo: string;
}

export class TamVangModel implements ITamVang {
    id = "";
    idNhanKhau = "";
    maGiayTamVang = "";
    noiTamTru = "";
    tuNgay = new Date();
    denNgay = new Date();
    lyDo = "";

} 