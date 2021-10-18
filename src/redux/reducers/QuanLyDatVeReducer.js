import { DAT_VE, SET_CHI_TIET_DAT_VE } from "../actions/Type/QuanLyDatVeType"


const stateDefault = {
    chiTietPhongVe: [],
    danhSachGheDangDat: []

}
export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_DAT_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        case DAT_VE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);

            if (index != -1) {
                danhSachGheCapNhat.splice(index, 1);
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon)
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }
        default: return { ...state }
    }
}