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
                {tabName:"创建课程",id:1,link:'/course/createCourse'},
                {tabName:"查看全部课程",id:2,link:'/course/allCourse'},
                {tabName:"待审核课程",id:3,link:'/course/auditCourse'},
                {tabName:"正在直播的课程",id:4,link:'/course/recommendsCourse'},
                {tabName:'推荐的课程',id:5,link:'/course/sinatvCourse'},
            ],
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
            return <Menu.Item  key={res.id}>
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
                        >
                            <Menu.Item disabled className="leftMenuTitle">
                                <Icon type="book"/>课程管理
                            </Menu.Item>
                            {menuList}
                        </Menu>
                    </Col>
                    <Col span={20}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}
/**
 * Created by ryzy-004 on 2017/7/17.
 */
