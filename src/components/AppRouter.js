import React, {useContext, useEffect} from 'react';
import Home from "../pages/Home";
import {useRoutes} from "react-router";
import {ADMIN_ROUTER, HOME_ROUTER, MAIN_ROUTER, NEWS_ROUTER, WHEREWEWORK_ROUTER} from "../utils/consts";
import News from "../pages/News";
import Admin from "../pages/Admin";
import AdminNews from "./AdminNews";
import {Context} from "../index";
import {Route,Routes} from "react-router-dom";
import WhereWeWork from "../pages/WhereWeWork";
import Header from "../Models/Header";
import MainSlider from "../Models/MainSlider";
import MainPage from "../pages/MainPage";
import {fetchNews} from "../http/Api";

const AppRouter = ({currentLocale,handleChangeLocale}) => {
    const {news} = useContext(Context)
    useEffect(() => {
        let isMounted = true;
        fetchNews().then((data)=>{
            data.forEach((elem, index) => {
                elem.id = index + 1
            });
            news.setNews(data)
        })
        return () => { isMounted = false };
    }, []);

    return (
        <Routes>
            <Route exact path={HOME_ROUTER} element={<Home currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}/>}>
                <Route path={MAIN_ROUTER} element={<MainPage/>}></Route>
                <Route  path={NEWS_ROUTER} element={<News/>}></Route>
                <Route  path={WHEREWEWORK_ROUTER} element={<WhereWeWork/>}></Route>
            </Route>

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