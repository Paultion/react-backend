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
    dataIndex: 'userName',
},{
    title: '真实姓名',
    dataIndex: 'userRealityName',
},{
    title: '性别',
    dataIndex: 'userSex',
}, {
    title: '手机号',
    dataIndex:'userPhone',

}, {
    title: '所在城市',
    dataIndex:'userCity',
}, {
    title: '注册时间',
    dataIndex: 'userRegisterTime',
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
            <Radio.Button value="copyHref">取消优质</Radio.Button>
        </Radio.Group>
    )
}];

const data = [{
    key: 1,
    userName:'dlj',
    userImg:'http://www.chenfangka.com/wp-content/uploads/2017/03/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067-250x250.jpeg?imageView/1/w/260/h/260/q/100',
    userRealityName:'董龙江',
    userSex:'nan',
    userPhone:'13683622049',
    userCountry:'中国',
    userCity:'山东',
    userRegisterTime:'2017-01-03 24:00:00',
    userConcernAccount:'是',
    userConcernTime:'2017-01-03 24:00:00',
    userRegisterIP:'192.168.0.1',
    userFacilityType:'ios',
    userFacilityNumber:'32138216765831',
},{
    key: 2,
    userName:'dlj',
    userImg:'http://www.chenfangka.com/wp-content/uploads/2017/03/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067-250x250.jpeg?imageView/1/w/260/h/260/q/100',
    userRealityName:'董龙江',
    userSex:'nan',
    userPhone:'13683622049',
    userCountry:'中国',
    userCity:'山东',
    userRegisterTime:'2017-01-03 24:00:00',
    userConcernAccount:'是',
    userConcernTime:'2017-01-03 24:00:00',
    userRegisterIP:'192.168.0.1',
    userFacilityType:'ios',
    userFacilityNumber:'32138216765831',
}];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

export default class allCourse extends React.Component{

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