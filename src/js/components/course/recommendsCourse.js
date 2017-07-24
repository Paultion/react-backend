import React from 'react';
import {Table,Input,Radio,Select,Modal,Button} from 'antd';
import addModal from '../modal';
import {Link} from 'react-router';
import navLink from '../NavLink'
const Search = Input.Search;
const Option = Select.Option;




const data = [];

const columns = [
    /*{
        title: '',
        dataIndex: 'courseImg',
        render: (text, record) => (
            <img style={{width:'30px'}} src={record.courseImg}/>
        )
    },*/{
        title: '标题',
        dataIndex: 'title',
        render: (text, record) => (
            <Link to={`/courseDetail/${record.key}`}>{record.title}</Link>
        )
    },{
        title: '讲师',
        dataIndex: 'nickName',
    },{
        title: '状态',
        dataIndex: 'status',
        filters: [{
            text: '待审核',
            value: '待审核',
        }, {
            text: '审核未通过',
            value: '审核未通过',
        }, {
            text: '报名中',
            value: '报名中',
        },{
            text: '直播中',
            value: '直播中',
        },{
            text: '已结束',
            value: '已结束',
        },{
            text: '下架',
            value: '下架',
        }],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.courseState.indexOf(value) === 0,
        sorter: (a, b) => a.courseState.length - b.courseState.length,
    }, {
        title: '直播时间',
        dataIndex:'subscribeTime',
        sorter: (a, b) => a.courseTime - b.courseTime,
    }, {
        title: '互动价格',
        dataIndex:'coursePrice',
    },{
        title: '操作',
        render: () => (
            <Radio.Group>

                <Radio.Button value="copyHref">结束</Radio.Button>
                <Radio.Button value="default"ref="myInput" onClick={this.showModal}>下架</Radio.Button>
            </Radio.Group>
        )
    }];

export default class allCourse extends React.Component{
    constructor(){
        super();
        this.state={
            visible:false,
        }
    }
    componentWillMount(){
        fetch('http://liyang.zhishimao.ngrok.cc/api/backend/course/courseList', {
            method: "POST",
            body:'status=正在直播&pageSize=10&pageIndex=1'
        }) .then(response => response.json())
            .then(json => {json.data.content.map((res,index)=>{
                data.push({
                    idStr:json.data.content[index].idStr,
                    key:index,
                    title: json.data.content[index].lecturer.title,
                    nickName: json.data.content[index].lecturer.nickName,
                    status: json.data.content[index].status,
                    subscribeTime: json.data.content[index].lecturer.user.subscribeTime

                })
            })

                console.log(data)
            })
    }
    showModal = () => {
        this.setState({
            visible: true,

        });

    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render(){


        return(
            <div>
                <h3 className="rigthH3">查看全部课程</h3>
                <Search
                    placeholder="请输入搜索内容"
                    style={{ width: 200 }}
                    onSearch={value => console.log(value)}
                />
                <Table columns={columns} dataSource={data} />
                <Modal
                    title=''
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText='确认'
                    cancelText="取消"
                    visible={this.state.visible}
                >

                </Modal>
            </div>


        )

    }

}

