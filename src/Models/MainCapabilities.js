import React from 'react';
import {FormattedMessage} from "react-intl";

const MainCapabilities = () => {
    return (
        <div className="capabilities">
            <div className="container">
                <div className="capabilities__title">
                    <FormattedMessage id={"capabilities_title"}/>
                </div>
                <div className="capabilities__items">
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_plan"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-1.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_plan"}/>
                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_consulting"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-2.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_consulting"}/>                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_procurement"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-3.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_procurement"}/>                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_project_supervision"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-4.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_project_supervision"}/>                            </div>
                    </div>
                    <div className="capabilities__item">
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_education"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-5.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_education"}/>                            </div>
                    </div>
                </div>
                <div className=" capabilities__item__btn"><a href=""><FormattedMessage id={'read_more_capabilities'}/></a>
                </div>
            </div>
        </div>
    );
};

export default MainCapabilities;