import { SET_CAROUSEL } from "../actions/Type/CarouselType";

const stateDefault = {
    arrImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://designer.com.vn/wp-content/uploads/2017/07/poster-phim-hanh-dong.jpg"
        },
        {
            "maBanner": 2,
            "maPhim": 1282,
            "hinhAnh": "https://artcity.vn/wp-content/uploads/2020/07/thiet-ke-poster-phim-3.jpg"
        },
        {
            "maBanner": 3,
            "maPhim": 1282,
            "hinhAnh": "https://designer.com.vn/wp-content/uploads/2017/07/poster-phim-kinh-di.jpg"
        },
    ],


}

export const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_CAROUSEL: {
            state.arrImg = action.arrImg;
        }
        default: return { ...state }
    }
}