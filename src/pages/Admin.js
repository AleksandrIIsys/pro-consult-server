import React from 'react';
import {Dropzone} from "react-dropzone";
import SideBar from "../components/SideBar";
import {Outlet} from "react-router-dom";

const Admin = () => {

    return (
        <div className={"admin_panel"}>
            <SideBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;