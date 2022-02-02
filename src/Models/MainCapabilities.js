import React from 'react';

const MainCapabilities = () => {
    return (
        <div className="capabilities">
            <div className="container">
                <div className="capabilities__title">
                    Our capabilities
                </div>
                <div className="capabilities__items">
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            Plan & design
                        </div>
                        <img src="../image/capabilities/capabilities-1.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                Our company provides services for the design and development stage of feasibility
                                studies,
                                including the development of feasibility studies, business plans and more
                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            Consulting
                        </div>
                        <img src="../image/capabilities/capabilities-2.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                We advise on the implementation of investment projects, from the development of a
                                feasibility study to the signing of the act of commissioning
                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            Procurement
                        </div>
                        <img src="../image/capabilities/capabilities-3.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                Our company provides services for the development of tender documents and universal
                                provisions of the company for procurement procedures
                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            project supervision
                        </div>
                        <img src="../image/capabilities/capabilities-4.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                We provide supervision of the project both during the construction period and for the
                                entire
                                period of the project
                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            Education
                        </div>
                        <img src="../image/capabilities/capabilities-5.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                Our company provides quality training courses for engineers, recognized by leading
                                companies
                                and ministries
                            </div>
                    </div>
                </div>
                <div className=" capabilities__item__btn"><a href="">Read more about our capabilities</a>
                </div>
            </div>
        </div>
    );
};

export default MainCapabilities;