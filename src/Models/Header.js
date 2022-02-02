import HeaderTop from "./Header_top";
import HeaderContent from "./Header_content";
import React from 'react';

const Header = () => {
    return (
        <div className={"header"}>
            {/*<HeaderTop></HeaderTop>*/}
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;