import { INhanKhau, } from "../../models/INhanKhau"


export type IActionNhanKhau = {
    type: "layToanBoNhanKhau",
    data: Array<INhanKhau>;
}

export class NhanKhauStore {
    data: Array<INhanKhau> = [];

}

export const reducerNhanKhau = (state: NhanKhauStore = new NhanKhauStore(), action: IActionNhanKhau)  => {
    switch (action.type) {
        case "layToanBoNhanKhau":
            
            return {
                ...state,
                data: action.data
            }
    
        default:
            return state;
    }
}