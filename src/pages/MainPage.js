import React from 'react';
import FooterTest from "../Models/FooterTest";
import Main from "../Models/Main";

const MainPage = ({currentLocale, handleChangeLocale}) => {
    return (
        <div>
            <Main currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}></Main>
            <FooterTest></FooterTest>
        </div>
    );
};

export default MainPage;