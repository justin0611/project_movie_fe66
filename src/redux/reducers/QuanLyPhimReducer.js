import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../actions/Type/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/Type/QuanLyRapType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 8068,
            "tenPhim": "Suicide Squad 22",
            "biDanh": "suicide-squad-22",
            "trailer": "https://www.youtube.com/watch?v=JuDLepNa7hw",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/suicide-squad-22_gp01.jpg",
            "moTa": "Suicide Squad 22",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-08-22T08:08:14.043",
            "danhGia": 10
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],

    filmDetail: {},
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }

        case SET_PHIM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;
            state.arrFilm = state.arrFilmDefault.filter((film => film.dangChieu === state.dangChieu));
            return { ...state }
        }
        case SET_PHIM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter((film => film.sapChieu === state.sapChieu));;
            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return { ...state }
        }

        default: return { ...state }
    }
}