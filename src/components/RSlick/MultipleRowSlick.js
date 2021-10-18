import React, { Component } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/actions/Type/QuanLyPhimType";
import Film from "../Film/Film";


const MultipleRowSlick = (props) => {
    const dispatch = useDispatch();

    const rederFilms = () => {
        console.log('propsfim', props);
        return props.arrFilm.map((item, index) => {
            return <div key={index} className='w-75'>
                <Film phim={item} />

            </div>
        })
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div>
            <button onClick={() => {
                const action = { type: SET_PHIM_SAP_CHIEU }
                dispatch(action);
            }}>Phim sap chieu</button>
            <button >Phim dang chieu</button>
            <Slider {...settings}>
                {rederFilms()}
            </Slider>
        </div>
    );

}
export default MultipleRowSlick;