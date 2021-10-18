import { SET_CHI_TIET_DAT_VE } from "./Type/QuanLyDatVeType";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongve(maLichChieu);
            console.log(result);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_CHI_TIET_DAT_VE,
                    chiTietPhongVe: result.data.content,
                })

                console.log('result', result);
            }


        } catch (error) {
            console.log('errors', error.response?.data);
        }
    }
}

export const datVeAction = (thongTinDatVe) => {
    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log('ressss', result);
            // if (result.data.statusCode === 200) {
            //     dispatch({
            //         type: SET_CHI_TIET_DAT_VE,
            //         chiTietPhongVe: result.data.content,
            //     })
            // }


        } catch (error) {
            console.log('errors', error.response.data);
        }
    }
}