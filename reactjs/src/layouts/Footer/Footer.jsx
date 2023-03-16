import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        logo
                    </div>
                    <div className="col">
                        <ul className="footer_nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">phim</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="footer_nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">phim</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="footer_nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">phim</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="footer_nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">phim</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
