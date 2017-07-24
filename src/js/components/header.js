import React from 'react';
import {Link} from 'react-router';
import {Menu,Row,Col} from 'antd';
import NavLink from './NavLink';

export  default class Header extends React.Component{
    constructor(){
        super();
        this.state={
            current:'1',
            tabs:[
                {tabName:"首页",id:'1',link:'/'},
                {tabName:"课程管理",id:'2',link:'/course'},
                {tabName:"用户管理",id:'3',link:'/userControl'},
                {tabName:"财务管理",id:'4',link:'/finance'},
                {tabName:'数据中心',id:'5',link:'/'},
                {tabName:'系统设置',id:'6',link:'/'},
            ],
        }
    }
    handleClick = (e) => {

        this.setState({
            current: e.key,
        });
        console.log(this.state.current)
    };
    componentWillMount(){
        var a='/'+(window.location.href.split('#')[1].split('/')[1]);
        this.state.tabs.map((res,index)=>{
            if(res.link==a){

                this.setState({
                    current:res.id.toString()
                })
            }
        });
    console.log(a)
    }
    render(){
        var tabList=this.state.tabs.map((res,index)=>{
            return <Menu.Item key={res.id}>
                        <NavLink to={res.link}>{res.tabName}</NavLink>
                </Menu.Item>
        });
       return(
           <header>
               <Row>
                   <Col span={2}></Col>
                   <Col span={5}>
                        <div className="logo">
                            <img src="" />
                            <p>知识猫 | 管理平台</p>
                        </div>
                   </Col>
                   <Col span={1}></Col>
                   <Col span={14}>
                       <Menu mode="horizontal"
                             defaultSelectedKeys={[this.state.current]}
                             onClick={this.handleClick}
                             className="headerMenu"
                       >

                           {tabList}
                       </Menu>
                   </Col>
                   <Col span={2}></Col>
               </Row>
           </header>

       )
    }
}