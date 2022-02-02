import React from "react";
function HeaderTop(){
    return (
        <div className="header__top">
        <div className="container">
            <div className="header__row">
                <div className="header__contacts">
                    <div className="header__phone">
                        <a href="tel:+998 (71) 123-45-67">+998 (71) 123-45-67</a>
                    </div>
                    <div className="header__mobile">
                        <a href="tel:+998 (90) 123-45-67">+998 (90) 123-45-67</a>
                    </div>
                    <div className="header__emaiL">
                        <a href="#">info@pro-consult.uz </a>
                    </div>
                </div>
                <div className="lang-menu">
                    <div className="selected-lang">
                        English
                    </div>
                    <ul>
                        <li><a>English</a></li>
                        <li><a>Русский</a></li>
                        <li><a>Узбек</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}
export default HeaderTop;