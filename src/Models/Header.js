import HeaderTop from "./Header_top";
import HeaderContent from "./Header_content";
import React from 'react';

const Header = ({currentLocale,handleChangeLocale}) => {
    return (
        <div className={"header"}>
            {/*<HeaderTop></HeaderTop>*/}
            <HeaderContent currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}></HeaderContent>
        </div>
    );
};

export default Header;