/**
 * Created by Administrator on 2017/7/18.
 */
import React, { Component } from "react";
import HomeScreen from "../pages/home/HomeScreen.js";
import MusicView from "../pages/musicView/MusicView";
import Search from "../pages/search/Search";
import Login from '../pages/login/login.js'
import SideBar from "../pages/sideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const Router = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        MusicView: { screen: MusicView },
        Search: { screen: Search },
        Login: { screen: Login },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default Router;
