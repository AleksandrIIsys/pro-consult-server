import React from 'react';

const FooterTest = () => {
    return (
        <div className={"footer"}>
            <div className="footer__row">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__logo__content">
                            <div className="footer__logo_slogan">
                                <img src="../image/logo.png" alt=""/>
                                <div className="footer__slogan">
                                    <span className="highlighting"> EXPERIENCE </span> <br/>
                                    Exceeding
                                    Expectation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__copyright">
                <div className={"container"}>

                    <div className={"rofl"}>

                    <div className={"copyright__block"}>

                        <div className={"copyright__text"}>
                            C. Copyright 2021. All the right reserved by PCC.
                        </div>
                    </div>
                        <div className="footer__contacts">
                            <div className="header__phone">
                                +998 (71) 123-45-67
                            </div>
                            <div className="header__mobile">
                                +998 (90) 123-45-67
                            </div>
                            <div className="header__emaiL">
                                info@pro-consult.uz
                            </div>
                            <div className={"footer__icons"}>
                                <a href={""}><img className={"icon"} src={"../image/icon/Telegram_white.svg"}/></a>
                                <a href={""}><img className={"icon"} src={"../image/icon/Facebook_white.svg"}/></a>
                                <a href={""}><img className={"icon"} src={"../image/icon/Twitter_white.svg"}/></a>
                                <a href={""}><img className={"icon"} src={"../image/icon/YouTube_white.svg"}/></a>
                            </div>
                        </div>

                    </div>

            </div>

            </div>
        </div>
    );
};

export default FooterTest;