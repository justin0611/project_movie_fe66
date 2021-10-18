import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import HomeMenu from './HomeMenu/HomeMenu';

export default function Home(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction());
        dispatch(layDanhSachHeThongRapAction());
    }, [])

    return (
        <div> <HomeCarousel />

            <div className='container my-5'>

                <MultipleRowSlick arrFilm={arrFilm} />
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
        </div>
    )
}
