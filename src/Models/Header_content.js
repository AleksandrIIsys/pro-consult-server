import React from 'react';
import {NavLink} from "react-router-dom";
const HeaderContent = () => {
    return (
        <div className="header__content">
            <div className="container">
                <div className="header__inner">
                    <div className="header__content-logo">
                        <NavLink to={'/'}>
                            <img src="../image/logo.png" alt=""/>
                        </NavLink>
                    </div>
                    <nav>
                        <div className="header__btn-menu">
                            <span className="icon-bars"></span>
                        </div>
                        <ul className="topmenu">
                            <li><a href="index.html" className="active">Who we are <span
                                className="fa fa-angle-down"></span></a>
                                <ul className="submenu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="">Governance</a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Partners</a></li>
                                    <li><a href="">Membership</a></li>
                                    <li><a href="">Polices & Strategies</a></li>
                                    <li><a href="">References</a></li>
                                </ul>
                            </li>
                            <li><a href="" className="active">What we do<i className="bi bi-caret-right-fill"></i></a>
                                <ul className="submenu">
                                    <li><a href="">Infrastructure</a>
                                        <ul className="submenu">
                                            <li><a href="">Water and Environment<i
                                                className="bi bi-caret-right-fill"></i></a></li>
                                            <li><a href="">Energy and Resources</a></li>
                                            <li><a href="">Transport</a></li>
                                            <li><a href="">Telecommunication</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="services.html">Services</a>
                                        <ul className="submenu">
                                            <li><a href="services.html#plan">Plan </a></li>
                                            <li><a href="#design">Design</a></li>
                                            <li><a href="#delivery">Deliver</a></li>
                                            <li><a href="#manage">Manage</a></li>
                                            <li><a href="#decommission">Decommission</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Education</a>
                                        <li><a href="">Projects</a>
                                            <ul className="submenu">
                                                <li><a href="">Infrastructure</a></li>
                                                <li><a href="">Management Services</a></li>
                                                <li><a href="">Urban development </a></li>
                                            </ul>
                                        </li>
                                    </li>
                                </ul>
                            </li>

                            <li><a href="">Where We work<span className="fa fa-angle-down"></span></a>
                                <ul className="submenu">
                                    <li><a href="">Location</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="/news">News<span className="fa fa-angle-down"></span></a></li>
                            <li><a href="">Careers<span className="fa fa-angle-down"></span></a></li>
                            <li><a href="">contact <span className="fa fa-angle-down"></span></a></li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div className="lang-menu">
                <select className={"selected-lang"}>
                    <option>English</option>
                    <option>Русский</option>
                    <option>Узбек</option>
                </select>
            </div>


        </div>
    );
};

export default HeaderContent;