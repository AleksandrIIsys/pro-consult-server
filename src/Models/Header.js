import React from 'react';
import {LOCALES} from "../i18n/Locale";
import {FormattedMessage, IntlProvider} from "react-intl";
import {MessageHeader} from "../i18n/MessageHeader";
import {NavLink} from "react-router-dom";

const Header = ({currentLocale,handleChangeLocale}) => {
    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN },
        { name: 'Узбек', code: LOCALES.UZBEK },
    ]
    return (
        <div className="header__content">
            <IntlProvider messages={MessageHeader[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
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
                                <li><div className="active">
                                    <FormattedMessage id={"who_we_are"}/><span
                                    className="fa fa-angle-down"></span></div>
                                    <ul className="submenu">
                                        <li><a href="about.html"><FormattedMessage id={"about_us"}/></a></li>
                                        <li><a href=""><FormattedMessage id={"governance"}/></a></li>
                                        <li><a href=""><FormattedMessage id={"foundation"}/></a></li>
                                        <li><a href=""><FormattedMessage id={"partners"}/></a></li>
                                        <li><a href=""><FormattedMessage id={"membership"}/></a></li>
                                        <li><a href=""><FormattedMessage id={"police"}/> </a></li>
                                        <li><a href=""><FormattedMessage id={"references"}/></a></li>
                                    </ul>
                                </li>
                                <li><div><FormattedMessage id={"what_we_do"}/><i className="bi bi-caret-right-fill"></i></div>
                                    <ul className="submenu">
                                        <li><a href=""><FormattedMessage id={"sectors"}/></a>
                                            <ul className="submenu">
                                                <li><a href=""><FormattedMessage id={"water_and_environment"}/></a></li>
                                                <li><a href=""><FormattedMessage id={"energy_and_resources"}/></a></li>
                                                <li><a href=""><FormattedMessage id={"transport"}/></a></li>
                                                <li><a href=""><FormattedMessage id={"telecommunication"}/></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="services.html"><FormattedMessage id={"services"}/></a>
                                            <ul className="submenu">
                                                <li><a href="services.html#plan"><FormattedMessage id={"plan"}/></a></li>
                                                <li><a href="#design"><FormattedMessage id={"design"}/></a></li>
                                                <li><a href="#delivery"><FormattedMessage id={"deliver"}/></a></li>
                                                <li><a href="#manage"><FormattedMessage id={"manage"}/></a></li>
                                                <li><a href="#decommission"><FormattedMessage id={"decommission"}/></a></li>
                                            </ul>
                                        </li>
                                        <li><a href=""><FormattedMessage id={"education"}/></a>
                                        </li>
                                    </ul>
                                </li>

                                <li><a href={"/where-we-work"}><FormattedMessage id={"where_we_work"}/><span className="fa fa-angle-down"></span></a>
                                </li>
                                <li><a href="/news"><FormattedMessage id={"news"}/><span className="fa fa-angle-down"></span></a></li>
                                <li><a href=""><FormattedMessage id={"careers"}/><span className="fa fa-angle-down"></span></a></li>
                                <li><a href=""><FormattedMessage id={"contact"}/> <span className="fa fa-angle-down"></span></a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </IntlProvider>
            <div className="lang-menu">
                <select className={'selected-lang'} onChange={handleChangeLocale} defaultValue={currentLocale} defaultChecked={currentLocale}>
                    {languages.map(({ name, code }) => (
                        <option key={code} defaultValue={code} >
                            {name}
                        </option>
                    ))}
                </select>
            </div>


        </div>
    );
};

export default Header;