import React, {useCallback, useState} from 'react';
import {Dropzone, useDropzone} from "react-dropzone";
import SideBar from "../components/SideBar";
import {Outlet} from "react-router-dom";

const Admin = ({currentLocale,handleChangeLocale}) => {

    return (
        <div className={"admin_panel"}>
            <SideBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;