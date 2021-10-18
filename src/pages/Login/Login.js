import React from 'react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Login(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log('userlogin', userLogin);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            console.log('sss', values);
            const action = dangNhapAction(values);
            dispatch(action);
        },
    });

    return (
        <div className='container'>

            <form onSubmit={formik.handleSubmit} className="form-signin">

                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Tài Khoản</label>
                <input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} type="text" id="taiKhoan" className="form-control" placeholder="Nhập vào tài khoản" />
                <label htmlFor="inputPassword" className="sr-only">Mật Khẩu</label>
                <input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} type="password" id="inputPassword" className="form-control" placeholder="Nhập mật khẩu" />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                    </label>
                    <div><a href="/">Quên mật khẩu</a> <NavLink className='ml-5' to='/register'>Đăng ký</NavLink></div>

                </div>

                <button className="btn btn-lg btn-primary btn-block" type='submit'>Đăng Nhập</button>
            </form>

        </div>
    )
}
