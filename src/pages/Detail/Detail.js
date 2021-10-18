import React, { useEffect } from 'react';
import { Button } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { Tabs, Radio, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SET_CHI_TIET_PHIM } from '../../redux/actions/Type/QuanLyRapType';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;

export default function Detail(props) {
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);

    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;
        dispatch(layThongTinChiTietPhim(id))
    }, [])

    return (

        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', }}>
            <CustomCard
                style={{ minHeight: '100vh' }}
                effectColor="#C780FF" // required
                color="#14AEFF" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="row w-75" style={{ margin: '0 auto' }}>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6">
                                <img src={filmDetail.hinhAnh} alt="" width='100%' height='400px' />
                            </div>
                            <div className="col-6">
                                <h3>{filmDetail.tenPhim}</h3>
                                <p>{filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className='container mt-5'>
                    <Tabs tabPosition={'left'}>
                        {filmDetail.heThongRapChieu?.map((htr, index) => {
                            return <TabPane tab={<div><img src={htr.logo} width={50} height={50} />{htr.tenHeThongRap}</div>} key={index}>
                                {htr.cumRapChieu?.map((rap, index) => {
                                    return <div key={index}>
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={rap.hinhAnh} alt="" />
                                            </div>
                                            <div className="col-9"><h3>{rap.tenCumRap}</h3>
                                                <p>{rap.diaChi}</p>
                                                <div  style={{ display: 'flex' }}>
                                                    {rap.lichChieuPhim?.map((lich, index) => {
                                                        return <NavLink to={`/checkout/${lich.maLichChieu}`} key={index}>{moment(lich.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                                    })}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                })}
                            </TabPane>
                        })}

                    </Tabs>
                </div>
            </CustomCard>



        </div>
    )
}
