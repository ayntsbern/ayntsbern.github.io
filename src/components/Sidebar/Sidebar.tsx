import React, { ReactNode } from 'react';
import './Sidebar.scss';
import 'bootstrap/js/src/collapse.js';
import { Image } from 'react-bootstrap';

export interface MenuItemsType {
    icon: React.ReactNode;
    to: string;
    title: string;
}

export function Sidebar({ heading, mobileHeading, menuItems, className }: { heading: React.ReactNode, mobileHeading: React.ReactNode, menuItems: MenuItemsType[], className?: string }) {
    // <div className={`${className} sidebar w-75 h-100`}>
    //     <div className='heading'>{heading}</div>
    //     <ul className="content px-2 list-group list-group-flush">
    //         {menuItems.map((item, i) =>
    //             <li key={i} className='list-group-item'>
    //                 <a className="nav-link" href={item.to}>{item.title}</a>
    //             </li>)}
    //     </ul>
    // </div>



    // <nav className="navbar navbar-expand-lg fixed-top" id="sideNav">
    //     <a className="navbar-brand" href="#page-top">
    //         <span className="d-block d-lg-none">Some text</span>
    //         <span className="d-none d-lg-block">
    //             <div className='heading'>{heading}</div>
    //         </span>
    //     </a>

    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav">
    //             {menuItems.map((item, i) =>
    //                 <li key={i} className='nav-item text-center'>
    //                     <a className="nav-link d-flex align-items-center justify-content-center" href={item.to}>
    //                         {item.icon}
    //                         <span style={{ marginLeft: '.75rem' }}>{item.title}</span>
    //                     </a>
    //                     <hr className='my-0 mx-auto w-75' />
    //                 </li>
    //             )}
    //         </ul>
    //     </div>
    // </nav>
    return (
        <nav className="navbar navbar-expand-lg fixed-top px-3" id="sideNav">
            {/* <div className="container-fluid"> */}
            <a className="navbar-brand" href="/">
                <span className="d-block d-lg-none">
                    {mobileHeading}
                </span>
                
                <span className="d-none d-lg-block">
                    <div className='heading'>{heading}</div>
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {menuItems.map((item, i) =>
                        <li key={i} className='nav-item text-center'>
                            <a className="nav-link d-flex align-items-center justify-content-center" href={item.to}>
                                {item.icon}
                                <span style={{ marginLeft: '.75rem' }}>{item.title}</span>
                            </a>
                            <hr className='my-0 mx-auto w-75' />
                        </li>
                    )}
                </ul>
            </div>
            {/* </div> */}
        </nav>
    );
}