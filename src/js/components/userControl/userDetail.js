import React from 'react';
import {Button} from "antd";


const columns = [{
    labelName:'昵称：',
    datdIndex:'userName',
},{
    labelName:'手机号：',
    datdIndex:'',
},{
    labelName:'注册ip：',
    datdIndex:'',
},{
    labelName:'注册时间：',
    datdIndex:'',
},{
    labelName:'注册设备类型：',
    datdIndex:'',
},{
    labelName:'注册设备系统型号：',
    datdIndex:'',
},{
    labelName:'真实姓名：',
    datdIndex:'',
},{
    labelName:'性      别：',
    datdIndex:'',
},{
    labelName:'所在地区：',
    datdIndex:'',
},{
    labelName:'关注公众号时间：',
    datdIndex:'',
},{
    labelName:'是否关注公众号：',
    datdIndex:'',
}];

export default class userDetail extends React.Component{

    constructor(){
        super();


    }
    render(){
        var  labelList=columns.map((res,index)=>{
            return <label key={index} style={{width:200}}>{res.labelName}</label>
        });
        return(
            <div>
                <div>
                    <div><h3>用户资料</h3><Button>编辑</Button></div>
                    <img style={{width:111}} src="http://www.chenfangka.com/wp-content/uploads/2017/03/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067-250x250.jpeg?imageView/1/w/260/h/260/q/100" alt=""/>
                    {labelList}
                </div>
            </div>
        )
    }
}