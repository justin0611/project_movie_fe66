import React from 'react'
import { NavLink } from 'react-router-dom';
import { history } from '../../App'

export default function Film(props) {

    const { phim } = props;
    return (
        <div className="card" >

            <img className="card-img-top w-100" src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => {
                e.target.onerror = null; e.target.src = "https://picsum.photos/200"
            }} />


            <div className="card-body">
                <h5 className="card-title">{phim.tenPhim}</h5>
                <p className="card-text">{phim.moTa.length > 30 ? <span>{phim.moTa.slice(0, 100)} ...</span> : <span>{phim.moTa}</span>}</p>
                <p className="card-text">Danh gia {phim.danhGia}</p>
                <NavLink to={`/detail/${phim.maPhim}`} className='btn btn-danger'>Đặt vé</NavLink>
            </div>
            <div onClick={() => {
                history.push(`/detail/${phim.maPhim}`)
            }} className='btn btn-danger'>Đặt vé</div>
        </div>

    )
}
