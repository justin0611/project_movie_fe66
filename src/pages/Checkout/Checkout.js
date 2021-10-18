import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import { USER_LOGIN } from '../../util/settings/config';
import { StopOutlined } from '@ant-design/icons'
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import './Checkout.css'
import { DAT_VE } from '../../redux/actions/Type/QuanLyDatVeType';
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';

const { TabPane } = Tabs;
function Checkout(props) {
    const user = JSON.parse(localStorage.getItem(USER_LOGIN))

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
    console.log('chitietphongve', chiTietPhongVe);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(layChiTietPhongVeAction(props.match.params.id))

    }, [])
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            if (indexGheDD != -1) {
                classGheDangDat = 'gheDangDat';
            }
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe,
                    })
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>


                    {ghe.daDat === true ? <StopOutlined /> : ghe.stt}

                </button>
            </Fragment>

        })
    }

    return (
        <div className='container-fluid'>
            <div className="row px-2">
                <div className="col-9">
                    <div className="d-flex justify-content-between">
                        <div className="">{thongTinPhim?.tenCumRap}</div>
                        <div className="">5:00</div>
                    </div>
                    <hr />
                    <p className='text-center'>man hinh</p>
                    <div>{renderGhe()}</div>
                    <div className="d-flex justify-content-center">
                        <div className="text-success">ghe dang chon</div>
                        <div className="mx-5 text-warning">ghe da co nguoi chon</div>
                        <div className="text-danger">ghe khong the chon</div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-success">ghe trung tam</div>
                        <div className="mx-5 text-warning">ghe dep</div>
                    </div>
                </div>
                <div className="col-3">
                    <h1>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()} VND</h1>
                    <hr />
                    <div className="">
                        <h5>{thongTinPhim?.tenPhim}</h5>
                        <p>{thongTinPhim?.diaChi} </p>
                        <p>{thongTinPhim?.gioChieu} {thongTinPhim?.ngayChieu}</p>
                    </div>
                    <hr />
                    <div className="">
                        <h5>Ghe dang chon</h5>
                        <div className="">
                            {danhSachGheDangDat?.map((gheDD, index) => {
                                return <span className="text-success" key={index}> {gheDD.stt}</span>
                            })}
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <h5>email</h5>
                        <p>{user.email}</p>
                    </div>
                    <hr />
                    <div className="">
                        <h5>phone</h5>
                        <p>{user.soDT}</p>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className=""> <h5>ma giam gia</h5>
                            <input type="text" placeholder='nhap vao day' /></div>
                        <div className=""> <button>Ap dung</button></div>
                    </div>
                    <hr />
                    <div className="">
                        <h4>Hinh thuc thanh toan</h4>
                        <p className='text-danger'>vui long chon ghe</p>
                    </div>
                    <button onClick={() => {
                        const thongTinDatVe = new ThongTinDatVe()
                        thongTinDatVe.maLichChieu = props.match.params.id;
                        thongTinDatVe.danhSachVe = danhSachGheDangDat;
                        console.log(thongTinDatVe);
                        dispatch(datVeAction(thongTinDatVe))
                    }} className='btn btn-danger w-100'>dat ve</button>
                </div>
            </div>

        </div>
    )
}


function callback(key) {
    console.log(key);
}

export default function (props) {

    return <div className="">    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="01 CHON GHE & THANH TOAN" key="1">
            <Checkout {...props} />
        </TabPane>
        <TabPane tab="KET QUA DAT VE" key="2">
            <KetQuaDatVe {...props} />
        </TabPane>
    </Tabs></div>

}
function KetQuaDatVe(props) {

    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const user = JSON.parse(localStorage.getItem(USER_LOGIN));
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(layThongTinNguoiDungAction());
    }, [])
    console.log('sfsafasf', thongTinNguoiDung);
    return (

        <div className="container">
            <h1 className='text-center'>lich su dat ve</h1>
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}