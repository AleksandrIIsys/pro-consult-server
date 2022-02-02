import React from 'react';

const Footer = () => {
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
                        <div className="footer__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos officia in atque
                            aliquid.
                            Assumenda autem hic neque cupiditate eos beatae itaque eum non. Natus nemo obcaecati
                            atque
                            veritatis eius.
                        </div>
                    </div>
                    <div className="footer__short-menu">
                        <div className="footer__short-menu-title">
                            About
                        </div>
                        <a href="">Who we are</a>
                        <a href="">What we do</a>
                        <a href="">Where we work</a>
                        <a href="">News</a>
                        <a href="">Careers</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="footer__sitemap">
                        <div className="footer__sitemap-title">
                            Sitemap
                        </div>
                        <a href="">Who we are</a>
                        <a href="">What we do</a>
                        <a href="">Where we work</a>
                        <a href="">News</a>
                        <a href="">Careers</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
        </div>
            <div className="footer__copyright">
        C. Copyright 2021. All the right reserved by PCC.
            </div>
    </div>
    );
};

export default Footer;