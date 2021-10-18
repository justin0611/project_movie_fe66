import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer"
import { CarouselReducer } from "./reducers/CarouselReducer"
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer"
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer"
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer"
const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));