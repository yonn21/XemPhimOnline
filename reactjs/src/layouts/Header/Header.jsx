import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <div className='header'>
            <nav className="container navbar navbar-expand-sm">
                {/* <NavLink className="navbar-brand" to="/">Navbar</NavLink> */}
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/phim-moi">PHIMMOI</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list/phim-le">PHIM LẺ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list/phim-bo">PHIM BỘ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list/the-loai">THỂ LOẠI</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/quoc-gia">QUỐC GIA</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/nam-phat-hanh">NĂM PHÁT HÀNH</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list/phim-chieu-rap">PHIM CHIẾU RẠP</NavLink>
                        </li>
                    </ul>
                    <form className="header-form form-inline my-2 my-lg-0">
                        <input className="form-search form-control" type="text" placeholder="Tìm phim, diễn viên, ..." />
                        <i className="fa fa-search" type="submit"></i>
                    </form>
                </div>
            </nav>
        </div>
  )
}
