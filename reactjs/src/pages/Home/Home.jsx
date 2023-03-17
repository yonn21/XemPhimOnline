import React from 'react'
// import { NavLink } from 'react-router-dom';

export default function Home(props) {

    // const renderPhimle = () => {
    //     return phimle.map((film, index) => {
    //         if (index === 0) {
    //             return <div className="large" key={index}>
    //                 <NavLink title={film.name} to={`/info/${film.name}`}>
    //                     <img src={film.src} alt="" />
    //                     <span className='label'>HD-Vietsub</span>
    //                     <p>{film.name}</p>
    //                 </NavLink>
    //             </div>
    //         } else {
    //             return <div className="small" key={index}>
    //                 <NavLink title={film.name} to={`/info/${film.name}`}>
    //                     <img src={film.src} alt="" />
    //                     <span className='label'>HD-Vietsub</span>
    //                     <p>{film.name}</p>
    //                 </NavLink>
    //             </div>
    //         }
    //     })
    // }

    // const renderPhimChieuRap = () => {
    //     return phimchieurap.map((film, index) => {
    //         if (index === 0) {
    //             return <div className="large" key={index}>
    //                 <NavLink title={film.name} to={`/info/${film.name}`}>
    //                     <img src={film.src} alt="" />
    //                     <span className='label'>HD-Vietsub</span>
    //                     <p>{film.name}</p>
    //                 </NavLink>
    //             </div>
    //         } else {
    //             return <div className="small" key={index}>
    //                 <NavLink title={film.name} to={`/info/${film.name}`}>
    //                     <img src={film.src} alt="" />
    //                     <span className='label'>HD-Vietsub</span>
    //                     <p>{film.name}</p>
    //                 </NavLink>
    //             </div>
    //         }
    //     })
    // }

    return (
        <div className='container pd-80'>
            <ul className="tabs nav nav-tabs border-0 mb-4">
                <h4 className='mr-5' onClick={() => {
                    
                }}>PHIM LẺ MỚI CẬP NHẬT</h4>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        
                    }}>Hành động</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        
                    }}>Hoạt hình</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        
                    }}>Kinh dị</button>
                </li>
            </ul>
            <div className="list-film">
                {/* {renderPhimle()} */}
                <div className="clear"></div>
            </div>

            <ul className="tabs nav nav-tabs border-0 mb-4 mt-5">
                <h4 className='mr-5'>PHIM CHIẾU RẠP</h4>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        
                    }}>2023</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        
                    }}>2022</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        
                    }}>2021</button>
                </li>
            </ul>
            
            <div className="list-film">
                {/* {renderPhimChieuRap()} */}
                <div className="clear"></div>
            </div>
        </div>
    )
}
