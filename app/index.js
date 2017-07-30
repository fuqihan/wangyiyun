/**
 * Created by Administrator on 2017/7/15.
 */
import React, {Component} from "react";
import {AppRegistry} from "react-native";
 import Router  from "./router/index";
 import { Provider } from 'react-redux'
 import store from './store/index.js'
class InitApp extends Component {
    render() {
        return  <Provider store={store}>
  <Router />
  </Provider>;
    }
}

AppRegistry.registerComponent('wangyiyun', ()=>InitApp);
