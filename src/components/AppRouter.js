import React, {useContext, useEffect} from 'react';
import Home from "../pages/Home";
import {useRoutes} from "react-router";
import {ADMIN_ROUTER, HOME_ROUTER, NEWS_ROUTER} from "../utils/consts";
import News from "../pages/News";
import Admin from "../pages/Admin";
import AdminNews from "./AdminNews";
import {Context} from "../index";
import {Route,Routes} from "react-router-dom";

const AppRouter = () => {
    const {news} = useContext(Context)
    useEffect(() => {
        let isMounted = true;
        fetch('/api/news/').
        then((response)=>{
            return response.json()
        }).then((n)=>{
            news.setNews(n);})
        return () => { isMounted = false };
    }, []);

    return (
        <Routes>
            <Route exact path={HOME_ROUTER} element={<Home/>}></Route>
            <Route  path={NEWS_ROUTER} element={<News/>}></Route>
            <Route  path={ADMIN_ROUTER} element={<Admin/>}>
                <Route exact path={'news'} element={<AdminNews/>}></Route>
                <Route path={"clients"} element={<p>2</p>}></Route>
                <Route path={"partners"} element={<p>3</p>}></Route>
                <Route path={"testimonials"} element={<p>4</p>}></Route>
            </Route>
            <Route  path={HOME_ROUTER} element={<Home/>}></Route>
        </Routes>
    );

};
export default AppRouter;