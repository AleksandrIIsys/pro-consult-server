import React from 'react';
import Home from "../pages/Home";
import {useRoutes} from "react-router";
import {ADMIN_ROUTER, HOME_ROUTER, NEWS_ROUTER} from "../utils/consts";
import News from "../pages/News";
import Admin from "../pages/Admin";
import AdminNews from "./AdminNews";

const AppRouter = () => {
    let routes = useRoutes([
        {
            path: HOME_ROUTER,
            element: <Home/>
        },
        {
            path: NEWS_ROUTER,
            element: <News/>
        },
        {
            path: '*',
            element: <Home/>
        },
        {
            path: ADMIN_ROUTER,
            element: <Admin/>,
            children: [
                {
                    path: "news",
                    element:<AdminNews/>
                },
                {
                    path: "clients",
                    element:<p>2</p>

                },
                {
                    path: "testimonials",
                    element:<p>4</p>

                },
                {
                    path: "partners",
                    element:<AdminNews/>,

                }]
        }
    ]);
    return routes

};
export default AppRouter;