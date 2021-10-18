import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {
    state = {
        tabPosition: 'left',
    };


    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };
    componentDidMount() {
        console.log('homemenuaaaa', this.props);
    }
    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((rap, index) => {
            let { tabPosition } = this.state;
            return <TabPane tab={<img src={rap.logo} width='50px' />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {rap.lstCumRap?.map((cumrap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex' }} >
                                <img src={rap.logo} className='w-25' />
                                <div className='text-left ml-2'>{cumrap.tenCumRap}
                                    <p>Chi Tiet</p>
                                </div>
                            </div>
                        } key={index} >
                            {cumrap.danhSachPhim?.map((phim, index) => {
                                return <Fragment key={index}> <div style={{ display: 'flex' }}>
                                    <div style={{ display: 'flex' }}>
                                        <img src={phim.hinhAnh} alt={phim.tenPhim} width={150} height='100%' onError={(e) => {
                                            e.target.onerror = null; e.target.src = "https://picsum.photos/200"
                                        }} />
                                        <div className='ml-2'>
                                            <h5>{phim.tenPhim}</h5>
                                            <p>{cumrap.diaChi}</p>
                                            <div className='row '>
                                                {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lich, index) => {
                                                    return <NavLink className='col-3 mb-2 w-100' to='/' key={index}>
                                                        {moment(lich.ngayChieuGioChieu).format('hh:mm A')}
                                                    </NavLink>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>


                    })}
                </Tabs>
            </TabPane>
        })
    }


    render() {
        const { tabPosition } = this.state;
        console.log('homemenuaaaa', this.props);

        return (
            <>
                <div className="my-5">
                    <Tabs tabPosition={tabPosition}>
                        {this.renderHeThongRap()}
                    </Tabs>
                </div>
            </>
        );
    }
}