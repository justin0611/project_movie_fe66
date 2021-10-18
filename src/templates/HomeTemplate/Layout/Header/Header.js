import React from 'react'
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';

export default function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/news" >News</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button onClick={() => {
                            history.push('/login')
                        }} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Sign in</button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign up</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}
