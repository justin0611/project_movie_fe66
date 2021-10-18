import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "./Type/QuanLyNguoiDungType";
import { history } from "../../App"
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP,
                    thongTinDangNhap: result.data.content,
                })

                console.log('result', result);
            }
            history.goBack();


        } catch (error) {
            console.log('errors', error.response.data);
        }
    }
}
export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.lichSuDatVe();
            console.log('resultNGUOIDUDNG', result);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,
                })

                console.log('resultNGUOIDUDNG', result);
            }

        } catch (error) {
            console.log('errors', error.response.data);
        }
    }
}