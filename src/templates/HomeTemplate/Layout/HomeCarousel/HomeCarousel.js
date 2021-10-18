import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getCarouselAction());
    }, [])




    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <h3 style={contentStyle}>
                    <img src={item.hinhAnh} className="w-100" alt="1" />
                </h3>
            </div>
        })
    }
    return (
        <Carousel effect="fade">
            {renderImg()}

        </Carousel>
    )
}
