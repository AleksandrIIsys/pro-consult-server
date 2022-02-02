import React, {useCallback, useState} from 'react';
import {Dropzone, useDropzone} from "react-dropzone";
import SideBar from "../components/SideBar";
import {Outlet} from "react-router-dom";
import AdminRouter from "../components/AdminRouter";

const Admin = () => {

    return (
        <div className={"admin_panel"}>
            <SideBar/>
            <Outlet></Outlet>


        </div>
    );
};

export default Admin;