import React, {useEffect, useState} from 'react';
import {AdminSideBarData} from "./AdminSideBarData";
import {Link, NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className={"Sidebar"}>
            <ul className={"SidebarList"}>
            {
                AdminSideBarData.map((val,key)=>
                    <NavLink to={val.link} className={({isActive})=>(isActive ? 'active_sidebar' : '')}>
                    <li key={key}  className={'row'}> {" "}
                        <div>{val.title}</div>
                    </li>
                    </NavLink>
                )
            }
            </ul>
        </div>
    );
};

export default SideBar;