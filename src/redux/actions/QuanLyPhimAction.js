import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { SET_DANH_SACH_PHIM } from "./Type/QuanLyPhimType";
export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim();
            console.log(result);
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content,
            })


        } catch (errors) {
            console.log('errors', errors);
        }
    }
}