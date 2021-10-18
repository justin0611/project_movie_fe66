import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import { DANG_NHAP } from "./Type/QuanLyNguoiDungType";
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