/**
 * Created by ryzy-004 on 2017/7/17.
 */
import React from 'react';
import {Menu,Row,Col,Icon ,Switch} from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export  default class CourseBody extends React.Component{
    constructor(){
        super();
        this.state={
            current:'1',
            tabs:[
                {tabName:"查看全部订单",id:1,link:'/finance/order'},
                {tabName:"查看全部帐户",id:2,link:'/finance/account'},
                {tabName:"体现审核",id:3,link:'/finance/audit'},
            ]
        }

    }
    handleClick = (e) => {

        this.setState({
            current: e.key,
        });
    };

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
