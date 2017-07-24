/**
 * Created by ryzy-004 on 2017/7/17.
 */
import React from 'react';
import {Menu,Row,Col,Icon ,Switch} from 'antd';
import {Link} from 'react-router';
import allUsers from './allUsers';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export  default class CourseBody extends React.Component{
    constructor(){
        super();
        this.state={
            current:'1',
            tabs:[
                {tabName:"查看全部用户",id:1,link:'/userControl/allUsers'},
                {tabName:"查看全部讲师",id:2,link:'/userControl/allTeacher'},
                {tabName:"待处理的讲师审核",id:3,link:'/userControl/auditTeacher'},
                {tabName:"推荐的讲师",id:4,link:'/userControl/recommendTeacher'},
                {tabName:'优质的讲师',id:5,link:'/userControl/excellentTeacher'},
                {tabName:'员工账号管理',id:6,link:'/userControl/userAccountControl'},
            ]
        }

    }
    handleClick = (e) => {

        this.setState({
            current: e.key,
        });
    };
    componentWillMount(){
        var a=window.location.href.split('#')[1];
        this.state.tabs.map((res,index)=>{
            if(res.link==a){

                this.setState({
                    current:res.id.toString()
                })
            }
        });
        console.log(a)
    }
    render() {
        var menuList=this.state.tabs.map((res,index)=>{
            return  <Menu.Item key={res.id}>
                        <Link to={res.link}>{res.tabName}</Link>
                    </Menu.Item>
        });
        return (

            <div>

                <Row>
                    <Col span={4} className="rightCourse">
                        <Menu mode="vertical"
                              selectedKeys={[this.state.current]}
                              onClick={this.handleClick}
                              className="leftMenu"
                              onSelect={this.state.a}
                        >


                            <Menu.Item disabled className="leftMenuTitle">
                                <Icon type="book"/>用户管理
                            </Menu.Item>
                            {menuList}
                        </Menu>
                    </Col>
                    <Col span={20}>
                        {this.props.children||<allUsers/>}
                    </Col>
                </Row>
            </div>
        );
    }
}
/**
 * Created by ryzy-004 on 2017/7/17.
 */
