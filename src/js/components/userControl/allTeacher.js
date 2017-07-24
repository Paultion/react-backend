import React from 'react';
import {Table,Input,Radio,Select} from 'antd';
import modal from '../modal';

const Search = Input.Search;
const Option = Select.Option;


const columns = [{
    title: '用户',
    dataIndex: 'userImg',
    render: (text, record) => (
        <img style={{width:'30px'}} src={record.userImg}/>
    )
},{
    title: '',
    dataIndex: 'nickName',
},{
    title: '真实姓名',
    dataIndex: 'realName',
},{
    title: '性别',
    dataIndex: 'sex',
}, {
    title: '手机号',
    dataIndex:'phone',

}, {
    title: '所在城市',
    dataIndex:'city',
}, {
    title: '注册时间',
    dataIndex: 'subscribeTime',
},{
    title: '订阅学生',
    dataIndex:'userConcernTime',
}, {
    title: '是否为优质讲师',
    dataIndex:'userRegisterIP',
},{
    title: '操作',
    render: () => (
        <Radio.Group>
            <Radio.Button value="copyHref">设为优质</Radio.Button>
        </Radio.Group>
    )
}];

const data = [];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

export default class allCourse extends React.Component{
    componentWillMount(){
        fetch('http://liyang.zhishimao.ngrok.cc/api/backend/user/list/lecturer', {
            method: "POST",
            body:'pageSize=9&pageIndex=1'
        }) .then(response => response.json())
            .then(json => {json.data.content.map((res,index)=>{
                data.push({
                    idStr:json.data.content[index].idStr,
                    key:index,
                    nickName: json.data.content[index].user.nickName,
                    realName:json.data.content[index].user.realName,
                    phone:json.data.content[index].user.phone,
                    sex:json.data.content[index].user.sex,
                    city:json.data.content[index].user.country,
                    subscribeTime:json.data.content[index].user.subscribeTime,
                    isSubScribe:json.data.content[index].user.issubscribe,
                    deleted:json.data.content[index].user.deleted,
                    wxUnionid:json.data.content[index].user.wxUnionid,
                    userImg:json.data.content[index].user.avatar,

                })
            })

                console.log(data)
            })
    }
    render(){
        return(
            <div>
                <h3 className="rigthH3">查看全部课程</h3>
                <Search
                    placeholder="请输入搜索内容"
                    style={{ width: 200 }}
                    onSearch={value => console.log(value)}
                />
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>


        )
    }
}