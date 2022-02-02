import React from 'react';

const MainAbout = () => {
    return (
            <div>
                <div className="about__content">
                    <div className="container">
                        <div className="about__title">
                            Pro consult company UZBEKISTAN
                        </div>
                        <div className="about__text">
                            Pro Consult Company is a multi-industrial engineering, management and development
                            consultancy, who
                            delivers verified and tailored solutions for the clients and partners.
                            Using extensive experience and practice of its experts PCC provides consultancy and
                            engineering
                            services across the project lifecycle: initiation, feasibility studies and researches,
                            design,
                            procurement, construction, comissioning, operation and maintenance.
                            PCC prioritizes quality, efficiency and innovativeness, integrates national knowledge with
                            international experience and is committed to deliver fit for purpose and sustainable
                            solutions.
                            PCC does not set competition to show its superiority, instead PCC cooperates with the
                            leaders of the
                            piece of area when it is wise to provide the best result for customers and clients and
                            recieve true
                            recognition.
                        </div>
                        <a className="about__link" href="">More info</a>
                        <div className="about__title-sphera">
                            Core areas
                        </div>
                        <div className="about__items">
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-1.svg" alt=""/></div>
                                <div className="about__item-title">
                                    Services
                                </div>
                                <div className="about__item-text">
                                    We provide services in areas such as management of national and
                                    international projects in Uzbekistan, including assistance in drafting contracts,
                                    organization of procurement...
                                </div>
                                <div className="about__item__btn"><a href="">more info</a></div>
                            </div>
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-2.png" alt=""/></div>
                                <div className="about__item-title">
                                    Sectors
                                </div>
                                <div className="about__item-text">
                                    The company provides services in various industries, such as energy, civil
                                    engineering,
                                    heavy and light industry, as well as services related to the implementation of
                                    investment
                                    projects.
                                </div>
                                <div className="about__item__btn"><a href="">more info</a></div>
                            </div>
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-3.png" alt=""/></div>
                                <div className="about__item-title">
                                    Education
                                </div>
                                <div className="about__item-text">
                                    courses to improve the qualifications of engineers and also individual consultants.
                                    Pro
                                    consult company is a developer of author's training courses and periodically
                                    conducts
                                    seminars...
                                </div>
                                <div className="about__item__btn"><a href="">more info</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MainAbout;