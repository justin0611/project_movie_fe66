
import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { SET_CAROUSEL } from "./Type/CarouselType";


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner();
            console.log(result);
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content,
            })


        } catch (errors) {
            console.log('errors', errors);
        }
    }
}