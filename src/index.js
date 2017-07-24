import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/antd/dist/antd.css';
import './css/style.css';
import './css/reset.css';
import Root from './router';
import registerServiceWorker from './registerServiceWorker';
import todoZSM from './js/redux/reducers'



class Index extends React.Component{
    render(){
        return(

                <Root/>

        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

registerServiceWorker();
/*
 * Created by ryzy-004 on 2017/7/17.
 */

