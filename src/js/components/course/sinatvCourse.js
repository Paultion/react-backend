import React from 'react';
import {Table,Input,Radio,Select,Modal,Button} from 'antd';
import addModal from '../modal';
import {Link} from 'react-router';
import navLink from '../NavLink'
const Search = Input.Search;
const Option = Select.Option;




const data = [{
    key: 1,
    courseImg:'http://www.chenfangka.com/wp-content/uploads/2017/03/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067-250x250.jpeg?imageView/1/w/260/h/260/q/100',
    courseTitle:'javascript',
    courseTeacher: '乔布斯',
    courseState:'直播中',
    courseTime: '2016-01-02 12：30：40',
    coursePrice:'30.00',
}];


export default class allCourse extends React.Component{
    constructor(){
        super();
        this.state={
            visible:false,
        }
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

        const columns = [
            {
                title: '',
                dataIndex: 'courseImg',
                render: (text, record) => (
                    <img style={{width:'30px'}} src={record.courseImg}/>
                )
            },{
                title: '标题',
                dataIndex: 'courseTitle',
                render: (text, record) => (
                    <Link to={`/courseDetail/${record.key}`}>{record.courseTitle}</Link>
                )
            },{
                title: '讲师',
                dataIndex: 'courseTeacher',
            },{
                title: '状态',
                dataIndex: 'courseState',
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
                dataIndex:'courseTime',
                sorter: (a, b) => a.courseTime - b.courseTime,
            }, {
                title: '互动价格',
                dataIndex:'coursePrice',
            },{
                title: '操作',
                render: () => (


                    <Radio.Group>
                        <Radio.Button value="copyHref" onClick={this.showModal}>结束</Radio.Button>
                        <Radio.Button value="default"ref="myInput" onClick={this.showModal}>下架</Radio.Button>
                    </Radio.Group>
                )
            }];
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

